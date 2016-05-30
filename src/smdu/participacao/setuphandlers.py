# -*- coding: utf-8 -*-
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller"""
        return [
            'smdu.participacao:uninstall',
            'collective.js.jqueryui:default',
            'eea.annotator:uninstall',
            'eea.icons:default',
            'eea.icons:uninstall',
            'eea.jquery:default',
            'eea.jquery:01-jquery',
            'eea.jquery:02-ui',
            'eea.jquery:03-ajaxfileupload',
            'eea.jquery:04-bbq',
            'eea.jquery:05-cookie',
            'eea.jquery:06-fancybox',
            'eea.jquery:07-flashembed',
            'eea.jquery:08-galleryview',
            'eea.jquery:09-jqzoom',
            'eea.jquery:10-jstree',
            'eea.jquery:11-reflection',
            'eea.jquery:12-select2uislider',
            'eea.jquery:13-splitter',
            'eea.jquery:14-tagcloud',
            'eea.jquery:15-tools',
            'eea.jquery:16-tokeninput',
            'eea.jquery:17-jqgrid',
            'eea.jquery:18-slickgrid',
            'eea.jquery:19-colorpicker',
            'eea.jquery:20-annotator',
            'eea.jquery:21-serialscroll',
            'eea.jquery:22-masonry',
            'eea.jquery:23-select2',
            'eea.jquery:24-timeoutdialog',
            'eea.jquery:25-rememberstate',
            'eea.jquery:26-knob',
            'eea.jquery:27-dracula',
            'plone.app.debugtoolbar:uninstall',
            'plone.app.event.at:default',
            'plone.app.querystring:upgrade_to_3',
            'plone.app.querystring:upgrade_to_5',
            'plone.app.relationfield:default',
            'plone.app.versioningbehavior:default',
            'plone.formwidget.autocomplete:default',
            'plone.formwidget.contenttree:default',
            'plone.formwidget.recurrence:default',
            'plone.formwidget.querystring:default',
        ]


def post_install(context):
    """Post install script"""
    # Do something at the end of the installation of this package.


def uninstall(context):
    """Uninstall script"""
    # Do something at the end of the uninstallation of this package.
