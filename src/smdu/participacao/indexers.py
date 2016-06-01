from plone.indexer import indexer
from plone.app.contenttypes.indexers import SearchableText as SearchableText_
from plone.app.contenttypes.indexers import _unicode_save_string_concat
from smdu.participacao.browser import rate
from smdu.participacao.interfaces import IMinuta
from cioppino.twothumbs.interfaces import ILoveThumbsDontYou


@indexer(IMinuta)
def SearchableText(obj):
    return _unicode_save_string_concat(SearchableText_(obj))


@indexer(ILoveThumbsDontYou)
def positive_ratings(obj):
    return rate.get_total_avaliacoes_positivas(obj)
