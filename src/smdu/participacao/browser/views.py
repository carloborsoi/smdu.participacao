from Products.Five.browser import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from cioppino.twothumbs.browser.like import LikeWidgetView
from smdu.participacao.browser import rate


class VotaView(LikeWidgetView):
    """ This does nothing so far
    """

    index = ViewPageTemplateFile('templates/votaview.pt')

    def __init__(self, context, request):
        super(VotaView, self).__init__(context, request)
        self.annotations = rate.setupAnnotations(self.context)

    def getStats(self):
        return rate.getTally(self.context)