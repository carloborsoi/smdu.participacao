from BTrees.OIBTree import OIBTree
from zope.annotation.interfaces import IAnnotations
from Products.CMFCore.utils import getToolByName
from pyquery import PyQuery as pq

yays = 'cioppino.twothumbs.yays'
nays = 'cioppino.twothumbs.nays'


def setupAnnotations(context):
    """
    set up the annotations if they haven't been set up
    already. The rest of the functions in here assume that
    this has already been set up
    """
    annotations = IAnnotations(context)

    text = context.text
    d = pq(text)
    paragraphs = d('p[class^=paragrafo-]')

    for p in paragraphs:
        if yays not in annotations:
            annotations[yays][p] = OIBTree()
        if nays not in annotations:
            annotations[nays][p] = OIBTree()

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


def getMyVote(context, paragraph_id=None, userid=None):
    """
    If the user liked this item, then return 1. If they
    did not like it, -1, and if they didn't vote: 0.

    If no user is passed in, the logged in user will be returned
    """
    annotations = IAnnotations(context)

    if not userid:
        mtool = getToolByName(context, 'portal_membership')
        userid = mtool.getAuthenticatedMember().id

    if userid in annotations[yays][paragraph_id]:
        return 1

    if userid in annotations[nays][paragraph_id]:
        return -1

    return 0
