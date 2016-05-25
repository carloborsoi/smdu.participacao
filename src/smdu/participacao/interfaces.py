# -*- coding: utf-8 -*-
"""Modulo onde todas as interfaces, eventos e excecoes vivem."""

from smdu.participacao import _
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
# from plone.autoform import directives as aform
# from plone.supermodel import model
# from plone.app.z3cform.wysiwyg import WysiwygFieldWidget
from plone.app.textfield import RichText


class ISmduParticipacaoLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


# A linha comentada abaixo nao eh necessaria no momento porque
# 1) nao estamos carregando o modelo a partir de um xml (plone.supermodel)
# 2) nao estamos detalhando os campos com dicas de exibicao (plone.autoform)
# class IMinuta(model.Schema):
class IMinuta(Interface):
    """Modelagem do tipo de conteudo Dexterity: campos e widgets."""

    title = schema.TextLine(
        title=_(u"Title"),
        required=True,
    )

    description = schema.Text(
        title=_(u"Description"),
        required=False,
    )

    # aform.widget('text', WysiwygFieldWidget)
    # text = schema.Text(
    text = RichText(
        title=_(u"Rich Text"),
        required=False
    )
