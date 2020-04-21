var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Precipitacin_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-635511.357364, 4326754.272651, -411500.321214, 4488904.359709]
                            })
                        });var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });var format_Precipitacin15042020_2 = new ol.format.GeoJSON();
var features_Precipitacin15042020_2 = format_Precipitacin15042020_2.readFeatures(json_Precipitacin15042020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Precipitacin15042020_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Precipitacin15042020_2.addFeatures(features_Precipitacin15042020_2);var lyr_Precipitacin15042020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Precipitacin15042020_2, 
                style: style_Precipitacin15042020_2,
                title: '<img src="styles/legend/Precipitacin15042020_2.png" /> Precipitación 15/04/2020'
            });

lyr_Precipitacin_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_Precipitacin15042020_2.setVisible(true);
var layersList = [baseLayer,lyr_Precipitacin_0,lyr_Municipios_1,lyr_Precipitacin15042020_2];
lyr_Municipios_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Precipitacin15042020_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'Precipitac': 'Precipitac', '(mm)': '(mm)', });
lyr_Municipios_1.set('fieldImages', {'INSPIREID': 'Hidden', 'COUNTRY': 'Hidden', 'NATLEVEL': 'Hidden', 'NATCODE': 'Hidden', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'Hidden', 'CODNUT2': 'Hidden', 'CODNUT3': 'Hidden', });
lyr_Precipitacin15042020_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Precipitac': 'Hidden', '(mm)': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'NAMEUNIT': 'no label', });
lyr_Precipitacin15042020_2.set('fieldLabels', {'NOMBRE': 'no label', '(mm)': 'no label', });
lyr_Precipitacin15042020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});