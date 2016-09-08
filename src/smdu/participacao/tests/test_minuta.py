# -*- coding: utf-8 -*-
from plone.app.testing import TEST_USER_ID
from zope.component import queryUtility
from zope.component import createObject
from plone.app.testing import setRoles
from plone.dexterity.interfaces import IDexterityFTI
from plone import api

from smdu.participacao.testing import SMDU_PARTICIPACAO_INTEGRATION_TESTING  # noqa
from smdu.participacao.interfaces import IMinuta

import unittest


class MinutaIntegrationTest(unittest.TestCase):

    layer = SMDU_PARTICIPACAO_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        setRoles(self.portal, TEST_USER_ID, ['Manager'])
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_schema(self):
        fti = queryUtility(IDexterityFTI, name='Minuta')
        schema = fti.lookupSchema()
        self.assertEqual(IMinuta, schema)

    def test_fti(self):
        fti = queryUtility(IDexterityFTI, name='Minuta')
        self.assertTrue(fti)

    def test_factory(self):
        fti = queryUtility(IDexterityFTI, name='Minuta')
        factory = fti.factory
        obj = createObject(factory)
        self.assertTrue(IMinuta.providedBy(obj))

    def test_adding(self):
        self.portal.invokeFactory('Minuta', 'Minuta')
        self.assertTrue(
            IMinuta.providedBy(self.portal['Minuta'])
        )
