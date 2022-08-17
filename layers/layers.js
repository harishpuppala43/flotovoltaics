var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_India_1 = new ol.format.GeoJSON();
var features_India_1 = format_India_1.readFeatures(json_India_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_1.addFeatures(features_India_1);
var lyr_India_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_1, 
                style: style_India_1,
                interactive: true,
                title: '<img src="styles/legend/India_1.png" /> India'
            });
var format_reservoirs_2 = new ol.format.GeoJSON();
var features_reservoirs_2 = format_reservoirs_2.readFeatures(json_reservoirs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reservoirs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reservoirs_2.addFeatures(features_reservoirs_2);
var lyr_reservoirs_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reservoirs_2, 
                style: style_reservoirs_2,
                interactive: true,
                title: '<img src="styles/legend/reservoirs_2.png" /> reservoirs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_India_1.setVisible(true);lyr_reservoirs_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_India_1,lyr_reservoirs_2];
lyr_India_1.set('fieldAliases', {'State': 'State', });
lyr_reservoirs_2.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Reservoir': 'Reservoir', 'Area (Hec)': 'Area (Hec)', });
lyr_India_1.set('fieldImages', {'State': '', });
lyr_reservoirs_2.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Reservoir': 'TextEdit', 'Area (Hec)': 'TextEdit', });
lyr_India_1.set('fieldLabels', {'State': 'no label', });
lyr_reservoirs_2.set('fieldLabels', {'Latitude': 'inline label', 'Longitude': 'inline label', 'Reservoir': 'inline label', 'Area (Hec)': 'inline label', });
lyr_reservoirs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});