
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            
            "eea.annotator": {
                files: [
                    {"/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css": ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay.css", "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator.css", "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css/view.css"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "eea.annotator-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }
,
            "geolocation-bundle": {
                files: [
                    {"/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css": ["/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "geolocation-bundle-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }
,
            "plone-logged-in": {
                files: [
                    {"/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css": ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less", "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css/edit.css"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-logged-in-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }
,
            "plone": {
                files: [
                    {"/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css": ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }
,
            "resourceregistry": {
                files: [
                    {"/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css": ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "resourceregistry-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }
,
            "smdu.participacao": {
                files: [
                    {"/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css": ["/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css/smdu-icon-types.css", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css/minuta.css", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css/proposta.css"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "smdu.participacao-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }
,
            "thememapper": {
                files: [
                    {"/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css": ["/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "thememapper-compiled.css.map",
                    sourceMapBasepath: "/home/davi/Projetos/smdu/smdu.participacao",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets", 
                      "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree", 
                      "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less", 
                      "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src", 
                      "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css", 
                      "temp_resources"
],
                    modifyVars: {
                      "annotator": "'annotator.css'",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "eea-icons-animation-css": "'b7c6e864179e4c04bcf6e23fb77b8318.js'",
                      "eea-icons-css": "'fbe6fa126b6b4d40a285e173821b7dcc.js'",
                      "eea_annotator-edit": "'edit.css'",
                      "eea_annotator-view": "'view.css'",
                      "font-awesome": "'font-awesome.css'",
                      "geolocation-bundle-resource": "'geolocation-bundle.less'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "leaflet-geosearch": "'l.geosearch.css'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less/'",
                      "pat-leaflet": "'pat-leaflet.css'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-font-secondary": "Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(45,45,45,.96)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-submenu-width": "180px",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-cioppino-twothumbs-stylesheets-twothumbs": "'twothumbs.css'",
                      "resource-plone-app-event-event-css": "'2c1ef71aebc24c22adfc4a32f9112e1d.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "smdu_participacao-icon-types": "'smdu-icon-types.css'",
                      "smdu_participacao-minuta": "'minuta.css'",
                      "smdu_participacao-proposta": "'proposta.css'",
                      "staticPath": "'/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",

                    }
                }
            }

        },
        requirejs: {
            
            "resource-plone-app-jquerytools-js": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay.js',
                    exclude: ['jquery'],
                    out: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/resource-plone-app-jquerytools-js-compiled.js',
                    optimize: "none"
                }
            },

            "annotator": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full.js',
                    exclude: ['jquery'],
                    out: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-compiled.js',
                    optimize: "none"
                }
            },

            "eea.annotator-view": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view.js',
                    exclude: ['jquery'],
                    out: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/eea.annotator-view-compiled.js',
                    optimize: "none"
                }
            },

            "geolocation-bundle-resource": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "empty:", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "empty:", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "empty:", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "jquery.browser": "empty:", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "empty:", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "empty:", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "empty:", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "empty:", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "empty:", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "empty:", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "empty:", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle.js',
                    exclude: ['jquery'],
                    out: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-resource-compiled.js',
                    optimize: "none"
                }
            },

            "plone-logged-in": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "empty:", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "empty:", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "empty:", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "empty:", "underscore": "empty:", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "empty:", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "empty:", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "empty:", "jquery.cookie": "empty:", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "empty:", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "empty:", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "empty:", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "empty:", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "empty:", "bootstrap-dropdown": "empty:", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "empty:", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "empty:", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "empty:", "mockup-patterns-moment": "empty:", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "empty:", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "empty:", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "empty:", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "empty:", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "empty:", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "empty:", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js',
                    exclude: ['jquery'],
                    out: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js',
                    optimize: "none"
                }
            },

            "plone": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone.js',
                    exclude: ['jquery'],
                    out: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.js',
                    optimize: "none"
                }
            },

            "resourceregistry": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry.js',
                    exclude: ['jquery'],
                    out: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js',
                    optimize: "none"
                }
            },

            "smdu.participacao-minuta": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta.js',
                    exclude: ['jquery'],
                    out: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/smdu.participacao-minuta-compiled.js',
                    optimize: "none"
                }
            },

            "smdu.participacao-proposta": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "empty:", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta.js',
                    exclude: ['jquery'],
                    out: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/smdu.participacao-proposta-compiled.js',
                    optimize: "none"
                }
            },

            "thememapper": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"pat-auto-suggest": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-suggest/auto-suggest", "less": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "pat-htmlparser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/htmlparser", "text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence/pattern", "pat-auto-submit": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-submit/auto-submit", "mockup-patterns-tinymce": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/router", "jquery-textchange": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-textchange/jquery.textchange", "jquery.event.drop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "imagesloaded": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/imagesloaded/imagesloaded.pkgd.min", "tinymce-charmap": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "showdown-table": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/table.min", "mockup-patterns-texteditor": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/texteditor/pattern", "pat-ajax": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/ajax/ajax", "pat-switch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/switch/switch", "tinymce-save": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "pat-expandable": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/expandable-tree/expandable-tree", "pat-legend": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/legend/legend", "get-size": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-size/get-size", "jcrop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jcrop/js/jquery.Jcrop.min", "mockup-patterns-tree": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-visualblocks": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-registry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "resource-cioppino-twothumbs-javascripts-twothumbs": "/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/javascripts/twothumbs", "jquery.event.drag": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/lib/jquery.event.drag", "pat-equaliser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/equaliser/equaliser", "mockup-patterns-formautofocus": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/base/pattern", "pat-image-crop": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/image-crop/image-crop", "pat-placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/placeholder/placeholder", "pat-leaflet": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src/pat-leaflet", "mockup-i18n": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n", "underscore": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "matches-selector": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/matches-selector/matches-selector", "pat-store": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/store", "pat-logger": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "pat-checked-flag": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checked-flag/checked-flag", "tinymce-tabfocus": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "pat-masonry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/masonry/masonry", "tinymce-compat3x": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper/pattern", "pat-remove": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/remove", "mockup-patterns-filemanager-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager", "pat-modal": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/modal/modal", "bootstrap-transition": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "pat-input-change-events": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/input-change-events", "modernizr": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/modernizr", "mockup-patterns-tinymce-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "tinymce-fullpage": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "pat-validation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/validation/validation", "tinymce-spellchecker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "tinymce-anchor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "pat-slideshow-builder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slideshow-builder/slideshow-builder", "prefixfree": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/prefixfree/prefixfree.min", "leaflet-locatecontrol": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet.locatecontrol/src/L.Control.Locate", "mockup-patterns-backdrop": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/cookietrigger/pattern", "pat-checklist": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/checklist/checklist", "tinymce-layer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "pat-markdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/markdown/markdown", "tinymce-wordcount": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/home/davi/.buildout/eggs/plone.app.portlets-4.0.0-py2.7.egg/plone/app/portlets/browser/manage-portlets", "pat-focus": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/focus/focus", "leaflet-sleep": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/Leaflet.Sleep/Leaflet.Sleep", "tinymce-modern-theme": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "mockup-patterns-inlinevalidation": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "tinymce-paste": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "pat-auto-scale": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/auto-scale/auto-scale", "backbone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "pat-grid": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/grid/grid", "resource-plone-app-discussion-javascripts-comments": "temp_resources/938ad593ac1f48c5b3c3b552298d7297", "mockup-patterns-structure": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/pattern", "mockup-patterns-resourceregistry": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload", "moment-timezone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/moment-timezone/moment-timezone", "pat-gallery": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/gallery/gallery", "mockup-patterns-querystring": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring/pattern", "pat-navigation": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/navigation/navigation", "logging": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/logging/src/logging", "ace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-textareamimetypeselector": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "pat-bumper": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/bumper/bumper", "tinymce-lists": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "mockup-patterns-thememapper-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/formunloadalert/pattern", "pat-subform": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/subform/subform", "picker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure", "pat-slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/slides/slides", "tinymce-image": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "pat-collapsible": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/collapsible/collapsible", "ace-mode-css": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "tinymce-bbcode": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "pat-registry": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/registry", "plone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2/pattern", "smdu.participacao-minuta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta", "leaflet-geosearch-openstreetmap": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap", "eea.annotator-view": "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view", "jquery.placeholder": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/jquery-placeholder/jquery.placeholder.min", "tinymce-autoresize": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "eea-icons-js": "temp_resources/10caf7808b204f26b735daf87518c07b", "leaflet-geosearch": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.control.geosearch", "mockup-patterns-sortable": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/contentloader/pattern", "eventie": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/eventie/eventie", "showdown": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/showdown.min", "rjs": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "slides": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/slides/src/slides", "resourceregistry": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry", "modernizr-csspositionsticky": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/modernizr/feature-detects/css-positionsticky", "pat-selectbox": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/selectbox/selectbox", "jquery": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "leaflet-geosearch-google": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.google", "leaflet-geosearch-bing": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.bing", "tinymce-textcolor": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/dfe9b8d32b4441f49b7e86807d25b51a", "tinymce-print": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-ui-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/js/ui", "tinymce-link": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "outlayer": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/outlayer/outlayer", "pat-compat": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/compat", "showdown-github": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/showdown/compressed/extensions/github.min", "pat-dependshandler": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/dependshandler", "tinymce-preview": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "tinymce-hr": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "expect": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/expect/index", "pat-form-state": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/form-state/form-state", "bootstrap-collapse": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "mockup-patterns-tooltip": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "spectrum": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/spectrum/spectrum", "plone-logged-in": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "jquery-highlightsearchterms": "temp_resources/357055b80d524be294df41955f04422d", "mockup-patterns-pickadate": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/moment/pattern", "leaflet-providers": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/leaflet-providers/leaflet-providers", "tinymce-contextmenu": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "pat-depends": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/depends/depends", "pat-base": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "pat-zoom": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/zoom/zoom", "pat-colour-picker": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/colour-picker/colour-picker", "thememapper": "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "pat-clone": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/clone/clone", "mockup-patterns-resourceregistry-url": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "pat-breadcrumbs": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/breadcrumbs/breadcrumbs", "jqtree": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "leaflet-geosearch-esri": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/js/l.geosearch.provider.esri", "mockup-patterns-autotoc": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc/pattern", "get-style-property": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/get-style-property/get-style-property", "tinymce-importcss": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "pat-stacks": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/stacks/stacks", "tinymce-media": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "annotator": "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full", "smdu.participacao-proposta": "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta", "pat-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/parser", "react": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/react", "pat-inject": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/inject/inject", "moment": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "geolocation-bundle-resource": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle", "sinon": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "validate": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/validate/validate.min", "mockup-patterns-filemanager": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager/pattern", "pat-utils": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "tinymce-legacyoutput": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-scroll": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/scroll/scroll", "tpl": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/requirejs-tpl-jcbrand/tpl", "pat-depends_parse": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/lib/depends_parse", "pat-menu": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/menu/menu", "JSXTransformer": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "tinymce-searchreplace": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/core/mockup-parser", "pat-forward": "/home/davi/Projetos/smdu/smdu.participacao/src/plone.patternslib/src/plone/patternslib/static/components/patternslib/src/pat/forward/forward", "dropzone": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "tinymce-table": "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin"},
                    shim: {"pat-auto-suggest": {}, "less": {}, "pat-htmlparser": {}, "text": {}, "mockup-patterns-recurrence": {}, "pat-auto-submit": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "jquery-textchange": {}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-advlist": {"deps": ["tinymce"]}, "showdown-table": {}, "tinymce-image": {"deps": ["tinymce"]}, "pat-switch": {}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "pat-expandable": {}, "pat-legend": {}, "get-size": {}, "plone-patterns-portletmanager": {}, "jquery": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "resource-cioppino-twothumbs-javascripts-twothumbs": {}, "leaflet-geosearch-google": {"deps": ["leaflet-geosearch"]}, "pat-equaliser": {}, "mockup-patterns-formautofocus": {}, "pat-image-crop": {}, "pat-placeholder": {}, "pat-leaflet": {"deps": ["leaflet"]}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "matches-selector": {}, "pat-store": {}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "pat-checked-flag": {}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "pat-masonry": {}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "resource-plone-app-event-event-js": {}, "picker": {}, "pat-modal": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "modernizr": {}, "tinymce-fullpage": {"deps": ["tinymce"]}, "react": {}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "pat-validation": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "tinymce-anchor": {"deps": ["tinymce"]}, "pat-slideshow-builder": {}, "prefixfree": {}, "leaflet-locatecontrol": {"deps": ["leaflet"]}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "pat-checklist": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "pat-markdown": {}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "jcrop": {}, "pat-stacks": {}, "pat-compat": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "pat-auto-scale": {}, "resource-plone-app-discussion-javascripts-comments": {}, "smdu.participacao-minuta": {}, "annotator": {}, "moment-timezone": {}, "pat-gallery": {}, "mockup-patterns-querystring": {}, "pat-navigation": {}, "logging": {}, "ace": {}, "pat-inject": {}, "tinymce-hr": {"deps": ["tinymce"]}, "pat-bumper": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "pat-subform": {}, "pat-form-state": {}, "pat-slides": {}, "pat-ajax": {}, "marked": {}, "pat-collapsible": {}, "ace-mode-css": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "pat-colour-picker": {}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "leaflet-geosearch-openstreetmap": {"deps": ["leaflet-geosearch"]}, "eea.annotator-view": {}, "jquery.placeholder": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "eea-icons-js": {}, "leaflet-geosearch": {"deps": ["leaflet"]}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "eventie": {}, "showdown": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "slides": {}, "resourceregistry": {}, "modernizr-csspositionsticky": {}, "showdown-github": {}, "plone-logged-in": {}, "mockup-patterns-tree": {}, "jquery.event.drag": {"deps": ["jquery"]}, "leaflet-geosearch-bing": {"deps": ["leaflet-geosearch"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "pat-remove": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "outlayer": {}, "leaflet-sleep": {"deps": ["leaflet"]}, "pat-input-change-events": {}, "pat-scroll": {}, "tinymce-preview": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "pat-depends_parse": {}, "mockup-patterns-tooltip": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "spectrum": {}, "pat-selectbox": {}, "pat-menu": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "leaflet-providers": {}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "pat-depends": {}, "pat-base": {}, "plone-patterns-toolbar": {}, "pat-zoom": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "pat-clone": {}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "pat-breadcrumbs": {}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "leaflet-geosearch-esri": {"deps": ["leaflet-geosearch"]}, "mockup-patterns-autotoc": {}, "get-style-property": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "pat-focus": {}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "smdu.participacao-proposta": {}, "pat-parser": {}, "pat-grid": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "geolocation-bundle-resource": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "validate": {}, "mockup-patterns-filemanager": {}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-dependshandler": {}, "tpl": {}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "pat-forward": {}, "imagesloaded": {}, "tinymce-table": {"deps": ["tinymce"]}},
                    wrapShim: true,
                    name: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.js',
                    exclude: ['jquery'],
                    out: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js',
                    optimize: "none"
                }
            },

        },
        sed: {
            
    sed0: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../../../++resource++mockup/relateditems',
    },

    sed1: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../../../++plone++static/components/select2',
    },

    sed2: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../../../../++resource++smdu.participacao/css',
    },

    sed3: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../../../++plone++static/components/jqtree',
    },

    sed4: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../../../++resource++mockup/pickadate',
    },

    sed5: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../../../++resource++eea.annotator.edit.css',
    },

    sed6: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../../../++resource++mockup/upload/less',
    },

    sed7: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed8: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed9: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../../../++plone++static/components/dropzone/dist',
    },

    sed10: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../../../++resource++mockup/resourceregistry',
    },

    sed11: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../../../../++resource++mockup/select2',
    },

    sed12: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../../../../++resource++mockup/modal',
    },

    sed13: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../../../../++plone++patternslib/components/font-awesome/css',
    },

    sed14: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../../../++resource++mockup/markspeciallinks',
    },

    sed15: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../../../../++plone++patternslib/components/pat-leaflet/src',
    },

    sed16: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../../../++resource++mockup/querystring',
    },

    sed17: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../../../++resource++mockup/autotoc',
    },

    sed18: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../../../++plone++static/components/pickadate/lib/themes',
    },

    sed19: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../../../../++resource++jquery.annotator.css',
    },

    sed20: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../../../../++resource++mockupless',
    },

    sed21: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../../../../++plone++plone.formwidget.geolocation',
    },

    sed22: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../../../eea-icons.css',
    },

    sed23: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../../../++resource++mockup/structure/less',
    },

    sed24: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../../../++resource++mockup/tinymce/less',
    },

    sed25: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../../../++resource++mockup/livesearch',
    },

    sed26: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../../../++resource++plone.app.theming',
    },

    sed27: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed28: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../../../++plone++static/components/bootstrap/less',
    },

    sed29: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../../../++resource++plone.app.event',
    },

    sed30: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../../../++resource++eea.annotator.view.css',
    },

    sed31: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../../../++plone++static',
    },

    sed32: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../../../++resource++mockup/recurrence',
    },

    sed33: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../../../../++resource++cioppino.twothumbs.stylesheets',
    },

    sed34: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../../../++plone++static/patterns/toolbar/src/css',
    },

    sed35: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed36: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../../../++resource++mockup/tooltip',
    },

    sed37: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../../../eea-icons-animation.css',
    },

    sed38: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../../../++resource++mockup/filemanager',
    },

    sed39: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../../../../++resource++mockup/tree',
    },

    sed40: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../../../../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed41: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../../../++resource++mockup/thememapper',
    },

    sed42: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed43: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '++resource++mockup/relateditems',
    },

    sed44: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '++plone++static/components/select2',
    },

    sed45: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '++resource++smdu.participacao/css',
    },

    sed46: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '++plone++static/components/jqtree',
    },

    sed47: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '++resource++mockup/pickadate',
    },

    sed48: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '++resource++eea.annotator.edit.css',
    },

    sed49: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '++resource++mockup/upload/less',
    },

    sed50: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed51: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed52: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '++plone++static/components/dropzone/dist',
    },

    sed53: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '++resource++mockup/resourceregistry',
    },

    sed54: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '++resource++mockup/select2',
    },

    sed55: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '++resource++mockup/modal',
    },

    sed56: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '++plone++patternslib/components/font-awesome/css',
    },

    sed57: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '++resource++mockup/markspeciallinks',
    },

    sed58: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '++plone++patternslib/components/pat-leaflet/src',
    },

    sed59: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '++resource++mockup/querystring',
    },

    sed60: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '++resource++mockup/autotoc',
    },

    sed61: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '++plone++static/components/pickadate/lib/themes',
    },

    sed62: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '++resource++jquery.annotator.css',
    },

    sed63: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '++resource++mockupless',
    },

    sed64: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '++plone++plone.formwidget.geolocation',
    },

    sed65: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: 'eea-icons.css',
    },

    sed66: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '++resource++mockup/structure/less',
    },

    sed67: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '++resource++mockup/tinymce/less',
    },

    sed68: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '++resource++mockup/livesearch',
    },

    sed69: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '++resource++plone.app.theming',
    },

    sed70: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed71: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '++plone++static/components/bootstrap/less',
    },

    sed72: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: '++resource++plone.app.event',
    },

    sed73: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '++resource++eea.annotator.view.css',
    },

    sed74: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '++plone++static',
    },

    sed75: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '++resource++mockup/recurrence',
    },

    sed76: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '++resource++cioppino.twothumbs.stylesheets',
    },

    sed77: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '++plone++static/patterns/toolbar/src/css',
    },

    sed78: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed79: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '++resource++mockup/tooltip',
    },

    sed80: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: 'eea-icons-animation.css',
    },

    sed81: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '++resource++mockup/filemanager',
    },

    sed82: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '++resource++mockup/tree',
    },

    sed83: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed84: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '++resource++mockup/thememapper',
    },

    sed85: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed86: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '++resource++mockup/relateditems',
    },

    sed87: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '++plone++static/components/select2',
    },

    sed88: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '++resource++smdu.participacao/css',
    },

    sed89: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '++plone++static/components/jqtree',
    },

    sed90: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '++resource++mockup/pickadate',
    },

    sed91: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '++resource++eea.annotator.edit.css',
    },

    sed92: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '++resource++mockup/upload/less',
    },

    sed93: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed94: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed95: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '++plone++static/components/dropzone/dist',
    },

    sed96: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '++resource++mockup/resourceregistry',
    },

    sed97: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '++resource++mockup/select2',
    },

    sed98: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '++resource++mockup/modal',
    },

    sed99: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '++plone++patternslib/components/font-awesome/css',
    },

    sed100: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '++resource++mockup/markspeciallinks',
    },

    sed101: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '++plone++patternslib/components/pat-leaflet/src',
    },

    sed102: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '++resource++mockup/querystring',
    },

    sed103: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '++resource++mockup/autotoc',
    },

    sed104: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '++plone++static/components/pickadate/lib/themes',
    },

    sed105: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '++resource++jquery.annotator.css',
    },

    sed106: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '++resource++mockupless',
    },

    sed107: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '++plone++plone.formwidget.geolocation',
    },

    sed108: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: 'eea-icons.css',
    },

    sed109: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '++resource++mockup/structure/less',
    },

    sed110: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '++resource++mockup/tinymce/less',
    },

    sed111: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '++resource++mockup/livesearch',
    },

    sed112: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '++resource++plone.app.theming',
    },

    sed113: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed114: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '++plone++static/components/bootstrap/less',
    },

    sed115: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: '++resource++plone.app.event',
    },

    sed116: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '++resource++eea.annotator.view.css',
    },

    sed117: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '++plone++static',
    },

    sed118: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '++resource++mockup/recurrence',
    },

    sed119: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '++resource++cioppino.twothumbs.stylesheets',
    },

    sed120: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '++plone++static/patterns/toolbar/src/css',
    },

    sed121: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed122: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '++resource++mockup/tooltip',
    },

    sed123: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'temp_resources',
      replacement: 'eea-icons-animation.css',
    },

    sed124: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '++resource++mockup/filemanager',
    },

    sed125: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '++resource++mockup/tree',
    },

    sed126: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed127: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '++resource++mockup/thememapper',
    },

    sed128: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed129: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed130: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed131: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../++resource++smdu.participacao/css',
    },

    sed132: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed133: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed134: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.edit.css',
    },

    sed135: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed136: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed137: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed138: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed139: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed140: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed141: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed142: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../++plone++patternslib/components/font-awesome/css',
    },

    sed143: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed144: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../++plone++patternslib/components/pat-leaflet/src',
    },

    sed145: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed146: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed147: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed148: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../++resource++jquery.annotator.css',
    },

    sed149: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed150: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../++plone++plone.formwidget.geolocation',
    },

    sed151: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons.css',
    },

    sed152: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed153: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed154: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed155: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed156: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed157: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed158: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed159: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.view.css',
    },

    sed160: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed161: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed162: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../++resource++cioppino.twothumbs.stylesheets',
    },

    sed163: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed164: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed165: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed166: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons-animation.css',
    },

    sed167: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed168: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed169: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed170: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed171: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed172: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed173: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed174: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../++resource++smdu.participacao/css',
    },

    sed175: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed176: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed177: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.edit.css',
    },

    sed178: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed179: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed180: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed181: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed182: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed183: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed184: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed185: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../++plone++patternslib/components/font-awesome/css',
    },

    sed186: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed187: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../++plone++patternslib/components/pat-leaflet/src',
    },

    sed188: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed189: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed190: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed191: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../++resource++jquery.annotator.css',
    },

    sed192: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed193: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../++plone++plone.formwidget.geolocation',
    },

    sed194: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons.css',
    },

    sed195: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed196: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed197: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed198: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed199: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed200: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed201: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed202: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.view.css',
    },

    sed203: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed204: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed205: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../++resource++cioppino.twothumbs.stylesheets',
    },

    sed206: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed207: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed208: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed209: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons-animation.css',
    },

    sed210: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed211: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed212: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed213: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed214: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed215: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '++resource++mockup/relateditems',
    },

    sed216: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '++plone++static/components/select2',
    },

    sed217: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '++resource++smdu.participacao/css',
    },

    sed218: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '++plone++static/components/jqtree',
    },

    sed219: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '++resource++mockup/pickadate',
    },

    sed220: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '++resource++eea.annotator.edit.css',
    },

    sed221: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '++resource++mockup/upload/less',
    },

    sed222: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed223: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed224: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '++plone++static/components/dropzone/dist',
    },

    sed225: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '++resource++mockup/resourceregistry',
    },

    sed226: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '++resource++mockup/select2',
    },

    sed227: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '++resource++mockup/modal',
    },

    sed228: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '++plone++patternslib/components/font-awesome/css',
    },

    sed229: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '++resource++mockup/markspeciallinks',
    },

    sed230: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '++plone++patternslib/components/pat-leaflet/src',
    },

    sed231: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '++resource++mockup/querystring',
    },

    sed232: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '++resource++mockup/autotoc',
    },

    sed233: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '++plone++static/components/pickadate/lib/themes',
    },

    sed234: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '++resource++jquery.annotator.css',
    },

    sed235: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '++resource++mockupless',
    },

    sed236: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '++plone++plone.formwidget.geolocation',
    },

    sed237: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: 'eea-icons.css',
    },

    sed238: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '++resource++mockup/structure/less',
    },

    sed239: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '++resource++mockup/tinymce/less',
    },

    sed240: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '++resource++mockup/livesearch',
    },

    sed241: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '++resource++plone.app.theming',
    },

    sed242: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed243: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '++plone++static/components/bootstrap/less',
    },

    sed244: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '++resource++plone.app.event',
    },

    sed245: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '++resource++eea.annotator.view.css',
    },

    sed246: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '++plone++static',
    },

    sed247: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '++resource++mockup/recurrence',
    },

    sed248: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '++resource++cioppino.twothumbs.stylesheets',
    },

    sed249: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '++plone++static/patterns/toolbar/src/css',
    },

    sed250: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed251: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '++resource++mockup/tooltip',
    },

    sed252: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: 'eea-icons-animation.css',
    },

    sed253: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '++resource++mockup/filemanager',
    },

    sed254: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '++resource++mockup/tree',
    },

    sed255: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed256: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '++resource++mockup/thememapper',
    },

    sed257: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed258: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed259: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed260: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../++resource++smdu.participacao/css',
    },

    sed261: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed262: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed263: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.edit.css',
    },

    sed264: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed265: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed266: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed267: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed268: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed269: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed270: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed271: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../++plone++patternslib/components/font-awesome/css',
    },

    sed272: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed273: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../++plone++patternslib/components/pat-leaflet/src',
    },

    sed274: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed275: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed276: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed277: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../++resource++jquery.annotator.css',
    },

    sed278: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed279: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../++plone++plone.formwidget.geolocation',
    },

    sed280: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons.css',
    },

    sed281: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed282: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed283: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed284: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed285: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed286: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed287: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed288: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.view.css',
    },

    sed289: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed290: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed291: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../++resource++cioppino.twothumbs.stylesheets',
    },

    sed292: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed293: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed294: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed295: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons-animation.css',
    },

    sed296: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed297: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed298: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed299: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed300: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed301: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed302: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed303: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../++resource++smdu.participacao/css',
    },

    sed304: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed305: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed306: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.edit.css',
    },

    sed307: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed308: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed309: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed310: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed311: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed312: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed313: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed314: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../++plone++patternslib/components/font-awesome/css',
    },

    sed315: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed316: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../++plone++patternslib/components/pat-leaflet/src',
    },

    sed317: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed318: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed319: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed320: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../++resource++jquery.annotator.css',
    },

    sed321: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed322: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../++plone++plone.formwidget.geolocation',
    },

    sed323: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons.css',
    },

    sed324: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed325: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed326: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed327: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed328: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed329: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed330: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed331: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.view.css',
    },

    sed332: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed333: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed334: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../++resource++cioppino.twothumbs.stylesheets',
    },

    sed335: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed336: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed337: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed338: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons-animation.css',
    },

    sed339: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed340: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed341: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed342: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed343: {
      path: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed344: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed345: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed346: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../../++resource++smdu.participacao/css',
    },

    sed347: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed348: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed349: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../++resource++eea.annotator.edit.css',
    },

    sed350: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed351: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed352: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed353: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed354: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed355: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed356: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed357: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../../++plone++patternslib/components/font-awesome/css',
    },

    sed358: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed359: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../../++plone++patternslib/components/pat-leaflet/src',
    },

    sed360: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed361: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed362: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed363: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../../++resource++jquery.annotator.css',
    },

    sed364: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed365: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../../++plone++plone.formwidget.geolocation',
    },

    sed366: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../eea-icons.css',
    },

    sed367: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed368: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed369: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed370: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed371: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed372: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed373: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed374: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../++resource++eea.annotator.view.css',
    },

    sed375: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed376: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed377: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../../++resource++cioppino.twothumbs.stylesheets',
    },

    sed378: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed379: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed380: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed381: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../eea-icons-animation.css',
    },

    sed382: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed383: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed384: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed385: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed386: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed387: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed388: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed389: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../../++resource++smdu.participacao/css',
    },

    sed390: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed391: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed392: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../++resource++eea.annotator.edit.css',
    },

    sed393: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed394: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed395: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed396: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed397: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed398: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed399: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed400: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../../++plone++patternslib/components/font-awesome/css',
    },

    sed401: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed402: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../../++plone++patternslib/components/pat-leaflet/src',
    },

    sed403: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed404: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed405: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed406: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../../++resource++jquery.annotator.css',
    },

    sed407: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed408: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../../++plone++plone.formwidget.geolocation',
    },

    sed409: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../eea-icons.css',
    },

    sed410: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed411: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed412: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed413: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed414: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed415: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed416: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed417: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../++resource++eea.annotator.view.css',
    },

    sed418: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed419: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed420: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../../++resource++cioppino.twothumbs.stylesheets',
    },

    sed421: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed422: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed423: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed424: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../eea-icons-animation.css',
    },

    sed425: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed426: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed427: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed428: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed429: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed430: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed431: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed432: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../../++resource++smdu.participacao/css',
    },

    sed433: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed434: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed435: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../++resource++eea.annotator.edit.css',
    },

    sed436: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed437: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed438: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed439: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed440: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed441: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed442: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed443: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../../++plone++patternslib/components/font-awesome/css',
    },

    sed444: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed445: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../../++plone++patternslib/components/pat-leaflet/src',
    },

    sed446: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed447: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed448: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed449: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../../++resource++jquery.annotator.css',
    },

    sed450: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed451: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../../++plone++plone.formwidget.geolocation',
    },

    sed452: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../eea-icons.css',
    },

    sed453: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed454: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed455: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed456: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed457: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed458: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed459: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed460: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../../++resource++eea.annotator.view.css',
    },

    sed461: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed462: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed463: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../../++resource++cioppino.twothumbs.stylesheets',
    },

    sed464: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed465: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed466: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed467: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'temp_resources',
      replacement: '../../eea-icons-animation.css',
    },

    sed468: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed469: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed470: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed471: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed472: {
      path: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

    sed473: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed474: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed475: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/smdu/participacao/browser/static/css',
      replacement: '../++resource++smdu.participacao/css',
    },

    sed476: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed477: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed478: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.edit.css',
    },

    sed479: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed480: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed481: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed482: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed483: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed484: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed485: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed486: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/font-awesome/css',
      replacement: '../++plone++patternslib/components/font-awesome/css',
    },

    sed487: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed488: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/pat-leaflet/src',
      replacement: '../++plone++patternslib/components/pat-leaflet/src',
    },

    sed489: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed490: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed491: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed492: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator',
      replacement: '../++resource++jquery.annotator.css',
    },

    sed493: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed494: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources',
      replacement: '../++plone++plone.formwidget.geolocation',
    },

    sed495: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons.css',
    },

    sed496: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed497: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed498: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed499: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed500: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed501: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed502: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed503: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/eea.annotator/eea/annotator/browser/css',
      replacement: '../++resource++eea.annotator.view.css',
    },

    sed504: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed505: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed506: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/cioppino.twothumbs-2.0-py2.7.egg/cioppino/twothumbs/browser/stylesheets',
      replacement: '../++resource++cioppino.twothumbs.stylesheets',
    },

    sed507: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed508: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed509: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed510: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../eea-icons-animation.css',
    },

    sed511: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed512: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed513: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/plone.patternslib/src/plone/patternslib/static/components/L.GeoSearch/src/css',
      replacement: '../++plone++patternslib/components/L.GeoSearch/src/css',
    },

    sed514: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/.buildout/eggs/mockup-2.2.0-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed515: {
      path: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/davi/Projetos/smdu/smdu.participacao',
      replacement: '',
    },

        },
        uglify: {
            
        "eea.annotator": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/compiled/eea.annotator-compiled.js': ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/resource-plone-app-jquerytools-js-compiled.js", "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-compiled.js", "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/eea.annotator-view-compiled.js"]
          }
        },

        "geolocation-bundle": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-compiled.js': ["/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle-resource-compiled.js"]
          }
        },

        "plone-logged-in": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js': ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js"]
          }
        },

        "plone": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js': ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-compiled.js"]
          }
        },

        "resourceregistry": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js': ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js"]
          }
        },

        "smdu.participacao": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/compiled/smdu.participacao-compiled.js': ["/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/smdu.participacao-minuta-compiled.js", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/smdu.participacao-proposta-compiled.js"]
          }
        },

        "thememapper": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js': ["/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js"]
          }
        },

        },
        watch: {
            scripts: {
                files: ["/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay.js", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay.css", "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator-full.js", "/home/davi/.buildout/eggs/eea.jquery-8.9-py2.7.egg/eea/jquery/plugins/annotator/annotator.css", "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/js/view.js", "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css/view.css", "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle.js", "/home/davi/Projetos/smdu/smdu.participacao/src/plone.formwidget.geolocation/plone/formwidget/geolocation/resources/geolocation-bundle.less", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less", "/home/davi/Projetos/smdu/smdu.participacao/src/eea.annotator/eea/annotator/browser/css/edit.css", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone.js", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/plone.less", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry.js", "/home/davi/.buildout/eggs/Products.CMFPlone-5.1a1-py2.7.egg/Products/CMFPlone/static/resourceregistry.less", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css/smdu-icon-types.css", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/minuta.js", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css/minuta.css", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/js/proposta.js", "/home/davi/Projetos/smdu/smdu.participacao/src/smdu/participacao/browser/static/css/proposta.css", "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.js", "/home/davi/.buildout/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"],
                tasks: ['requirejs', 'less', 'sed', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sed');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile-all', ['requirejs', 'less', 'sed', 'uglify']);
    
grunt.registerTask('compile-eea.annotator',["requirejs:resource-plone-app-jquerytools-js","requirejs:annotator","requirejs:eea.annotator-view", 'less:eea.annotator', 'sed:sed0', 'sed:sed1', 'sed:sed2', 'sed:sed3', 'sed:sed4', 'sed:sed5', 'sed:sed6', 'sed:sed7', 'sed:sed8', 'sed:sed9', 'sed:sed10', 'sed:sed11', 'sed:sed12', 'sed:sed13', 'sed:sed14', 'sed:sed15', 'sed:sed16', 'sed:sed17', 'sed:sed18', 'sed:sed19', 'sed:sed20', 'sed:sed21', 'sed:sed22', 'sed:sed23', 'sed:sed24', 'sed:sed25', 'sed:sed26', 'sed:sed27', 'sed:sed28', 'sed:sed29', 'sed:sed30', 'sed:sed31', 'sed:sed32', 'sed:sed33', 'sed:sed34', 'sed:sed35', 'sed:sed36', 'sed:sed37', 'sed:sed38', 'sed:sed39', 'sed:sed40', 'sed:sed41', 'sed:sed42', 'sed:sed43', 'sed:sed44', 'sed:sed45', 'sed:sed46', 'sed:sed47', 'sed:sed48', 'sed:sed49', 'sed:sed50', 'sed:sed51', 'sed:sed52', 'sed:sed53', 'sed:sed54', 'sed:sed55', 'sed:sed56', 'sed:sed57', 'sed:sed58', 'sed:sed59', 'sed:sed60', 'sed:sed61', 'sed:sed62', 'sed:sed63', 'sed:sed64', 'sed:sed65', 'sed:sed66', 'sed:sed67', 'sed:sed68', 'sed:sed69', 'sed:sed70', 'sed:sed71', 'sed:sed72', 'sed:sed73', 'sed:sed74', 'sed:sed75', 'sed:sed76', 'sed:sed77', 'sed:sed78', 'sed:sed79', 'sed:sed80', 'sed:sed81', 'sed:sed82', 'sed:sed83', 'sed:sed84', 'sed:sed85', 'sed:sed86', 'sed:sed87', 'sed:sed88', 'sed:sed89', 'sed:sed90', 'sed:sed91', 'sed:sed92', 'sed:sed93', 'sed:sed94', 'sed:sed95', 'sed:sed96', 'sed:sed97', 'sed:sed98', 'sed:sed99', 'sed:sed100', 'sed:sed101', 'sed:sed102', 'sed:sed103', 'sed:sed104', 'sed:sed105', 'sed:sed106', 'sed:sed107', 'sed:sed108', 'sed:sed109', 'sed:sed110', 'sed:sed111', 'sed:sed112', 'sed:sed113', 'sed:sed114', 'sed:sed115', 'sed:sed116', 'sed:sed117', 'sed:sed118', 'sed:sed119', 'sed:sed120', 'sed:sed121', 'sed:sed122', 'sed:sed123', 'sed:sed124', 'sed:sed125', 'sed:sed126', 'sed:sed127', 'sed:sed128', 'uglify:eea.annotator']);
grunt.registerTask('compile-geolocation-bundle',["requirejs:geolocation-bundle-resource", 'less:geolocation-bundle', 'sed:sed129', 'sed:sed130', 'sed:sed131', 'sed:sed132', 'sed:sed133', 'sed:sed134', 'sed:sed135', 'sed:sed136', 'sed:sed137', 'sed:sed138', 'sed:sed139', 'sed:sed140', 'sed:sed141', 'sed:sed142', 'sed:sed143', 'sed:sed144', 'sed:sed145', 'sed:sed146', 'sed:sed147', 'sed:sed148', 'sed:sed149', 'sed:sed150', 'sed:sed151', 'sed:sed152', 'sed:sed153', 'sed:sed154', 'sed:sed155', 'sed:sed156', 'sed:sed157', 'sed:sed158', 'sed:sed159', 'sed:sed160', 'sed:sed161', 'sed:sed162', 'sed:sed163', 'sed:sed164', 'sed:sed165', 'sed:sed166', 'sed:sed167', 'sed:sed168', 'sed:sed169', 'sed:sed170', 'sed:sed171', 'uglify:geolocation-bundle']);
grunt.registerTask('compile-plone-logged-in',["requirejs:plone-logged-in", 'less:plone-logged-in', 'sed:sed172', 'sed:sed173', 'sed:sed174', 'sed:sed175', 'sed:sed176', 'sed:sed177', 'sed:sed178', 'sed:sed179', 'sed:sed180', 'sed:sed181', 'sed:sed182', 'sed:sed183', 'sed:sed184', 'sed:sed185', 'sed:sed186', 'sed:sed187', 'sed:sed188', 'sed:sed189', 'sed:sed190', 'sed:sed191', 'sed:sed192', 'sed:sed193', 'sed:sed194', 'sed:sed195', 'sed:sed196', 'sed:sed197', 'sed:sed198', 'sed:sed199', 'sed:sed200', 'sed:sed201', 'sed:sed202', 'sed:sed203', 'sed:sed204', 'sed:sed205', 'sed:sed206', 'sed:sed207', 'sed:sed208', 'sed:sed209', 'sed:sed210', 'sed:sed211', 'sed:sed212', 'sed:sed213', 'sed:sed214', 'sed:sed215', 'sed:sed216', 'sed:sed217', 'sed:sed218', 'sed:sed219', 'sed:sed220', 'sed:sed221', 'sed:sed222', 'sed:sed223', 'sed:sed224', 'sed:sed225', 'sed:sed226', 'sed:sed227', 'sed:sed228', 'sed:sed229', 'sed:sed230', 'sed:sed231', 'sed:sed232', 'sed:sed233', 'sed:sed234', 'sed:sed235', 'sed:sed236', 'sed:sed237', 'sed:sed238', 'sed:sed239', 'sed:sed240', 'sed:sed241', 'sed:sed242', 'sed:sed243', 'sed:sed244', 'sed:sed245', 'sed:sed246', 'sed:sed247', 'sed:sed248', 'sed:sed249', 'sed:sed250', 'sed:sed251', 'sed:sed252', 'sed:sed253', 'sed:sed254', 'sed:sed255', 'sed:sed256', 'sed:sed257', 'uglify:plone-logged-in']);
grunt.registerTask('compile-plone',["requirejs:plone", 'less:plone', 'sed:sed258', 'sed:sed259', 'sed:sed260', 'sed:sed261', 'sed:sed262', 'sed:sed263', 'sed:sed264', 'sed:sed265', 'sed:sed266', 'sed:sed267', 'sed:sed268', 'sed:sed269', 'sed:sed270', 'sed:sed271', 'sed:sed272', 'sed:sed273', 'sed:sed274', 'sed:sed275', 'sed:sed276', 'sed:sed277', 'sed:sed278', 'sed:sed279', 'sed:sed280', 'sed:sed281', 'sed:sed282', 'sed:sed283', 'sed:sed284', 'sed:sed285', 'sed:sed286', 'sed:sed287', 'sed:sed288', 'sed:sed289', 'sed:sed290', 'sed:sed291', 'sed:sed292', 'sed:sed293', 'sed:sed294', 'sed:sed295', 'sed:sed296', 'sed:sed297', 'sed:sed298', 'sed:sed299', 'sed:sed300', 'uglify:plone']);
grunt.registerTask('compile-resourceregistry',["requirejs:resourceregistry", 'less:resourceregistry', 'sed:sed301', 'sed:sed302', 'sed:sed303', 'sed:sed304', 'sed:sed305', 'sed:sed306', 'sed:sed307', 'sed:sed308', 'sed:sed309', 'sed:sed310', 'sed:sed311', 'sed:sed312', 'sed:sed313', 'sed:sed314', 'sed:sed315', 'sed:sed316', 'sed:sed317', 'sed:sed318', 'sed:sed319', 'sed:sed320', 'sed:sed321', 'sed:sed322', 'sed:sed323', 'sed:sed324', 'sed:sed325', 'sed:sed326', 'sed:sed327', 'sed:sed328', 'sed:sed329', 'sed:sed330', 'sed:sed331', 'sed:sed332', 'sed:sed333', 'sed:sed334', 'sed:sed335', 'sed:sed336', 'sed:sed337', 'sed:sed338', 'sed:sed339', 'sed:sed340', 'sed:sed341', 'sed:sed342', 'sed:sed343', 'uglify:resourceregistry']);
grunt.registerTask('compile-smdu.participacao',["requirejs:smdu.participacao-minuta","requirejs:smdu.participacao-proposta", 'less:smdu.participacao', 'sed:sed344', 'sed:sed345', 'sed:sed346', 'sed:sed347', 'sed:sed348', 'sed:sed349', 'sed:sed350', 'sed:sed351', 'sed:sed352', 'sed:sed353', 'sed:sed354', 'sed:sed355', 'sed:sed356', 'sed:sed357', 'sed:sed358', 'sed:sed359', 'sed:sed360', 'sed:sed361', 'sed:sed362', 'sed:sed363', 'sed:sed364', 'sed:sed365', 'sed:sed366', 'sed:sed367', 'sed:sed368', 'sed:sed369', 'sed:sed370', 'sed:sed371', 'sed:sed372', 'sed:sed373', 'sed:sed374', 'sed:sed375', 'sed:sed376', 'sed:sed377', 'sed:sed378', 'sed:sed379', 'sed:sed380', 'sed:sed381', 'sed:sed382', 'sed:sed383', 'sed:sed384', 'sed:sed385', 'sed:sed386', 'sed:sed387', 'sed:sed388', 'sed:sed389', 'sed:sed390', 'sed:sed391', 'sed:sed392', 'sed:sed393', 'sed:sed394', 'sed:sed395', 'sed:sed396', 'sed:sed397', 'sed:sed398', 'sed:sed399', 'sed:sed400', 'sed:sed401', 'sed:sed402', 'sed:sed403', 'sed:sed404', 'sed:sed405', 'sed:sed406', 'sed:sed407', 'sed:sed408', 'sed:sed409', 'sed:sed410', 'sed:sed411', 'sed:sed412', 'sed:sed413', 'sed:sed414', 'sed:sed415', 'sed:sed416', 'sed:sed417', 'sed:sed418', 'sed:sed419', 'sed:sed420', 'sed:sed421', 'sed:sed422', 'sed:sed423', 'sed:sed424', 'sed:sed425', 'sed:sed426', 'sed:sed427', 'sed:sed428', 'sed:sed429', 'sed:sed430', 'sed:sed431', 'sed:sed432', 'sed:sed433', 'sed:sed434', 'sed:sed435', 'sed:sed436', 'sed:sed437', 'sed:sed438', 'sed:sed439', 'sed:sed440', 'sed:sed441', 'sed:sed442', 'sed:sed443', 'sed:sed444', 'sed:sed445', 'sed:sed446', 'sed:sed447', 'sed:sed448', 'sed:sed449', 'sed:sed450', 'sed:sed451', 'sed:sed452', 'sed:sed453', 'sed:sed454', 'sed:sed455', 'sed:sed456', 'sed:sed457', 'sed:sed458', 'sed:sed459', 'sed:sed460', 'sed:sed461', 'sed:sed462', 'sed:sed463', 'sed:sed464', 'sed:sed465', 'sed:sed466', 'sed:sed467', 'sed:sed468', 'sed:sed469', 'sed:sed470', 'sed:sed471', 'sed:sed472', 'uglify:smdu.participacao']);
grunt.registerTask('compile-thememapper',["requirejs:thememapper", 'less:thememapper', 'sed:sed473', 'sed:sed474', 'sed:sed475', 'sed:sed476', 'sed:sed477', 'sed:sed478', 'sed:sed479', 'sed:sed480', 'sed:sed481', 'sed:sed482', 'sed:sed483', 'sed:sed484', 'sed:sed485', 'sed:sed486', 'sed:sed487', 'sed:sed488', 'sed:sed489', 'sed:sed490', 'sed:sed491', 'sed:sed492', 'sed:sed493', 'sed:sed494', 'sed:sed495', 'sed:sed496', 'sed:sed497', 'sed:sed498', 'sed:sed499', 'sed:sed500', 'sed:sed501', 'sed:sed502', 'sed:sed503', 'sed:sed504', 'sed:sed505', 'sed:sed506', 'sed:sed507', 'sed:sed508', 'sed:sed509', 'sed:sed510', 'sed:sed511', 'sed:sed512', 'sed:sed513', 'sed:sed514', 'sed:sed515', 'uglify:thememapper']);
}
