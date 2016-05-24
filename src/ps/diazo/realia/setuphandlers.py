# -*- coding: utf-8 -*-
"""Post install import steps for ps.diazo.realia."""

# zope imports
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """Do not show on Plone's list of installable profiles."""
        return [
            u'ps.diazo.realia:uninstall',
        ]


def is_not_current_profile(context):
    return context.readDataFile(
        'psdiazorealia_marker.txt'
    ) is None


def post_install(context):
    """Post install script."""
    if is_not_current_profile(context):
        return
    # Do something during the installation of this package
