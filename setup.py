# -*- coding: utf-8 -*-
"""Installer for the smdu.participacao package."""

from setuptools import find_packages
from setuptools import setup


long_description = '\n\n'.join([
    open('README.rst').read(),
    open('CONTRIBUTORS.rst').read(),
    open('CHANGES.rst').read(),
])


setup(
    name='smdu.participacao',
    version='1.0a1',
    description="An add-on for Plone",
    long_description=long_description,
    # Get more from https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 4.3",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
    keywords='Python Plone',
    author='Carlo Borsoi Moura',
    author_email='carlo.moura@alliare.com.br',
    url='https://pypi.python.org/pypi/smdu.participacao',
    license='GPL version 2',
    packages=find_packages('src', exclude=['ez_setup']),
    namespace_packages=['smdu'],
    package_dir={'': 'src'},
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'plone.api',
        'Products.GenericSetup',
        'setuptools',
        'z3c.jbot',
        'plone.app.dexterity',
        'cioppino.twothumbs',
        'collective.easyform',
        'collective.monkeypatcher',
        'eea.annotator',
        'plone.app.lockingbehavior',
        # 'plone.app.referenceablebehavior',
        'plone.app.stagingbehavior',
        'pyquery',
        'WeasyPrint',
        'requests',
        'plone.app.contenttypes',

    ],
    extras_require={
        'test': [
            'plone.app.testing',
            'plone.testing',
            'plone.app.contenttypes',
            'plone.app.robotframework[debug]'
        ],
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    """,
)
