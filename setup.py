# -*- coding: utf-8 -*-
"""Setup for ps.diazo.realia package."""

from setuptools import (
    find_packages,
    setup,
)

version = '0.12'
description = 'Propertyshelf Realia Theme'
long_description = ('\n'.join([
    open('README.rst').read(),
    'Contributors',
    '------------\n',
    open('CONTRIBUTORS.rst').read(),
    open('CHANGES.rst').read(),
]))

install_requires = [
    'setuptools',
    # -*- Extra requirements: -*-
    'plone.api',
    'plone.app.theming',
    'z3c.jbot',
]

testfixture_requires = [
    'ps.plone.fotorama',
    'ps.plone.mls',
    'ps.plone.mlstiles',
    'webcouturier.dropdownmenu',
]

setup(
    name='ps.diazo.realia',
    version=version,
    description=description,
    long_description=long_description,
    # Get more strings from
    # http://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Framework :: Plone',
        'Framework :: Plone :: 4.2',
        'Framework :: Plone :: 4.3',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License v2 (GPLv2)',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
    ],
    keywords='plone diazo',
    author='Propertyshelf, Inc.',
    author_email='development@propertyshelf.com',
    url='https://github.com/propertyshelf/ps.diazo.realia',
    download_url='http://pypi.python.org/pypi/ps.diazo.realia',
    license='GPL',
    packages=find_packages('src', exclude=['ez_setup']),
    package_dir={'': 'src'},
    namespace_packages=['ps', 'ps.diazo'],
    include_package_data=True,
    zip_safe=False,
    extras_require=dict(
        testfixture=testfixture_requires,
        test=[
            'plone.app.robotframework',
            'plone.app.testing',
            'robotframework-selenium2screenshots',
        ],
    ),
    install_requires=install_requires,
    entry_points="""
    # -*- Entry points: -*-

    [z3c.autoinclude.plugin]
    target = plone
    """,
)
