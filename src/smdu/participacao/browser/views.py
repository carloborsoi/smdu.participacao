try:
    import json
except:
    # fallback to simplejson for pre python2.6
    import simplejson as json
from Products.CMFCore.utils import getToolByName
from zope.component import getMultiAdapter
from zope.component import getUtility
from plone.registry.interfaces import IRegistry
from Products.Five.browser import BrowserView
# from plone.dexterity.browser.view import DefaultView
from plone import api
from pyquery import PyQuery as pq
from cioppino.twothumbs.browser.like import LikeWidgetView
from cioppino.twothumbs.browser.like import LikeThisShizzleView
from cioppino.twothumbs import _
from smdu.participacao.browser import rate


COOKIENAME = 'smdu_minuta_avaliacao'

# A linha comentada abaixo nao eh necessaria no momento porque
# o formulario do tipo de conteudo Minuta eh simples demais para
# precisarmos renderizar widgets especificos usando 'view/w' no template
# class MinutaView(DefaultView):
class MinutaView(BrowserView):
    """ Browser view padrao do tipo de conteudo Minuta
    """

    def __init__(self, context, request):
        super(MinutaView, self).__init__(context, request)

    def texto(self):
        pq_texto = pq(self.context.text.output)
        avaliacao = self.context.restrictedTraverse('@@avaliacao')
        for i, p in enumerate(pq_texto.children('.paragrafo')):
            avaliacao_paragrafo = avaliacao.renderiza_avaliacao(i + 1)
            pq(p).addClass("paragrafo-{0:02}".format(i + 1)).after(avaliacao_paragrafo)

        return pq_texto.html()


class AvaliacaoView(LikeWidgetView):
    """ Browser view auxiliar do tipo de conteudo Minuta
    """

    def __init__(self, context, request):
        super(AvaliacaoView, self).__init__(context, request)
        self.annotations = rate.setupAnnotations(self.context)

    # def getStats(self):
    #     paragrafo_id = self.paragrafo
    #     return rate.getTotal(self.context, paragrafo_id=paragrafo_id)

    def myVote(self, paragrafo_id):
        if not self.canRate():
            return 0
        portal_state = getMultiAdapter((self.context, self.request),
                                       name='plone_portal_state')
        anonuid = None
        if portal_state.anonymous():
            anonuid = self.request.cookies.get(COOKIENAME, None)
        return rate.getMyVote(self.context, paragrafo_id=paragrafo_id, userid=anonuid)

    def renderiza_avaliacao(self, paragrafo):
        """
        """
        self.paragrafo = paragrafo
        avaliacao = self.__call__()
        #import pdb; pdb.set_trace()
        return avaliacao


class AvaliacaoVotaView(LikeThisShizzleView):

    def __call__(self, REQUEST, RESPONSE):
        registry = getUtility(IRegistry)
        anonymous_voting = registry.get('cioppino.twothumbs.anonymousvoting', False)
        anonuid = None
        portal_state = getMultiAdapter((self.context, self.request),
                                       name='plone_portal_state')

        if portal_state.anonymous():
            if not anonymous_voting:
                return RESPONSE.redirect('%s/login?came_from=%s' %
                                         (portal_state.portal_url(),
                                          REQUEST['HTTP_REFERER'])
                                         )
            else:
                anonuid = self.request.cookies.get(COOKIENAME, None)
                if anonuid is None:
                    anonuid = str(uuid4())
                    RESPONSE.setCookie(COOKIENAME, anonuid)

        form = self.request.form
        paragrafo_id = int(form.get('paragrafo_id'))
        action = None
        if form.get('form.concordo', False):
            action = rate.concordo(self.context, paragrafo_id=paragrafo_id, userid=anonuid)
        elif form.get('form.discordo', False):
            action = rate.discordo(self.context, paragrafo_id=paragrafo_id, userid=anonuid)
        else:
            return _(u"We don't like ambiguity around here. Check yo self "
                     "before you wreck yo self.")

        if not form.get('ajax', False):
            return RESPONSE.redirect(REQUEST['HTTP_REFERER'])
        else:
            resultado = rate.getTotal(self.context, paragrafo_id=paragrafo_id)
            resultado['action'] = action

            # Create handy translate function
            translate = self._get_translator()
            ltool = getToolByName(self, 'portal_languages')
            target_language = ltool.getPreferredLanguage()

            resultado['msg'] = translate(
                self._getMessage(action),
                target_language=target_language
            )
            resultado['close'] = translate(
                _(u"Close"),
                target_language=target_language
            )

            RESPONSE.setHeader('Content-Type',
                               'application/json; charset=utf-8')
            response_json = json.dumps(resultado)
            RESPONSE.setHeader('content-length', len(response_json))
            return response_json