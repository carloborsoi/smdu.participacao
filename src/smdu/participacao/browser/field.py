from zope import schema
from zope.interface import implements
from smdu.participacao.interfaces import IMapaField, IMapa
from smdu.participacao.browser.mapa import Mapa

from zope.interface import implementer
from zope.schema.interfaces import IFromUnicode

@implementer(IFromUnicode)
class MapaField(schema.Object):
    implements(IMapaField)

    _type = Mapa
    schema = IMapa

    def __init__(self, **kw):
        super(MapaField, self).__init__(schema=self.schema, **kw)

    def fromUnicode(self, str):
        """
        """
        return

# @implementer(IFromUnicode)
# class Label(Field):
#
#     """A Label field
#     """
#     implements(ILabel)
#
#     def validate(self, value):
#         pass
#
#     def fromUnicode(self, str):
#         """
#         """
#         return
