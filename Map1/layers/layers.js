var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Guzergah_1 = new ol.format.GeoJSON();
var features_Guzergah_1 = format_Guzergah_1.readFeatures(json_Guzergah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guzergah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guzergah_1.addFeatures(features_Guzergah_1);
var lyr_Guzergah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guzergah_1, 
                style: style_Guzergah_1,
                interactive: true,
                title: '<img src="styles/legend/Guzergah_1.png" /> Guzergah'
            });
var format_YapilarNokta_2 = new ol.format.GeoJSON();
var features_YapilarNokta_2 = format_YapilarNokta_2.readFeatures(json_YapilarNokta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YapilarNokta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YapilarNokta_2.addFeatures(features_YapilarNokta_2);
var lyr_YapilarNokta_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YapilarNokta_2, 
                style: style_YapilarNokta_2,
                interactive: true,
    title: 'YapilarNokta<br />\
    <img src="styles/legend/YapilarNokta_2_0.png" /> <br />\
    <img src="styles/legend/YapilarNokta_2_1.png" /> AÇ KAPA<br />\
    <img src="styles/legend/YapilarNokta_2_2.png" /> İSTASYON<br />\
    <img src="styles/legend/YapilarNokta_2_3.png" /> KÖPRÜ<br />\
    <img src="styles/legend/YapilarNokta_2_4.png" /> TÜNEL<br />\
    <img src="styles/legend/YapilarNokta_2_5.png" /> ÜST GEÇİT<br />'
        });
var format_YapilarCizgi_3 = new ol.format.GeoJSON();
var features_YapilarCizgi_3 = format_YapilarCizgi_3.readFeatures(json_YapilarCizgi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YapilarCizgi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YapilarCizgi_3.addFeatures(features_YapilarCizgi_3);
var lyr_YapilarCizgi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YapilarCizgi_3, 
                style: style_YapilarCizgi_3,
                interactive: true,
    title: 'YapilarCizgi<br />\
    <img src="styles/legend/YapilarCizgi_3_0.png" /> AC-KAPA<br />\
    <img src="styles/legend/YapilarCizgi_3_1.png" /> KOPRU<br />\
    <img src="styles/legend/YapilarCizgi_3_2.png" /> TUNEL<br />\
    <img src="styles/legend/YapilarCizgi_3_3.png" /> <br />'
        });
var format_KM_Guzergah_4 = new ol.format.GeoJSON();
var features_KM_Guzergah_4 = format_KM_Guzergah_4.readFeatures(json_KM_Guzergah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KM_Guzergah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KM_Guzergah_4.addFeatures(features_KM_Guzergah_4);
var lyr_KM_Guzergah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KM_Guzergah_4, 
                style: style_KM_Guzergah_4,
                interactive: true,
                title: '<img src="styles/legend/KM_Guzergah_4.png" /> KM_Guzergah'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Guzergah_1.setVisible(true);lyr_YapilarNokta_2.setVisible(true);lyr_YapilarCizgi_3.setVisible(true);lyr_KM_Guzergah_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Guzergah_1,lyr_YapilarNokta_2,lyr_YapilarCizgi_3,lyr_KM_Guzergah_4];
lyr_Guzergah_1.set('fieldAliases', {'layer': 'layer', });
lyr_YapilarNokta_2.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_YapilarCizgi_3.set('fieldAliases', {'layer': 'layer', });
lyr_KM_Guzergah_4.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_Guzergah_1.set('fieldImages', {'layer': 'TextEdit', });
lyr_YapilarNokta_2.set('fieldImages', {'Name': '', 'layer': '', });
lyr_YapilarCizgi_3.set('fieldImages', {'layer': '', });
lyr_KM_Guzergah_4.set('fieldImages', {'Name': '', 'X': '', 'Y': '', });
lyr_Guzergah_1.set('fieldLabels', {'layer': 'no label', });
lyr_YapilarNokta_2.set('fieldLabels', {'Name': 'no label', 'layer': 'no label', });
lyr_YapilarCizgi_3.set('fieldLabels', {'layer': 'no label', });
lyr_KM_Guzergah_4.set('fieldLabels', {'Name': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KM_Guzergah_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});