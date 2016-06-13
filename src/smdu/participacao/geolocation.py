from StringIO import StringIO
from csv import writer as csvwriter
from plone.formwidget.geolocation import GeolocationField
from plone.schemaeditor.fields import FieldFactory
from plone.formwidget.geolocation.interfaces import IGeolocation


GeolocationFactory = FieldFactory(GeolocationField, 'Map')


def getSavedFormInputForEdit(self, header=False, delimiter=','):
    """ returns saved as CSV text """
    sbuf = StringIO()
    writer = csvwriter(sbuf, delimiter=delimiter)
    names = self.getColumnNames()
    titles = self.getColumnTitles()

    if header:
        encoded_titles = []
        for t in titles:
            if isinstance(t, unicode):
                t = t.encode('utf-8')
            encoded_titles.append(t)
        writer.writerow(encoded_titles)
    for row in self.getSavedFormInput():
        def get_data(row, i):
            data = row.get(i, '')
            if self._is_file_data(data):
                return data.filename
            elif IGeolocation.providedBy(data):
                return (data.latitude, data.longitude)
            if isinstance(data, unicode):
                return data.encode('utf-8')
            return data
        writer.writerow([get_data(row, i) for i in names])
    res = sbuf.getvalue()
    sbuf.close()
    return res
