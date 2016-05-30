# -*- coding: utf-8 -*-
"""Modulo onde vivem todas as interfaces, eventos e exceçoes."""

from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.supermodel import model
from plone.app.textfield import RichText
from smdu.participacao import _


class ISmduParticipacaoLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class IMinuta(model.Schema):
    """Modelagem do tipo de conteudo Dexterity: campos e widgets."""

    # model.primary('text')
    # text = RichText(
    #     title=_(u"Corpo de texto da minuta"),
    #     required=False
    # )

    model.fieldset('extra',
        label=u"Comentários inline",
        fields=['disableAnnotator', 'readOnlyAnnotator']
    )

    disableAnnotator = schema.Bool(
        title=u'Desativar avaliação',
        description=u'Desativa os comentários inline para esta minuta',
        required=False,
        default=False
    )

    readOnlyAnnotator = schema.Bool(
        title=u'Finalizar avaliação',
        description=u'Configura minuta para modo de leitura, ou seja, suspende os comentários inline.',
        required=False,
        default=False
    )
