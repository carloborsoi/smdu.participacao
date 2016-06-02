# -*- coding: utf-8 -*-
"""Módulo onde vivem todas as interfaces, eventos e exceções."""

from zope import schema
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.supermodel import model


class ISmduParticipacaoLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class IMinuta(model.Schema):
    """Modelagem do tipo de conteudo Dexterity: campos e widgets."""

    model.fieldset('extra',
                   label=u"Comentários inline",
                   fields=['disableAnnotator', 'readOnlyAnnotator']
                   )

    disableAnnotator = schema.Bool(
        title=u'Desativar avaliação',
        description=u'Desativa o sistema de comentários para esta minuta.',
        required=False,
        default=False
    )

    readOnlyAnnotator = schema.Bool(
        title=u'Finalizar avaliação',
        description=u'Habilita modo de leitura, suspendendo os comentários.',
        required=False,
        default=False
    )
