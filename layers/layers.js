ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12323801.612929, -724153.831204, 12336451.791820, -716927.065861]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasDesaTubanan_1 = new ol.format.GeoJSON();
var features_BatasDesaTubanan_1 = format_BatasDesaTubanan_1.readFeatures(json_BatasDesaTubanan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaTubanan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaTubanan_1.addFeatures(features_BatasDesaTubanan_1);
var lyr_BatasDesaTubanan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaTubanan_1, 
                style: style_BatasDesaTubanan_1,
                popuplayertitle: "Batas Desa Tubanan",
                interactive: true,
                title: 'Batas Desa Tubanan'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_DukuhTimbul_3 = new ol.format.GeoJSON();
var features_DukuhTimbul_3 = format_DukuhTimbul_3.readFeatures(json_DukuhTimbul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DukuhTimbul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DukuhTimbul_3.addFeatures(features_DukuhTimbul_3);
var lyr_DukuhTimbul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DukuhTimbul_3, 
                style: style_DukuhTimbul_3,
                popuplayertitle: "Dukuh Timbul",
                interactive: true,
                title: '<img src="styles/legend/DukuhTimbul_3.png" /> Dukuh Timbul'
            });
var format_DukuhDuren_4 = new ol.format.GeoJSON();
var features_DukuhDuren_4 = format_DukuhDuren_4.readFeatures(json_DukuhDuren_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DukuhDuren_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DukuhDuren_4.addFeatures(features_DukuhDuren_4);
var lyr_DukuhDuren_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DukuhDuren_4, 
                style: style_DukuhDuren_4,
                popuplayertitle: "Dukuh Duren",
                interactive: true,
                title: '<img src="styles/legend/DukuhDuren_4.png" /> Dukuh Duren'
            });
var format_DukuhKrajan_5 = new ol.format.GeoJSON();
var features_DukuhKrajan_5 = format_DukuhKrajan_5.readFeatures(json_DukuhKrajan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DukuhKrajan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DukuhKrajan_5.addFeatures(features_DukuhKrajan_5);
var lyr_DukuhKrajan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DukuhKrajan_5, 
                style: style_DukuhKrajan_5,
                popuplayertitle: "Dukuh Krajan",
                interactive: true,
                title: '<img src="styles/legend/DukuhKrajan_5.png" /> Dukuh Krajan'
            });
var format_DukuhSekuping_6 = new ol.format.GeoJSON();
var features_DukuhSekuping_6 = format_DukuhSekuping_6.readFeatures(json_DukuhSekuping_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DukuhSekuping_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DukuhSekuping_6.addFeatures(features_DukuhSekuping_6);
var lyr_DukuhSekuping_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DukuhSekuping_6, 
                style: style_DukuhSekuping_6,
                popuplayertitle: "Dukuh Sekuping",
                interactive: true,
                title: '<img src="styles/legend/DukuhSekuping_6.png" /> Dukuh Sekuping'
            });
var format_SurveiTernakTubanan_7 = new ol.format.GeoJSON();
var features_SurveiTernakTubanan_7 = format_SurveiTernakTubanan_7.readFeatures(json_SurveiTernakTubanan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveiTernakTubanan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveiTernakTubanan_7.addFeatures(features_SurveiTernakTubanan_7);
var lyr_SurveiTernakTubanan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurveiTernakTubanan_7, 
                style: style_SurveiTernakTubanan_7,
                popuplayertitle: "Survei Ternak Tubanan",
                interactive: true,
                title: '<img src="styles/legend/SurveiTernakTubanan_7.png" /> Survei Ternak Tubanan'
            });
var group_RAW = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "RAW"});
var group_SPASIAL = new ol.layer.Group({
                                layers: [lyr_GoogleSatelite_0,lyr_BatasDesaTubanan_1,lyr_Jalan_2,lyr_DukuhTimbul_3,lyr_DukuhDuren_4,lyr_DukuhKrajan_5,lyr_DukuhSekuping_6,],
                                fold: "open",
                                title: "SPASIAL"});

lyr_GoogleSatelite_0.setVisible(true);lyr_BatasDesaTubanan_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_DukuhTimbul_3.setVisible(true);lyr_DukuhDuren_4.setVisible(true);lyr_DukuhKrajan_5.setVisible(true);lyr_DukuhSekuping_6.setVisible(true);lyr_SurveiTernakTubanan_7.setVisible(true);
var layersList = [group_SPASIAL,lyr_SurveiTernakTubanan_7];
lyr_BatasDesaTubanan_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'objectid': 'objectid', 'provinsi': 'provinsi', 'kabupaten': 'kabupaten', 'kecamatan': 'kecamatan', 'desa': 'desa', 'kode_dagri': 'kode_dagri', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DukuhTimbul_3.set('fieldAliases', {'id': 'id', 'DUKUH': 'DUKUH', });
lyr_DukuhDuren_4.set('fieldAliases', {'id': 'id', 'DUKUH': 'DUKUH', });
lyr_DukuhKrajan_5.set('fieldAliases', {'id': 'id', 'DUKUH': 'DUKUH', });
lyr_DukuhSekuping_6.set('fieldAliases', {'id': 'id', 'DUKUH': 'DUKUH', });
lyr_SurveiTernakTubanan_7.set('fieldAliases', {'fid': 'fid', 'date': 'date', 'notes': 'notes', 'photo': 'photo', 'Nama': 'Nama', 'Kohe': 'Kohe', 'Jenis': 'Jenis', 'Dukuh': 'Dukuh', 'layer': 'layer', 'path': 'path', 'No Telfon': 'No Telfon', 'RT/RW': 'RT/RW', 'Ternak': 'Ternak', 'Jumlah Jantan': 'Jumlah Jantan', 'Jumlah Betina': 'Jumlah Betina', 'Jumlah Ternak': 'Jumlah Ternak', 'Hewan Sakit': 'Hewan Sakit', 'BCS Ternak': 'BCS Ternak', 'Gangguan Reproduksi': 'Gangguan Reproduksi', 'Status Vaksinasi': 'Status Vaksinasi', 'Pakan': 'Pakan', 'Pemanfaatan KoHe': 'Pemanfaatan KoHe', 'Dijual ke siapa & berapa?': 'Dijual ke siapa & berapa?', 'Terpakai untuk apa?': 'Terpakai untuk apa?', 'Tawaran untuk dibeli': 'Tawaran untuk dibeli', });
lyr_BatasDesaTubanan_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'objectid': '', 'provinsi': '', 'kabupaten': '', 'kecamatan': '', 'desa': '', 'kode_dagri': '', 'shape_leng': '', 'shape_area': '', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_DukuhTimbul_3.set('fieldImages', {'id': 'TextEdit', 'DUKUH': 'TextEdit', });
lyr_DukuhDuren_4.set('fieldImages', {'id': 'TextEdit', 'DUKUH': 'TextEdit', });
lyr_DukuhKrajan_5.set('fieldImages', {'id': 'TextEdit', 'DUKUH': 'TextEdit', });
lyr_DukuhSekuping_6.set('fieldImages', {'id': 'TextEdit', 'DUKUH': 'TextEdit', });
lyr_SurveiTernakTubanan_7.set('fieldImages', {'fid': 'TextEdit', 'date': 'DateTime', 'notes': 'TextEdit', 'photo': 'ExternalResource', 'Nama': 'TextEdit', 'Kohe': 'CheckBox', 'Jenis': 'TextEdit', 'Dukuh': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'No Telfon': 'TextEdit', 'RT/RW': 'TextEdit', 'Ternak': 'TextEdit', 'Jumlah Jantan': 'Range', 'Jumlah Betina': 'Range', 'Jumlah Ternak': 'Range', 'Hewan Sakit': 'CheckBox', 'BCS Ternak': 'TextEdit', 'Gangguan Reproduksi': 'TextEdit', 'Status Vaksinasi': 'TextEdit', 'Pakan': 'TextEdit', 'Pemanfaatan KoHe': 'TextEdit', 'Dijual ke siapa & berapa?': 'TextEdit', 'Terpakai untuk apa?': 'TextEdit', 'Tawaran untuk dibeli': 'TextEdit', });
lyr_BatasDesaTubanan_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'objectid': 'no label', 'provinsi': 'no label', 'kabupaten': 'no label', 'kecamatan': 'no label', 'desa': 'no label', 'kode_dagri': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_DukuhTimbul_3.set('fieldLabels', {'id': 'no label', 'DUKUH': 'no label', });
lyr_DukuhDuren_4.set('fieldLabels', {'id': 'no label', 'DUKUH': 'no label', });
lyr_DukuhKrajan_5.set('fieldLabels', {'id': 'no label', 'DUKUH': 'no label', });
lyr_DukuhSekuping_6.set('fieldLabels', {'id': 'no label', 'DUKUH': 'no label', });
lyr_SurveiTernakTubanan_7.set('fieldLabels', {'fid': 'inline label - always visible', 'date': 'inline label - always visible', 'notes': 'inline label - always visible', 'photo': 'inline label - visible with data', 'Nama': 'inline label - always visible', 'Kohe': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Dukuh': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', 'No Telfon': 'inline label - always visible', 'RT/RW': 'inline label - always visible', 'Ternak': 'inline label - always visible', 'Jumlah Jantan': 'inline label - always visible', 'Jumlah Betina': 'inline label - always visible', 'Jumlah Ternak': 'inline label - always visible', 'Hewan Sakit': 'inline label - always visible', 'BCS Ternak': 'inline label - always visible', 'Gangguan Reproduksi': 'inline label - always visible', 'Status Vaksinasi': 'inline label - always visible', 'Pakan': 'inline label - always visible', 'Pemanfaatan KoHe': 'inline label - always visible', 'Dijual ke siapa & berapa?': 'inline label - always visible', 'Terpakai untuk apa?': 'inline label - always visible', 'Tawaran untuk dibeli': 'inline label - always visible', });
lyr_SurveiTernakTubanan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});