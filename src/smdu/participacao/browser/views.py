from zope.component import getMultiAdapter
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from cioppino.twothumbs.browser.like import LikeWidgetView
from smdu.participacao.browser import rate


COOKIENAME = 'yolikeitorhateit'


class VotaView(LikeWidgetView):
    """ This does nothing so far
    """

    index = ViewPageTemplateFile('templates/votaview.pt')

    def __init__(self, context, request):
        super(VotaView, self).__init__(context, request)
        self.annotations = rate.setupAnnotations(self.context)

    def getStats(self):
        return rate.getTally(self.context)

    def myVote(self, paragraph_id):
        if not self.canRate():
            return 0
        portal_state = getMultiAdapter((self.context, self.request),
                                       name='plone_portal_state')
        anonuid = None
        if portal_state.anonymous():
            anonuid = self.request.cookies.get(COOKIENAME, None)
        return rate.getMyVote(self.context, paragraph_id=paragraph_id, userid=anonuid)

    def minuta(self):
        text = self.context.text
        # text = [p1, p2, p3]
        # text = [p1, v1, p2, v2, p3, v3]
        # v1 = self.folder.restrictedTraverse('@@rate-if-you-dare')
        return text
