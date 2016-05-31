# -*- coding: utf-8 -*-

try:
    import json
except:
    # fallback to simplejson for pre python2.6
    import simplejson as json
from uuid import uuid4
from zope.component import getMultiAdapter
from zope.component import getUtility
from plone.registry.interfaces import IRegistry
from Products.Five.browser import BrowserView
# from plone.dexterity.browser.view import DefaultView
from plone import api
from plone.memoize import view
from pyquery import PyQuery as pq
from cioppino.twothumbs.browser.like import LikeWidgetView
from cioppino.twothumbs.browser.like import LikeThisShizzleView
from cioppino.twothumbs import _
from smdu.participacao.browser import rate
from smdu.participacao.content import AvaliarMinuta


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
        texto = self.context.text
        if not texto:
            return ''
        pq_texto = pq(texto.output)
        avaliacao = self.context.restrictedTraverse('@@avaliacao')
        for i, p in enumerate(pq_texto.find('.paragrafo')):
            paragrafo_id = i + 1
            avaliacao_paragrafo = avaliacao.renderiza_avaliacao(paragrafo_id)
            pq(p).addClass("paragrafo-{0:02}".format(paragrafo_id)).after(avaliacao_paragrafo)

        return pq_texto.html()


class AvaliacaoView(LikeWidgetView):
    """ Browser view auxiliar do tipo de conteudo Minuta
    """

    def __init__(self, context, request):
        super(AvaliacaoView, self).__init__(context, request)
        self.annotations = rate.setupAnnotations(self.context)

    # @view.memoize
    @property
    def canRate(self):
        pode_avaliar = api.user.has_permission(AvaliarMinuta)
        pode_votar_anonimo = api.portal.get_registry_record('cioppino.twothumbs.anonymousvoting')
        if not pode_avaliar:
            return False
        elif pode_votar_anonimo:
            return True
        else:
            # import pdb; pdb.set_trace()
            return api.user.is_anonymous()

    def myVote(self):
        if not self.canRate:
            return 0
        anonuid = self.request.cookies.get(COOKIENAME, None) if api.user.is_anonymous() else None
        return rate.getMyVote(self.context, self.paragrafo_id, userid=anonuid)

    def getTotal(self):
        """ Examina a anotacao no objeto e devolve o numero de concordancias e discordancias por paragrafo
        """
        return rate.getTotal(self.context, self.paragrafo_id)

    def renderiza_avaliacao(self, paragrafo_id):
        """ Atualiza o id do paragrafo corrente e renderiza o componente de avaliacao adequado
        """
        self.paragrafo_id = paragrafo_id
        avaliacao = self.__call__()
        return avaliacao


class AvaliacaoVotaView(LikeThisShizzleView):

    def __call__(self, REQUEST, RESPONSE):
        registry = getUtility(IRegistry)
        pode_votar_anonimo = api.portal.get_registry_record('cioppino.twothumbs.anonymousvoting', False)
        anonuid = None

        if api.user.is_anonymous():
            if not pode_votar_anonimo:
                return RESPONSE.redirect('%s/login?came_from=%s' %
                                         (api.portal.get().absolute_url(), REQUEST['HTTP_REFERER']))
            else:
                anonuid = self.request.cookies.get(COOKIENAME, None)
                if anonuid is None:
                    anonuid = str(uuid4())
                    RESPONSE.setCookie(COOKIENAME, anonuid)

        form = self.request.form
        paragrafo_id = int(form.get('paragrafo_id'))
        action = None
        if form.get('form.concordo', False):
            action = rate.concordar(self.context, paragrafo_id, userid=anonuid)
        elif form.get('form.discordo', False):
            action = rate.discordar(self.context, paragrafo_id, userid=anonuid)
        else:
            return _(u"We don't like ambiguity around here. Check yo self "
                     "before you wreck yo self.")

        if not form.get('ajax', False):
            return RESPONSE.redirect(REQUEST['HTTP_REFERER'])
        else:
            resultado = rate.getTotal(self.context, paragrafo_id)
            resultado['action'] = action

            # Create handy translate function
            translate = self._get_translator()
            ltool = api.portal.get_tool(name='portal_languages')
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

    def _getMessage(self, action):
        if (action == 'like'):
            return "Você concordou com isto. Obrigado pela avaliação!"
        elif (action == 'dislike'):
            return "Você discordou disto. Obrigado pela avaliação!"
        elif (action == 'undo'):
            return _(u"Seu voto foi removido.")
