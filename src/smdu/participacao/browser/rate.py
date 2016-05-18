from BTrees.OIBTree import OIBTree
from zope.annotation.interfaces import IAnnotations


yays = 'cioppino.twothumbs.yays'
nays = 'cioppino.twothumbs.nays'


def setupAnnotations(context):
    """
    set up the annotations if they haven't been set up
    already. The rest of the functions in here assume that
    this has already been set up
    """
    annotations = IAnnotations(context)

    if yays not in annotations:
        annotations[yays] = OIBTree()

    if nays not in annotations:
        annotations[nays] = OIBTree()

    return annotations


def getTally(context):
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


def getMyVote(context, userid=None):
    """
    If the user liked this item, then return 1. If they
    did not like it, -1, and if they didn't vote: 0.

    If no user is passed in, the logged in user will be returned
    """
    annotations = IAnnotations(context)

    if not userid:
        mtool = getToolByName(context, 'portal_membership')
        userid = mtool.getAuthenticatedMember().id

    if userid in annotations[yays]:
        return 1

    if userid in annotations[nays]:
        return -1

    return 0