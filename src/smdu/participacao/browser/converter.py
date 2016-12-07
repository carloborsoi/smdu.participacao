# -*- coding: utf-8 -*-
from smdu.participacao.browser.mapa import Mapa
from smdu.participacao.interfaces import IMapa
from smdu.participacao.interfaces import IMapaField
from smdu.participacao.interfaces import IMapaWidget
from z3c.form.converter import BaseDataConverter
from zope.component import adapter


@adapter(IMapaField, IMapaWidget)
class MapaConverter(BaseDataConverter):
    """Converts from a 2-tuple to a Mapa
    """

    def toWidgetValue(self, value):
        if value:
            return (value.latitude, value.longitude)

    def toFieldValue(self, value):
        if value is None or value == ('0', '0'):
            return self.field.missing_value

        if IMapa.providedBy(value):
            return value

        return Mapa(value[0], value[1])
