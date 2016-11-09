# -*- coding: utf-8 -*-
from smdu.participacao.interfaces import IMapaField
from smdu.participacao.interfaces import IMapaWidget
from plone.uuid.interfaces import IUUID
from Products.CMFPlone.utils import safe_unicode
from z3c.form.browser.text import TextWidget
from z3c.form.interfaces import IFieldWidget
from z3c.form.interfaces import IFormLayer
from z3c.form.widget import FieldWidget
from zope.component import adapter
from zope.component import queryMultiAdapter
from zope.interface import implementer
from zope.interface import implementer_only

from smdu.participacao import MAPA_KEY

from zope.annotation.interfaces import IAnnotations
from persistent.list import PersistentList

from zope.lifecycleevent.interfaces import IObjectAddedEvent
from smdu.participacao.interfaces import IProposta
import zope.component

import json

# def objectModified(context, event):
#     # What event contains depends on the
#     # triggerer of the event and event class
#     #request = event.object.REQUEST
#     titulo = str(context.title)
#     mapa = context.mapa
#     consulta_publica = context.__parent__
#     annotations = IAnnotations(consulta_publica)
#     if MAPA_KEY not in annotations:
#         annotations[MAPA_KEY] = PersistentList()
#
#     annotations[MAPA_KEY].append({'titulo':titulo,'latitude':mapa.latitude,'longitude':mapa.longitude})
#
# gsm = zope.component.getGlobalSiteManager()
# gsm.registerHandler(objectModified, (IProposta,IObjectAddedEvent))



@implementer_only(IMapaWidget)
class MapaWidget(TextWidget):

    klass = u'mapa-widget'
    value = None

    def getSetupJavascript(self):
        """
        Set some global helpers

        Generate Javascript code to set ``windows.silvupleOptions`` object from ``getJavascriptContextVars()``
        method output.
        """
        # The generated HTML snippet going to <head>
        TEMPLATE = u"""
        <script type="text/javascript" class="javascript-settings">
            var %(name)s = %(json)s;
        </script>
        """

        settings = {'my': 'settings'}
        json_snippet = json.dumps(settings)

        try:
            annotations = IAnnotations(self.context)
        except Exception as e:
            print e
            return ""

        if MAPA_KEY not in annotations:
            annotations[MAPA_KEY] = PersistentList()

        json_snippet = annotations[MAPA_KEY]

        # Use Python string template facility to produce the code
        html = TEMPLATE % { "name" : "localizacao_propostas", "json" : json_snippet }

        return html

    def update(self):
        super(MapaWidget, self).update()
        if self.value is None and self.mode == 'input':
            self.value = self._default_loc()
        if self.value is not None and self.mode == 'input':
            titulo = str(self.context.title)
            latitude = self.value[0]
            longitude = self.value[1]
            if isinstance(latitude, str) and (latitude != '0.0') and (longitude != '0.0'):
                annotations = IAnnotations(self.context)
                if MAPA_KEY not in annotations:
                    annotations[MAPA_KEY] = PersistentList()
                annotations[MAPA_KEY].append({'titulo':titulo,'latitude':latitude,'longitude':longitude})

    @property
    def id_input_lat(self):
        return u'{0}_latitude'.format(self.id)

    @property
    def id_input_lng(self):
        return u'{0}_longitude'.format(self.id)

    @property
    def data_geojson(self):
        """Return the geo location as GeoJSON string.
        """
        coordinates = self.value
        if not coordinates:
            return

        title = getattr(self.context, 'title', '')
        description = getattr(self.context, 'description', '')

        geo_json = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'popup': u'<h3>{0}</h3><p>{1}</p>'.format(
                            safe_unicode(title),
                            safe_unicode(description)
                        )
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            coordinates[1],  # lng
                            coordinates[0]   # lat
                        ]
                    }
                },
            ]
        }

        if self.mode == 'input':
            properties = geo_json['features'][0]['properties']
            properties['editable'] = True
            properties['no_delete'] = True
            properties['latinput'] = u'#{0}'.format(self.id_input_lat)
            properties['lnginput'] = u'#{0}'.format(self.id_input_lng)

        return json.dumps(geo_json)

    def _default_loc(self):
        config = queryMultiAdapter((self.context, self.request),
                                   name="maps_configuration", default=None)
        default = ret = (0.0, 0.0)
        if config and hasattr(config, 'default_location'):
            ret = config.default_location
            if isinstance(ret, basestring):
                ret = ret.split(',')
        if len(ret) != 2:
            return default
        return (float(ret[0]), float(ret[1]))


@implementer(IFieldWidget)
@adapter(IMapaField, IFormLayer)
def MapaFieldWidget(field, request):
    return FieldWidget(field, MapaWidget(request))
