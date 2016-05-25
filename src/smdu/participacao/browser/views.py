from pyquery import PyQuery as pq
from zope.component import getMultiAdapter
from Products.Five.browser import BrowserView
# from plone.dexterity.browser.view import DefaultView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from cioppino.twothumbs.browser.like import LikeWidgetView
from smdu.participacao.browser import rate


COOKIENAME = 'smdu_minuta_avaliacao'

# class MinutaView(DefaultView): # 'view/w' not needed at this point
class MinutaView(BrowserView):
    """ This does nothing so far
    """

    def texto(self):
        pq_texto = pq(self.context.text.output)
        avaliacao = self.context.restrictedTraverse('@@avaliacao')
        for i, p in enumerate(pq_texto.children('.paragrafo')):
            avaliacao_paragrafo = avaliacao.renderiza_avaliacao(i)
            pq(p).addClass("paragrafo-{0:02}".format(i + 1)).after(avaliacao_paragrafo)

        return pq_texto.html()


class AvaliacaoView(LikeWidgetView):
    """ This does nothing so far
    """

    def __init__(self, context, request):
        super(AvaliacaoView, self).__init__(context, request)
        self.annotations = rate.setupAnnotations(self.context)

    # def getStats(self):
    #     return rate.getTotal(self.context)

    def myVote(self, paragrafo_id):
        if not self.canRate():
            return 0
        portal_state = getMultiAdapter((self.context, self.request),
                                       name='plone_portal_state')
        anonuid = None
        if portal_state.anonymous():
            anonuid = self.request.cookies.get(COOKIENAME, None)
        return rate.getMyVote(self.context, paragrafo_id=paragrafo_id, userid=anonuid)

    def renderiza_avaliacao(self, i):
        """
        """
        self.paragrafo = i
        avaliacao = self.__call__()
        #import pdb; pdb.set_trace()
        return avaliacao
