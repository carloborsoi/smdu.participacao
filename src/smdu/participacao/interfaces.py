# -*- coding: utf-8 -*-
"""Módulo onde vivem todas as interfaces, eventos e exceções."""

from zope import schema
from zope.interface import Invalid
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.supermodel import model
from plone.namedfile.field import NamedImage
from plone.formwidget.geolocation.field import GeolocationField

from z3c.form.interfaces import IWidget
from zope.i18nmessageid import MessageFactory
from zope.interface import Interface
from zope.schema.interfaces import IObject

from plone.app.z3cform.wysiwyg import WysiwygFieldWidget
from plone.directives import form, dexterity
from plone.app.textfield import RichText

class ISmduParticipacaoLayer(IDefaultBrowserLayer):
    """Interface de marcação que define um browser layer.
    """


class IMinuta(model.Schema):
    """Modelagem do tipo de conteúdo Minuta: campos e widgets.
    """
    # Aba com dados de coteúdo extra
    model.fieldset(
        'extra_texto',
        label=u"Texto extra",
        fields=['titulo_extra','texto_extra']
    )

    titulo_extra = schema.TextLine(
        title=u'Título do conteúdo extra',
        required=False,
        max_length=200
    )

    texto_extra = RichText(
        title=u"Texto de conteúdo extra. (Exemplo: Lei Original)",
        required=False,
    )


    # Aba com configurações de comentários
    model.fieldset(
        'extra',
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


class IConsulta_Publica(model.Schema):
    """Modelagem do tipo de conteúdo Consulta Pública: container de Propostas.
    """


def validateCep(value):
    if value:
        value = ''.join([c for c in value if c.isdigit()])
        if len(value) != 8:
            raise Invalid((u'CEP inválido.'))
    return True


class IProposta(model.Schema):
    """Modelagem do tipo de conteúdo Proposta: campos e widgets."""

    justificativa = schema.Text(
        title=u'Justificativa da proposta',
    )

    imagem = NamedImage(
        title=(u"Insira uma imagem relativa à proposta"),
        required=True,
    )

    endereco = schema.TextLine(
        title=u'Endereço',
        required=False,
        max_length=500
    )

    bairro = schema.TextLine(
        title=(u'Bairro'),
        description=(u'Informe o bairro.'),
        max_length=50,
        required=False)

    cep = schema.TextLine(
        title=(u'CEP'),
        description=(u'Informe o CEP (apenas números)'),
        max_length=8,
        min_length=8,
        required=False,
        constraint=validateCep
    )

    # localizacao = GeolocationField(
    #     title=(u"Insira a localização no mapa relativa à proposta"),
    #     required=False,
    # )

class IMapa(Interface):
    latitude = schema.Float(title=(u'Latitude'))
    longitude = schema.Float(title=(u'Longitude'))

class IMapaField(IObject):
    pass

class IMapaWidget(IWidget):
    pass
