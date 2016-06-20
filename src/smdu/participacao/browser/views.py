# -*- coding: utf-8 -*-

try:
    import json
except:
    import simplejson as json  # fallback for pre python2.6
from uuid import uuid4

from Products.Five.browser import BrowserView
from plone import api
from zope.annotation.interfaces import IAnnotations
from Products.CMFPlone.utils import safe_unicode
from plone.memoize.instance import memoize
from pyquery import PyQuery as pq
from weasyprint import HTML
from weasyprint import CSS
from cioppino.twothumbs.browser.like import LikeWidgetView
from cioppino.twothumbs.browser.like import LikeThisShizzleView
from smdu.participacao import AvaliarMinuta
from smdu.participacao import concordancias
from smdu.participacao import discordancias
from smdu.participacao import APOIOS_KEY
from smdu.participacao.browser import rate, apoiar_proposta


COOKIENAME = 'smdu_minuta_avaliacao'


# A linha comentada abaixo nao é necessária no momento porque
# o formulário do tipo de conteúdo Minuta é simples demais para
# precisarmos renderizar widgets específicos usando 'view/w' no template
# class MinutaView(DefaultView):
class MinutaView(BrowserView):
    """ Browser view padrao do tipo de conteudo Minuta
    """

    def get_texto_com_avaliacoes(self):
        """ Acrescenta componente de avaliacao para cada paragrafo avaliavel
        """
        texto = self.context.text
        if not texto:
            return ''
        pq_texto = pq(texto.output)
        avaliacao = self.context.restrictedTraverse('@@avaliacao')
        for i, paragrafo in enumerate(pq_texto.find('.paragrafo')):
            paragrafo_id = i + 1
            paragrafo_klass = 'paragrafo-{0:02}'.format(paragrafo_id)
            avaliacao_paragrafo = avaliacao.renderiza_avaliacao(paragrafo_id)
            if avaliacao.avaliacao_aberta :
                pq(paragrafo).addClass(paragrafo_klass) \
                    .wrap('<div class="paragrafo-wrapper">') \
                    .append(avaliacao_paragrafo)
            else:
                pq(paragrafo).addClass(paragrafo_klass) \
                    .wrap('<div class="paragrafo-wrapper">')\
                    .append(avaliacao_paragrafo)

        return pq_texto.html()

    def get_texto_exporta_pdf(self):
        """ Acrescenta componente de avaliacao para cada paragrafo avaliavel
        """
        texto = self.context.text
        if not texto:
            return ''
        pq_texto = pq(texto.output)
        avaliacao = self.context.restrictedTraverse('@@avaliacao_pdf')
        for i, paragrafo in enumerate(pq_texto.find('.paragrafo')):
            paragrafo_id = i + 1
            paragrafo_klass = 'paragrafo-{0:02}'.format(paragrafo_id)
            avaliacao_paragrafo = avaliacao.renderiza_avaliacao(paragrafo_id)
            pq(paragrafo).addClass(paragrafo_klass) \
                .wrap('<div class="paragrafo-wrapper">') \
                .append(avaliacao_paragrafo)

        return pq_texto.html()

class AvaliacaoView(LikeWidgetView):
    """ Browser view auxiliar do tipo de conteudo Minuta
    Renderiza componente de avaliacao
    """

    def __init__(self, context, request):
        super(AvaliacaoView, self).__init__(context, request)
        self.annotations = rate.inicializa_anotacoes(self.context)

    @memoize
    @property
    def pode_votar(self):
        """ Define estado ativo/desativo do componente de avaliação,
        a partir da configuração do cioppino.twothumbs no painel de
        controle Configuration Registry.
        """
        pode_votar_anonimo = api.portal.get_registry_record(
            'cioppino.twothumbs.anonymousvoting')
        if pode_votar_anonimo:
            return True
        else:
            return not api.user.is_anonymous()

    @property
    def avaliacao_aberta(self):
        """ Define estado aberto/finalizado do componente de avaliação,
        a partir da permissão corrente
        """
        return api.user.has_permission(AvaliarMinuta, obj=self.context)

    @property
    def form_klass(self):
        klasses = 'avaliacao-form'
        klasses += ' desativado' if not self.pode_votar else ''
        klasses += ' finalizado' if not self.avaliacao_aberta else ''
        return klasses

    def meu_voto(self):
        """ Se o usuario pode votar, retorna ultimo voto para o parágrafo atual
        """
        if not self.pode_votar:
            return 0
        anonuid = self.request.cookies.get(COOKIENAME, None) \
            if api.user.is_anonymous() else None
        return rate.get_meu_voto(self.context,
                                 self.paragrafo_id,
                                 userid=anonuid)

    def get_total(self):
        """ Examina a anotacao no objeto e devolve o numero de concordancias
        e discordancias por paragrafo
        """
        return rate.get_total(self.context, self.paragrafo_id)

    def get_usuarios_votantes(self):
        """ Develve uma lista com usuarios que concordam com o parágrafo
        """
        return rate.get_usuarios_votantes(self.context, self.paragrafo_id)


    def renderiza_avaliacao(self, paragrafo_id):
        """ Atualiza o id do paragrafo corrente e renderiza o componente de
        avaliacao adequado
        """
        self.paragrafo_id = paragrafo_id
        return self.__call__()


class AvaliacaoVotaView(LikeThisShizzleView):
    """ Browser view que habilita a votacao de um paragrafo.
    """

    def __call__(self, REQUEST, RESPONSE):
        anonuid = None
        pode_votar_anonimo = api.portal.get_registry_record(
            'cioppino.twothumbs.anonymousvoting')
        if api.user.is_anonymous():
            if not pode_votar_anonimo:
                return RESPONSE.redirect(
                    '%s/login?came_from=%s' %
                    (api.portal.get().absolute_url(), REQUEST['HTTP_REFERER']))
            anonuid = self.request.cookies.get(COOKIENAME, None)
            if anonuid is None:
                anonuid = str(uuid4())
                RESPONSE.setCookie(COOKIENAME, anonuid)

        form = self.request.form

        try:
            paragrafo_id = int(form.get('paragrafo_id'))
        except TypeError:
            return 'Erro: paragrafo invalido'

        comentario = form.get('comentario', None)

        action = form.get('action', None)

        if action == 'concordar':
            action = rate.concordar(self.context, paragrafo_id, userid=anonuid)
        elif action == 'discordar':
            action = rate.discordar(self.context, paragrafo_id, userid=anonuid)
        elif action == 'comentar':
            action = rate.comentar(self.context,
                                   paragrafo_id,
                                   comentario,
                                   userid=anonuid)
        else:
            return 'Erro: ou você concorda ou você discorda.'

        if not form.get('ajax', False):
            return RESPONSE.redirect(REQUEST['HTTP_REFERER'])
        else:
            resultado = rate.get_total(self.context, paragrafo_id)
            resultado['action'] = action
            # Traduz mensagem de confirmacao da votacao
            translate = self._get_translator()
            ltool = api.portal.get_tool(name='portal_languages')
            target_language = ltool.getPreferredLanguage()
            resultado['msg'] = translate(
                _get_message(action),
                target_language=target_language
            )
            # Devolve resposta json para solicitacao ajax
            response_json = json.dumps(resultado)
            RESPONSE.setHeader('Content-Type',
                               'application/json; charset=utf-8')
            RESPONSE.setHeader('content-length', len(response_json))
            return response_json


def _get_message(action):
    msgs = {
        'concordar': 'Você concordou com isto. Obrigado pela avaliação!',
        'discordar': 'Você discordou disto. Obrigado pela avaliação!',
        'comentar': 'Seu comentário foi registrado com sucesso. Obrigado!',
        'desfazer': 'Seu voto foi removido.'
    }
    return msgs.get(action, '')


class ExportaMinutaCSVView(BrowserView):
    """ Browser view que exporta CSV com votação e comentários do conteudo Minuta
    """

    def __call__(self, REQUEST, RESPONSE):

        annotations = IAnnotations(self.context)

        minuta_exportada_csv = u'Planilha de dados da minuta de participação\n'

        texto = self.context.text
        if not texto:
            return ''
        pq_texto = pq(texto.output)

        for i, paragrafo in enumerate(pq_texto.find('.paragrafo')):
            paragrafo_id = i + 1
            minuta_exportada_csv += u'Parágrafo %d; %s;\n' % (
                paragrafo_id, paragrafo.text)

            # Criação das linhas de dados de usuário que concordaram
            concordancias_paragrafo = annotations[concordancias][paragrafo_id]
            linha_minuta_concordantes = u'Usuários Concordantes: ;'
            linha_minuta_ressalvas = u'Ressalvas: ;'
            for usuario_concordante in concordancias_paragrafo:
                voto = concordancias_paragrafo[usuario_concordante]
                if voto.get('has_voted', False):
                    linha_minuta_concordantes += usuario_concordante + u';'
                    linha_minuta_ressalvas += safe_unicode(voto['ressalva'].replace('\n', '   ')) + u';' \
                        if 'ressalva' in voto else u' ;'
            minuta_exportada_csv += linha_minuta_concordantes + u'\n'
            minuta_exportada_csv += linha_minuta_ressalvas + u'\n'

            # Criação das linhas de dados de usuário que discordam
            discordancias_paragrafo = annotations[discordancias][paragrafo_id]
            linha_minuta_discordantes = u'Usuários Discordantes: ;'
            for usuario_discordante in discordancias_paragrafo:
                voto = discordancias_paragrafo[usuario_discordante]
                if voto.get('has_voted', False):
                    linha_minuta_discordantes += usuario_discordante + u';'
            minuta_exportada_csv += linha_minuta_discordantes + u'\n'

        RESPONSE.setHeader('Content-Type', 'text/csv; charset=ISO-8859-1')
        RESPONSE.setHeader('Content-Length', len(minuta_exportada_csv))
        RESPONSE.setHeader('Content-Disposition', 'attachment; filename="Relatorio.csv"')
        return minuta_exportada_csv


class ExportaMinutaPDFView(MinutaView):

    def __call__(self, REQUEST, RESPONSE):
        content = super(ExportaMinutaPDFView, self).__call__(self)
        html = HTML(string=content)
        stylesheets = []
        with open('src/smdu/participacao/browser/static/print.css', 'r') as css:
            stylesheets.append(CSS(string=css.read()))
        minuta_exportada_pdf = html.write_pdf(stylesheets=stylesheets)

        RESPONSE.setHeader('Content-Type', 'application/pdf; charset=utf-8')
        RESPONSE.setHeader('Content-Length', len(minuta_exportada_pdf))
        RESPONSE.setHeader('Content-Disposition', 'attachment; filename="Relatorio.pdf"')
        return minuta_exportada_pdf

class ConsultaPublicaView(BrowserView):
    """ Browser view padrao do tipo de conteudo Consulta Pública
    """
    def propostas(self):
        resultados = []
        portal_catalog = api.portal.get_tool('portal_catalog')
        current_path = "/".join(self.context.getPhysicalPath())

        brains = portal_catalog(portal_type="Proposta",
                                path=current_path)
        for brain in brains:
            proposta = brain.getObject()
            descricao = brain.Description
            length = 200
            descricao_curta = (' '.join(descricao[:length+1].split(' ')[0:-1]) + '...') if len(descricao) > length else descricao
            resultados.append({
                'id': brain.id,
                'titulo': brain.Title,
                'descricao': descricao,
                'descricao_curta':descricao_curta,
                'imagem': proposta.imagem.filename,
                'obj': proposta
                })
        return resultados

class PropostaView(BrowserView):
    """ Browser view padrao do tipo de conteudo Proposta
    """
    def __init__(self, context, request):
        super(PropostaView, self).__init__(context, request)
        self.annotations = apoiar_proposta.inicializa_apoios(self.context)

    def get_contagem_apoios(self):
        """ Retorna o númeor de apoios obtidos
        """
        annotations = IAnnotations(self.context)
        contagem = len(annotations[APOIOS_KEY])
        return contagem

class PropostaApoiaView(BrowserView):
    """ Browser view que habilita o apoio à uma proposta.
    """
    def __call__(self, REQUEST, RESPONSE):
        annotations = IAnnotations(self.context)
        usuario = api.user
        if usuario.is_anonymous():
            return RESPONSE.redirect(
                '%s/login?came_from=%s' %
                (api.portal.get().absolute_url(), REQUEST['HTTP_REFERER']))

        userid = usuario.get_current().getUserName()

        #Verifica se o usuário está apoiando outra proposta
        consulta_publica = self.context.__parent__
        propostas = consulta_publica.listFolderContents(contentFilter={"portal_type" : "Proposta"})
        for proposta in propostas:
            annotations_proposta = IAnnotations(proposta)
            if proposta.id == self.context.id:
                continue
            if userid in annotations_proposta[APOIOS_KEY]:
                mensagem =  u"Você já apoioa uma outra proposta (%s)." % proposta.title
                return mensagem

        # Verifica se a proposta já foi apoiada pelo usuário. Caso positivo, o apoio é desfeito
        if userid in annotations[APOIOS_KEY]:
            annotations[APOIOS_KEY].remove(userid)
            action = "desfazer"
            #event.notify(UnlikeEvent(context))
            mensagem = u"O seu apoio foi desfeito com sucesso."
        else:
            annotations[APOIOS_KEY].append(userid)
            action = "apoiar"
            #event.notify(LikeEvent(context))
            mensagem = u"O seu apoio foi contabilizado. Obrigado pela participaçãao !"

        #return action

        return mensagem
