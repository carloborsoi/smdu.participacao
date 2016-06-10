from plone.schemaeditor.fields import FieldFactory
from plone.formwidget.geolocation import GeolocationField


GeolocationFactory = FieldFactory(GeolocationField, 'Map')
