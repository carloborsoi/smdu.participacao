# -*- coding: utf-8 -*-

from persistent.list import PersistentList
from zope import event
from zope.annotation.interfaces import IAnnotations

from smdu.participacao import APOIOS_KEY


def inicializa_apoios(context):
    """ Inicializa o objeto de anotações caso ainda não exista.
    """
    annotations = IAnnotations(context)
    if APOIOS_KEY not in annotations:
        annotations[APOIOS_KEY] = PersistentList()

    return annotations
