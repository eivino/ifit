from plone import api
import logging

default_profile = 'profile-ifit.content:default'
logger = logging.getLogger('ifit.content')


def upgrade_content(setup):
    setup.runImportStepFromProfile(default_profile, 'typeinfo')
    