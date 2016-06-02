# -*- coding: utf-8 -*-

try:
    import json
except:
    import simplejson as json  # fallback for pre python2.6
from uuid import uuid4
from Products.Five.browser import BrowserView
from plone import api
# from plone.memoize import view
from pyquery import PyQuery as pq
from cioppino.twothumbs.browser.like import LikeWidgetView
from cioppino.twothumbs.browser.like import LikeThisShizzleView
from smdu.participacao import AvaliarMinuta
from smdu.participacao.browser import rate


COOKIENAME = 'smdu_minuta_avaliacao'


# A linha comentada abaixo nao é necessária no momento porque
# o formulário do tipo de conteúdo Minuta é simples demais para
# precisarmos renderizar widgets específicos usando 'view/w' no template
# class MinutaView(DefaultView):
class MinutaView(BrowserView):
    """ Browser view padrao do tipo de conteudo Minuta
    """

    def __init__(self, context, request):
        super(MinutaView, self).__init__(context, request)

    def get_texto_com_avaliacoes(self):
        texto = self.context.text
        if not texto:
            return ''
        pq_texto = pq(texto.output)
        avaliacao = self.context.restrictedTraverse('@@avaliacao')
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
    """

    def __init__(self, context, request):
        super(AvaliacaoView, self).__init__(context, request)
        self.annotations = rate.inicializa_anotacoes(self.context)

    # @view.memoize
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
            return "Erro: paragrafo invalido"

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
            return "Erro: ou você concorda ou você discorda."

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
