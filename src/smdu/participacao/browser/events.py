from plone.api.content import transition
from plone.api.content import get_state


def notifyUser(minuta, event):
	old_state = get_state(minuta)
    workflow = event.workflow
    action = event.action
    # transition(minuta, transition='publish', comment='')