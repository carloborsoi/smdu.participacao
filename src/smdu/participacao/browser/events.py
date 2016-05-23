from plone import api


def notifyUser(minuta, event):
    workflow = event.workflow
    action = event.action
