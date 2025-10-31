var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_dukuh_somopuro_1 = new ol.format.GeoJSON();
var features_dukuh_somopuro_1 = format_dukuh_somopuro_1.readFeatures(json_dukuh_somopuro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dukuh_somopuro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dukuh_somopuro_1.addFeatures(features_dukuh_somopuro_1);
var lyr_dukuh_somopuro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dukuh_somopuro_1, 
                style: style_dukuh_somopuro_1,
                popuplayertitle: 'dukuh_somopuro',
                interactive: true,
    title: 'dukuh_somopuro<br />\
    <img src="styles/legend/dukuh_somopuro_1_0.png" /> Ngudirejo<br />\
    <img src="styles/legend/dukuh_somopuro_1_1.png" /> Nolojayan<br />\
    <img src="styles/legend/dukuh_somopuro_1_2.png" /> Pandan<br />\
    <img src="styles/legend/dukuh_somopuro_1_3.png" /> Pandansari<br />\
    <img src="styles/legend/dukuh_somopuro_1_4.png" /> Platar<br />\
    <img src="styles/legend/dukuh_somopuro_1_5.png" /> Pule<br />\
    <img src="styles/legend/dukuh_somopuro_1_6.png" /> Sawah<br />\
    <img src="styles/legend/dukuh_somopuro_1_7.png" /> Sawahan<br />\
    <img src="styles/legend/dukuh_somopuro_1_8.png" /> Sinduharjo<br />\
    <img src="styles/legend/dukuh_somopuro_1_9.png" /> Somopuro<br />\
    <img src="styles/legend/dukuh_somopuro_1_10.png" /> Wirosari<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_dukuh_somopuro_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_dukuh_somopuro_1];
lyr_dukuh_somopuro_1.set('fieldAliases', {'fid_1': 'fid_1', 'desa_kel': 'desa_kel', 'RT1': 'RT1', 'RW1': 'RW1', 'DK_KP': 'DK_KP', 'WADMKC_12': 'WADMKC_12', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_dukuh_somopuro_1.set('fieldImages', {'fid_1': 'Range', 'desa_kel': 'TextEdit', 'RT1': 'TextEdit', 'RW1': 'TextEdit', 'DK_KP': 'TextEdit', 'WADMKC_12': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_dukuh_somopuro_1.set('fieldLabels', {'fid_1': 'no label', 'desa_kel': 'inline label - visible with data', 'RT1': 'inline label - visible with data', 'RW1': 'inline label - visible with data', 'DK_KP': 'inline label - visible with data', 'WADMKC_12': 'no label', });
lyr_dukuh_somopuro_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});