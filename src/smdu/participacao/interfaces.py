# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

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


# class IMinuta(model.Schema):
class IMinuta(Interface):
    """Dexterity content type model: fields and widgets."""

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
