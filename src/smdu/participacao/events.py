# -*- coding: utf-8 -*-
from zope.component import queryAdapter
from eea.annotator.interfaces import IAnnotatorStorage

def finaliza_avaliacao(minuta, event):
    if event.action == 'finaliza-avaliacao':
        # minuta.readOnlyAnnotator = True
        annotator = queryAdapter(minuta, IAnnotatorStorage)
        annotator.readOnly = True
