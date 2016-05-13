# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import smdu.participacao


class SmduParticipacaoLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=smdu.participacao)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'smdu.participacao:default')


SMDU_PARTICIPACAO_FIXTURE = SmduParticipacaoLayer()


SMDU_PARTICIPACAO_INTEGRATION_TESTING = IntegrationTesting(
    bases=(SMDU_PARTICIPACAO_FIXTURE,),
    name='SmduParticipacaoLayer:IntegrationTesting'
)


SMDU_PARTICIPACAO_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(SMDU_PARTICIPACAO_FIXTURE,),
    name='SmduParticipacaoLayer:FunctionalTesting'
)


SMDU_PARTICIPACAO_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        SMDU_PARTICIPACAO_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='SmduParticipacaoLayer:AcceptanceTesting'
)
