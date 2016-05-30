# -*- coding: utf-8 -*-

from BTrees.OIBTree import OIBTree
from persistent.dict import PersistentDict
from persistent.list import PersistentList
from zope import event
from zope.annotation.interfaces import IAnnotations
from Products.CMFCore.utils import getToolByName
from plone import api
from pyquery import PyQuery as pq

from cioppino.twothumbs.event import DislikeEvent
from cioppino.twothumbs.event import LikeEvent
from cioppino.twothumbs.event import UndislikeEvent
from cioppino.twothumbs.event import UnlikeEvent

# KEY = 'smdu.participacao'
concordancias = 'smdu.participacao.concordancias'
discordancias = 'smdu.participacao.discordancias'


def setupAnnotations(context):
    """
    set up the annotations if they haven't been set up
    already. The rest of the functions in here assume that
    this has already been set up
    """
    annotations = IAnnotations(context)
    # import pdb; pdb.set_trace()
    pq_texto = pq(context.text.output)
    paragrafos = pq_texto.find('.paragrafo')
    if concordancias not in annotations:
        annotations[concordancias] = PersistentDict()
    if discordancias not in annotations:
        annotations[discordancias] = PersistentDict()
    for i, p in enumerate(paragrafos):
        paragrafo_id = i + 1
        if paragrafo_id not in annotations[concordancias]:
            annotations[concordancias][paragrafo_id] = PersistentDict()
        if paragrafo_id not in annotations[discordancias]:
            annotations[discordancias][paragrafo_id] = PersistentDict()
    #import pdb; pdb.set_trace()
    return annotations


def getTotal(context, paragrafo_id):
    """ Return a dictionary of total likes and dislikes
    """
    setupAnnotations(context)
    annotations = IAnnotations(context)
    return {
        'concordancias': len(annotations[concordancias][paragrafo_id]),
        'discordancias': len(annotations[discordancias][paragrafo_id]),
        'mine': getMyVote(context, paragrafo_id)
    }


def getMyVote(context, paragrafo_id, userid=None):
    """
    If the user liked this item, then return 1. If they
    did not like it, -1, and if they didn't vote: 0.

    If no user is passed in, the logged in user will be returned
    """
    annotations = IAnnotations(context)
    import pdb; pdb.set_trace()
    userid = userid or api.user.get_current().getUserName()
    if userid in annotations[concordancias][paragrafo_id]:
        return 1
    elif userid in annotations[discordancias][paragrafo_id]:
        return -1
    return 0


def concordar(context, paragrafo_id, userid=None):
    """
    Like an item (context). If no user id is passed in, the logged in User
    will be used. If the user has already liked the item, remove the vote.
    If the user has already disliked the item, remove that vote and add a
    new 'like' one.
    """
    annotations = IAnnotations(context)
    action = None

    # Valida se usuario foi passado em caso de voto anonimo
    if not userid:
        mtool = getToolByName(context, 'portal_membership')
        if mtool.isAnonymousUser():
            raise ValueError('userid must be passed activly for anon users')
        userid = mtool.getAuthenticatedMember().id

    if userid in annotations[discordancias][paragrafo_id]:
        annotations[discordancias][paragrafo_id].pop(userid)
    if userid in annotations[concordancias][paragrafo_id]:
        annotations[concordancias][paragrafo_id].pop(userid)
        action = "undo"
        event.notify(UnlikeEvent(context))
    else:
        annotations[concordancias][paragrafo_id][userid] = 1
        action = "like"
        event.notify(LikeEvent(context))

    context.reindexObject(idxs=['positive_ratings'])
    return action


def discordar(context, paragrafo_id, userid=None):
    """
    Dislike an item (context). If no user id is passed in, the logged in User
    will be used.
    """
    annotations = IAnnotations(context)
    action = None

    if not userid:
        mtool = getToolByName(context, 'portal_membership')
        userid = mtool.getAuthenticatedMember().id

    if userid in annotations[concordancias][paragrafo_id]:
        annotations[concordancias][paragrafo_id].pop(userid)

    if userid in annotations[discordancias][paragrafo_id]:
        annotations[discordancias][paragrafo_id].pop(userid)
        action = "undo"
        event.notify(UndislikeEvent(context))
    else:
        annotations[discordancias][paragrafo_id][userid] = 1
        action = "dislike"
        event.notify(DislikeEvent(context))

    context.reindexObject(idxs=['positive_ratings'])
    return action
