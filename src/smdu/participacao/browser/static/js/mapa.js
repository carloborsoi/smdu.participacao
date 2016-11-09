(function($) {

 "use strict";

    $(document).ready(function() {
      // Informações básicas do mapa
      var center = [-5191207.638373509,-2698731.105121977];
      var view = new ol.View({
        center: center,
        zoom: 11,
        minZoom: 10,
        maxZoom: 30
      });

      // Camadas KML do mapa
      var url = portal_url+"/++resource++smdu.participacao/kml/MSP.kml";
      var camadaMSP = new ol.layer.Vector({
                  source: new ol.source.Vector({
                    url: url,
                    format: new ol.format.KML({
                      extractStyles: true,
                      extractAttributes: true,
                      maxDepth: 2
                    })
                  })
                });

      // Marcação de outros pontos
      var coordenadas_propostas = [];
      var latitude_proposta;
      var longitude_proposta;
      var i;
      for (i = 0; i < localizacao_propostas.length; i++) {
          latitude_proposta = localizacao_propostas[i]['latitude'];
          longitude_proposta = localizacao_propostas[i]['longitude'];
          coordenadas_propostas.push(new ol.Feature({
                  type: 'icon_itens',
                  geometry: new ol.geom.Point([latitude_proposta,longitude_proposta])
                })
            );
        }

      var styles = {
              'icon_itens': new ol.style.Style({
                image: new ol.style.Icon({
                  anchor: [0.5, 1],
                  src: portal_url+"/++resource++smdu.participacao/img/map-marker.png"
                })
              }),
              'icon_localizacao': new ol.style.Style({
                image: new ol.style.Icon({
                  anchor: [0.5, 1],
                  src: portal_url+"/++resource++smdu.participacao/img/green-map-marker.png"
                })
              }),
            };
      var vectorLayer = new ol.layer.Vector({
              source: new ol.source.Vector({
              features: coordenadas_propostas
              }),
              style: function(feature) {
                return styles[feature.get('type')];
              }
            });
      var featureProposta =   new ol.Feature({
                type: 'icon_localizacao',
              })
      var localizacaoLayer = new ol.layer.Vector({
  			name: 'localizacaoLayer',
        source: new ol.source.Vector(),
  			style: function(featureProposta) {
          return styles[featureProposta.get('type')];
        }
      });
      // Criacao do overlay para mensagem de click no mapa
      var container = document.getElementById('popup');
      var content = document.getElementById('popup-content');
      var overlay = new ol.Overlay( /** @type {olx.OverlayOptions} */ ({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      }));
      // Criação do mapa baseado em open layersx
      // Create a popup overlay which will be used to display feature info
      var map = new ol.Map({
        controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
        }),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          camadaMSP,
          vectorLayer,
          localizacaoLayer,
        ],
        overlays: [overlay],
        target: 'mapa',
        view: view
      });

      // Clique no mapa seleciona as coordenadas_propostas
      map.on('singleclick', function(evt) {
        var coordinate = evt.coordinate;
        $('.latitude').val(coordinate[0]);
        $('.longitude').val(coordinate[1]);
        var popupHtml = "<h1 style='background:white;font-size: 12px;'>&nbsp&nbspEste ponto representa a localização da proposta.&nbsp&nbsp</h1>";
        content.innerHTML = popupHtml;
        overlay.setPosition(coordinate);

      	featureProposta.setGeometry(new ol.geom.Point(coordinate));
        localizacaoLayer.getSource().clear();
      	localizacaoLayer.getSource().addFeature(featureProposta);

        });


   });

})(jQuery);
