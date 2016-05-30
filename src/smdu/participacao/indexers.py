from plone.indexer import indexer
from plone.app.contenttypes.indexers import SearchableText as SearchableText_
from plone.app.contenttypes.indexers import _unicode_save_string_concat
from smdu.participacao.interfaces import IMinuta

@indexer(IMinuta)
def SearchableText(obj):
    return _unicode_save_string_concat(SearchableText_(obj))
