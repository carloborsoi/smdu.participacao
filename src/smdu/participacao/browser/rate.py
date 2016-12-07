# -*- coding: utf-8 -*-
from persistent.dict import PersistentDict
from zope import event
from zope.annotation.interfaces import IAnnotations
from plone import api
from pyquery import PyQuery as pq
from cioppino.twothumbs.event import DislikeEvent
from cioppino.twothumbs.event import LikeEvent
from cioppino.twothumbs.event import UndislikeEvent
from cioppino.twothumbs.event import UnlikeEvent
from smdu.participacao import concordancias
from smdu.participacao import discordancias
from smdu.participacao import APOIOS_KEY


def inicializa_anotacoes(context):
    """ Inicializa o objeto de anotações caso ainda não exista.
    """
    annotations = IAnnotations(context)
    pq_texto = pq(context.text.output)
    paragrafos = pq_texto.find('.paragrafo')
    if concordancias not in annotations:
        annotations[concordancias] = PersistentDict()
    if discordancias not in annotations:
        annotations[discordancias] = PersistentDict()
    for i, paragrafo in enumerate(paragrafos):
        paragrafo_id = i + 1
        if paragrafo_id not in annotations[concordancias]:
            annotations[concordancias][paragrafo_id] = PersistentDict()
        if paragrafo_id not in annotations[discordancias]:
            annotations[discordancias][paragrafo_id] = PersistentDict()
    return annotations


def get_total(context, paragrafo_id):
    """ Devolve um dicionário com total de concordâncias e discordâncias.
    """
    inicializa_anotacoes(context)
    annotations = IAnnotations(context)
    ressalvas = 0

    for voto in annotations[concordancias][paragrafo_id].itervalues():
        if 'ressalva' in voto.keys():
            ressalvas += 1
    return {
        'concordancias': (len(annotations[concordancias][paragrafo_id])-ressalvas),
        'concordancias_ressalva': ressalvas,
        'discordancias': len(annotations[discordancias][paragrafo_id])
    }


def get_usuarios_votantes(context, paragrafo_id):
    """ Devolve um dicionário com total de concordâncias e discordâncias.
    """
    inicializa_anotacoes(context)
    annotations = IAnnotations(context)

    # Criação das linhas de dados de usuário que concordaram
    concordancias_paragrafo = annotations[concordancias][paragrafo_id]
    linha_minuta_concordantes = ''
    for usuario_concordante in concordancias_paragrafo:
        voto = concordancias_paragrafo[usuario_concordante]
        if voto.get('has_voted', False):
            linha_minuta_concordantes += usuario_concordante
            linha_minuta_concordantes += ' (Ressalva: %s), ' % voto['ressalva'].replace('\n', '   ') \
                if 'ressalva' in voto else ', '

    # Criação das linhas de dados de usuário que discordam
    discordancias_paragrafo = annotations[discordancias][paragrafo_id]
    linha_minuta_discordantes = ''
    for usuario_discordante in discordancias_paragrafo:
        voto = discordancias_paragrafo[usuario_discordante]
        if voto.get('has_voted', False):
            linha_minuta_discordantes += usuario_discordante + ', '

    return {
        'concordancias': linha_minuta_concordantes,
        'discordancias': linha_minuta_discordantes
    }


def get_meu_voto(context, paragrafo_id, userid=None):
    """ Se o usuário concordou, devolve 1. Se discordou, -1.
    Se não votou, 0. Se nenhum usuário for passado, o corrente será usado.
    """
    annotations = IAnnotations(context)
    userid = userid or api.user.get_current().getUserName()
    if userid in annotations[concordancias][paragrafo_id]:
        annotation = annotations[concordancias][paragrafo_id][userid]
        if 'ressalva' in annotation.keys() :
            return 2
        else:
            return 1
    elif userid in annotations[discordancias][paragrafo_id]:
        return -1
    return 0


def concordar(context, paragrafo_id, userid=None):
    """ Concorda com um parágrafo de um item.
    Se nenhum usuário for passado, o corrente será usado.
    Se o usuário tinha concordado com o parágrafo previamente, remove tal voto.
    Se o usuário tinha discordado do item previamente, remove o voto e adiciona
    um novo de concordância.
    """
    action = None
    userid = userid or _get_user_id()
    annotations = IAnnotations(context)
    if userid in annotations[discordancias][paragrafo_id]:
        annotations[discordancias][paragrafo_id].pop(userid)

    if userid in annotations[concordancias][paragrafo_id] and 'ressalva' not in annotations[concordancias][paragrafo_id][userid] :
        annotations[concordancias][paragrafo_id].pop(userid)
        action = "desfazer"
        event.notify(UnlikeEvent(context))
    else:
        annotations[concordancias][paragrafo_id][userid] = PersistentDict()
        annotations[concordancias][paragrafo_id][userid]["has_voted"] = True
        action = "concordar"
        event.notify(LikeEvent(context))

    context.reindexObject(idxs=['concordancias'])
    return action

def concordar_ressalva(context, paragrafo_id, userid=None):
    """ Concorda com um parágrafo de um item.
    Se nenhum usuário for passado, o corrente será usado.
    Se o usuário tinha concordado com o parágrafo previamente, remove tal voto.
    Se o usuário tinha discordado do item previamente, remove o voto e adiciona
    um novo de concordância.
    """
    action = None
    userid = userid or _get_user_id()
    annotations = IAnnotations(context)

    if userid in annotations[discordancias][paragrafo_id]:
        annotations[discordancias][paragrafo_id].pop(userid)

    if  userid in annotations[concordancias][paragrafo_id] and 'ressalva' in annotations[concordancias][paragrafo_id][userid] :
        annotations[concordancias][paragrafo_id].pop(userid)
        action = "desfazer"
        event.notify(UnlikeEvent(context))
    else:
        annotations[concordancias][paragrafo_id][userid] = PersistentDict()
        annotations[concordancias][paragrafo_id][userid]["has_voted"] = True
        annotations[concordancias][paragrafo_id][userid]["ressalva"] = ''
        action = "concordar_ressalva"
        event.notify(LikeEvent(context))

    context.reindexObject(idxs=['concordancias'])
    return action

def _get_user_id():
    if api.user.is_anonymous():
        raise ValueError('userid must be passed actively for anon users')
    return api.user.get_current().getUserName()


def discordar(context, paragrafo_id, userid=None):
    """ Discorda com um parágrafo de um item.
    Se nenhum usuário for passado, o corrente será usado.
    Se o usuário tinha discordado do parágrafo previamente, remove tal voto.
    Se o usuário tinha concordado do item previamente, remove o voto e adiciona
    um novo de discordância.
    """
    action = None
    userid = userid or _get_user_id()
    annotations = IAnnotations(context)

    if userid in annotations[concordancias][paragrafo_id]:
        annotations[concordancias][paragrafo_id].pop(userid)

    if userid in annotations[discordancias][paragrafo_id]:
        annotations[discordancias][paragrafo_id].pop(userid)
        action = "desfazer"
        event.notify(UndislikeEvent(context))
    else:
        annotations[discordancias][paragrafo_id][userid] = {"has_voted": True}
        action = "discordar"
        event.notify(DislikeEvent(context))

    context.reindexObject(idxs=['concordancias'])
    return action


def comentar(context, paragrafo_id, comentario, userid=None):
    """ Acrescenta um comentário ao objeto de anotações
    """
    action = 'comentar'
    userid = userid or _get_user_id()
    annotations = IAnnotations(context)

    paragrafo_storage = annotations[concordancias][paragrafo_id]
    if userid in paragrafo_storage:
        # if 'ressalva' not in paragrafo_storage[userid]:
        #     paragrafo_storage[userid]['ressalva'] = PersistentList()
        # paragrafo_storage[userid]['ressalva'].append(comentario)
        annotations[concordancias][paragrafo_id][userid]['ressalva'] = comentario

    return action


def get_total_minuta_concordancias(context):
    """ Devolve o total de concordancias em todos os parágrafos de uma Minuta
    """
    annotations = IAnnotations(context)
    total = 0
    if concordancias in annotations:
        for paragrafo_id in annotations[concordancias]:
            total += len(annotations[concordancias][paragrafo_id])
    return total


def get_total_proposta_apoios(context):
    """ Devolve o total de apoios de uma Proposta de Consulta Publica
    """
    annotations = IAnnotations(context)
    total = len(annotations[APOIOS_KEY]) if APOIOS_KEY in annotations else 0
    return total
