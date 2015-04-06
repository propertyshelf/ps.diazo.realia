# -*- coding: utf-8 -*-
"""Test Layer for ps.diazo.realia."""

# zope imports
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import (
    FunctionalTesting,
    IntegrationTesting,
    PloneSandboxLayer,
    PLONE_FIXTURE,
    applyProfile,
)
from plone.testing import (
    Layer,
    z2,
)
from zope.configuration import xmlconfig


class PsDiazoRealiaLayer(PloneSandboxLayer):
    """Custom Test Layer for ps.diazo.realia."""
    defaultBases = (PLONE_FIXTURE, )

    def setUpZope(self, app, configurationContext):
        """Set up Zope for testing."""
        # Load ZCML
        import ps.diazo.realia
        xmlconfig.file(
            'configure.zcml',
            ps.diazo.realia,
            context=configurationContext
        )

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'ps.diazo.realia:default')


PS_DIAZO_REALIA_FIXTURE = PsDiazoRealiaLayer()


PS_DIAZO_REALIA_INTEGRATION_TESTING = IntegrationTesting(
    bases=(PS_DIAZO_REALIA_FIXTURE,),
    name='PsDiazoRealiaLayer:IntegrationTesting'
)


PS_DIAZO_REALIA_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(PS_DIAZO_REALIA_FIXTURE,),
    name='PsDiazoRealiaLayer:FunctionalTesting'
)


PS_DIAZO_REALIA_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        PS_DIAZO_REALIA_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='PsDiazoRealiaLayer:AcceptanceTesting'
)


ROBOT_TESTING = Layer(name='ps.diazo.realia:Robot')
