from BTrees.OIBTree import OIBTree
from persistent.dict import PersistentDict
from persistent.list import PersistentList
from zope.annotation.interfaces import IAnnotations
from plone import api
from pyquery import PyQuery as pq


yays = 'smdu.participacao.yays'
nays = 'smdu.participacao.nays'


def setupAnnotations(context):
    """
    set up the annotations if they haven't been set up
    already. The rest of the functions in here assume that
    this has already been set up
    """
    annotations = IAnnotations(context)
    #import pdb; pdb.set_trace()
    pq_texto = pq(context.text.output)
    paragraphs = pq_texto.children('.paragrafo')
    if yays not in annotations:
        annotations[yays] = PersistentDict()
    if nays not in annotations:
        annotations[nays] = PersistentDict()
    for i, p in enumerate(paragraphs):
        if i not in annotations[yays]:
            annotations[yays][i] = PersistentList()
        if i not in annotations[nays]:
            annotations[nays][i] = PersistentList()
    #import pdb; pdb.set_trace()
    return annotations


def getTotal(context):
    """
    Return a dictionary of total likes and dislikes
    """
    setupAnnotations(context)
    annotations = IAnnotations(context)
    return {
        'ups': len(annotations[yays]),
        'downs': len(annotations[nays]),
        'mine': getMyVote(context)
    }


def getMyVote(context, paragrafo_id=None, userid=None):
    """
    If the user liked this item, then return 1. If they
    did not like it, -1, and if they didn't vote: 0.

    If no user is passed in, the logged in user will be returned
    """
    annotations = IAnnotations(context)

    if not userid:
        mtool = api.portal.get_tool('portal_membership')
        userid = mtool.getAuthenticatedMember().id
    if userid in annotations[yays][paragrafo_id]:
        return 1

    if userid in annotations[nays][paragrafo_id]:
        return -1

    return 0

def loveIt(context, userid=None):
    """
    Like an item (context). If no user id is passed in, the logged in User
    will be used. If the user has already liked the item, remove the vote.
    If the user has already disliked the item, remove that vote and add a
    new 'like' one.
    """
    annotations = IAnnotations(context)
    action = None

    if not userid:
        mtool = getToolByName(context, 'portal_membership')
        if mtool.isAnonymousUser():
            raise ValueError('userid must be passed activly for anon users')
        userid = mtool.getAuthenticatedMember().id
    if userid in annotations[nays]:
        annotations[nays].pop(userid)

    if userid in annotations[yays]:
        annotations[yays].pop(userid)
        action = "undo"
        event.notify(UnlikeEvent(context))
    else:
        annotations[yays][userid] = 1
        action = "like"
        event.notify(LikeEvent(context))

    context.reindexObject(idxs=['positive_ratings'])
    return action


def hateIt(context, userid=None):
    """
    Dislike an item (context). If no user id is passed in, the logged in User
    will be used.
    """
    annotations = IAnnotations(context)
    action = None

    if not userid:
        mtool = getToolByName(context, 'portal_membership')
        userid = mtool.getAuthenticatedMember().id

    if userid in annotations[yays]:
        annotations[yays].pop(userid)

    if userid in annotations[nays]:
        annotations[nays].pop(userid)
        action = "undo"
        event.notify(UndislikeEvent(context))
    else:
        annotations[nays][userid] = 1
        action = "dislike"
        event.notify(DislikeEvent(context))

    context.reindexObject(idxs=['positive_ratings'])
    return action
