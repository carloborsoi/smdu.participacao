# -*- coding: utf-8 -*-
"""Módulo onde vivem todas as interfaces, eventos e exceções."""

from zope import schema
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.supermodel import model
from plone.namedfile.field import NamedImage
from plone.formwidget.geolocation.field import GeolocationField
from plone.directives import form

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


class IConsulta_Publica(model.Schema):
    """Modelagem do tipo de conteudo Dexterity: campos e widgets."""

class IProposta(model.Schema):
    """Modelagem do tipo de conteudo Dexterity: campos e widgets."""


    justificativa = schema.Text(
        title=u'Justifciativa da proposta',
    )

    endereco = schema.TextLine(
        title=u'Endereço',
        required=False,
        max_length = 500
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
        required=False)

    imagem = NamedImage(
        title=(u"Caso possua, insira uma imagem relativo à proposta"),
        required=False,
    )

    localizazao = GeolocationField(
        title=(u"Insira a localização no mapa relativa à proposta"),
        required=False,
    )

@form.validator(field=IProposta['cep'])
def validateCep(value):
    if value:
        value = ''.join([c for c in value if c.isdigit()])
        if len(value) != 8:
            raise interface.Invalid((u'CEP inválido.'))
