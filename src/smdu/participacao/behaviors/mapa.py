# -*- coding: utf-8 -*-
from plone.supermodel import  src/smdu/participacao/profiles/default/types/Proposta.xml, directives
from plone.autoform.interfaces import IFormFieldProvider
from zope import schema
from zope.interface import alsoProvides

from smdu.participacao.browser.field import MapaField


class IMapa(model.Schema):

    mapa = MapaField(
        title=(u"Insira a localização no mapa relativa à proposta"),
        required=False,
    )

alsoProvides(IMapa, IFormFieldProvider)
