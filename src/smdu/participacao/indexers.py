from plone.indexer import indexer
from plone.app.contenttypes.indexers import SearchableText as SearchableText_
from plone.app.contenttypes.indexers import _unicode_save_string_concat
from smdu.participacao.browser import rate
from smdu.participacao.interfaces import IConsulta_Publica
from smdu.participacao.interfaces import IMinuta
from smdu.participacao.interfaces import IProposta


@indexer(IMinuta)
def minuta_SearchableText(obj):
    return _unicode_save_string_concat(SearchableText_(obj))


@indexer(IMinuta)
def minuta_concordancias(obj):
    return rate.get_total_minuta_concordancias(obj)


@indexer(IConsulta_Publica)
def consulta_publica_SearchableText(obj):
    return _unicode_save_string_concat(SearchableText_(obj))


@indexer(IProposta)
def proposta_SearchableText(obj):
    return u' '.join([_unicode_save_string_concat(SearchableText_(obj)),
                      obj.justificativa,
                      obj.bairro or ''])


@indexer(IProposta)
def proposta_apoios(obj):
    return rate.get_total_proposta_apoios(obj)
