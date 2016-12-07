# -*- coding: utf-8 -*-
from smdu.participacao.interfaces import IMapa
from zope.interface import implementer


@implementer(IMapa)
class Mapa(object):

    def __init__(self, latitude=0, longitude=0):
        self.latitude = float(latitude)
        self.longitude = float(longitude)
