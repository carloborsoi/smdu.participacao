# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from smdu.participacao.testing import SMDU_PARTICIPACAO_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that smdu.participacao is properly installed."""

    layer = SMDU_PARTICIPACAO_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if smdu.participacao is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'smdu.participacao'))

    def test_browserlayer(self):
        """Test that ISmduParticipacaoLayer is registered."""
        from smdu.participacao.interfaces import (
            ISmduParticipacaoLayer)
        from plone.browserlayer import utils
        self.assertIn(ISmduParticipacaoLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = SMDU_PARTICIPACAO_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['smdu.participacao'])

    def test_product_uninstalled(self):
        """Test if smdu.participacao is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'smdu.participacao'))

    def test_browserlayer_removed(self):
        """Test that ISmduParticipacaoLayer is removed."""
        from smdu.participacao.interfaces import ISmduParticipacaoLayer
        from plone.browserlayer import utils
        self.assertNotIn(ISmduParticipacaoLayer, utils.registered_layers())
