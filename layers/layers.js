ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-48.510380, -1.416118, -48.468525, -1.393947]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_5 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_5 = format_CanaisdeAcessoLongoPrazo_5.readFeatures(json_CanaisdeAcessoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CanaisdeAcessoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_5.addFeatures(features_CanaisdeAcessoLongoPrazo_5);
var lyr_CanaisdeAcessoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_5, 
                style: style_CanaisdeAcessoLongoPrazo_5,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_5.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_6 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_6 = format_CanaisdeAcessoMdioPrazo_6.readFeatures(json_CanaisdeAcessoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CanaisdeAcessoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_6.addFeatures(features_CanaisdeAcessoMdioPrazo_6);
var lyr_CanaisdeAcessoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_6, 
                style: style_CanaisdeAcessoMdioPrazo_6,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_6.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_7 = format_CanaisdeAcessoCurtoPrazo_7.readFeatures(json_CanaisdeAcessoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CanaisdeAcessoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_7.addFeatures(features_CanaisdeAcessoCurtoPrazo_7);
var lyr_CanaisdeAcessoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_7, 
                style: style_CanaisdeAcessoCurtoPrazo_7,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_7.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_8 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_8 = format_CanaisdeAcessoSituaoAtual_8.readFeatures(json_CanaisdeAcessoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CanaisdeAcessoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_8.addFeatures(features_CanaisdeAcessoSituaoAtual_8);
var lyr_CanaisdeAcessoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_8, 
                style: style_CanaisdeAcessoSituaoAtual_8,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_8.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_9 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_9 = format_AcessosHidroviriosExternos_9.readFeatures(json_AcessosHidroviriosExternos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcessosHidroviriosExternos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_9.addFeatures(features_AcessosHidroviriosExternos_9);
var lyr_AcessosHidroviriosExternos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_9, 
                style: style_AcessosHidroviriosExternos_9,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_9.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_10 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_10 = format_AcessosRodoviriosInternosLongoPrazo_10.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_10.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_10);
var lyr_AcessosRodoviriosInternosLongoPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_10, 
                style: style_AcessosRodoviriosInternosLongoPrazo_10,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_10.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_11 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_11 = format_AcessosRodoviriosInternosMdioPrazo_11.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_11.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_11);
var lyr_AcessosRodoviriosInternosMdioPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_11, 
                style: style_AcessosRodoviriosInternosMdioPrazo_11,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_11.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_12 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_12 = format_AcessosRodoviriosInternosCurtoPrazo_12.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_12.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_12);
var lyr_AcessosRodoviriosInternosCurtoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_12, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_12,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_12.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_13 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_13 = format_AcessosRodoviriosInternosSituaoAtual_13.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_13.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_13);
var lyr_AcessosRodoviriosInternosSituaoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_13, 
                style: style_AcessosRodoviriosInternosSituaoAtual_13,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_13.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_14 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_14 = format_AcessosRodoviriosExternos_14.readFeatures(json_AcessosRodoviriosExternos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcessosRodoviriosExternos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_14.addFeatures(features_AcessosRodoviriosExternos_14);
var lyr_AcessosRodoviriosExternos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_14, 
                style: style_AcessosRodoviriosExternos_14,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_14.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_23 = format_reasNoAfetassOperaesPorturiasLongoPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_24 = format_reasNoAfetassOperaesPorturiasMdioPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_26 = format_reasNoAfetassOperaesPorturiasSituaoAtual_26.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_26.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_26);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_26, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_26.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_27 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_27 = format_reaseInstalaesAlfandegadas_27.readFeatures(json_reaseInstalaesAlfandegadas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reaseInstalaesAlfandegadas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_27.addFeatures(features_reaseInstalaesAlfandegadas_27);
var lyr_reaseInstalaesAlfandegadas_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_27, 
                style: style_reaseInstalaesAlfandegadas_27,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_27.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_28 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_28 = format_AcostagemLongoPrazo_28.readFeatures(json_AcostagemLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcostagemLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_28.addFeatures(features_AcostagemLongoPrazo_28);
var lyr_AcostagemLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_28, 
                style: style_AcostagemLongoPrazo_28,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_28.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_29 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_29 = format_AcostagemMdioPrazo_29.readFeatures(json_AcostagemMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcostagemMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_29.addFeatures(features_AcostagemMdioPrazo_29);
var lyr_AcostagemMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_29, 
                style: style_AcostagemMdioPrazo_29,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_29.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_30 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_30 = format_AcostagemCurtoPrazo_30.readFeatures(json_AcostagemCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcostagemCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_30.addFeatures(features_AcostagemCurtoPrazo_30);
var lyr_AcostagemCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_30, 
                style: style_AcostagemCurtoPrazo_30,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_30.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_31 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_31 = format_AcostagemSituaoAtual_31.readFeatures(json_AcostagemSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AcostagemSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_31.addFeatures(features_AcostagemSituaoAtual_31);
var lyr_AcostagemSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_31, 
                style: style_AcostagemSituaoAtual_31,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_31.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_32 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_32 = format_ArmazenagemLongoPrazo_32.readFeatures(json_ArmazenagemLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ArmazenagemLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_32.addFeatures(features_ArmazenagemLongoPrazo_32);
var lyr_ArmazenagemLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_32, 
                style: style_ArmazenagemLongoPrazo_32,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_32.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_33 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_33 = format_ArmazenagemMdioPrazo_33.readFeatures(json_ArmazenagemMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ArmazenagemMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_33.addFeatures(features_ArmazenagemMdioPrazo_33);
var lyr_ArmazenagemMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_33, 
                style: style_ArmazenagemMdioPrazo_33,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_33.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_34 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_34 = format_ArmazenagemCurtoPrazo_34.readFeatures(json_ArmazenagemCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ArmazenagemCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_34.addFeatures(features_ArmazenagemCurtoPrazo_34);
var lyr_ArmazenagemCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_34, 
                style: style_ArmazenagemCurtoPrazo_34,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_34.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_35 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_35 = format_ArmazenagemSituaoAtual_35.readFeatures(json_ArmazenagemSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ArmazenagemSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_35.addFeatures(features_ArmazenagemSituaoAtual_35);
var lyr_ArmazenagemSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_35, 
                style: style_ArmazenagemSituaoAtual_35,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_35.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_44 = format_reasAfetassOperaesPorturiasLongoPrazo_44.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_44.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_44);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_44, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_44.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_45 = format_reasAfetassOperaesPorturiasMdioPrazo_45.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_45.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_45);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_45, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_45.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_46 = format_reasAfetassOperaesPorturiasCurtoPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_46);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_46, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_46.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_47 = format_reasAfetassOperaesPorturiasSituaoAtual_47.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_47.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_47);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_47, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_47.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeBelm_48 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeBelm_48 = format_PoligonaldareadoPortoOrganizadodeBelm_48.readFeatures(json_PoligonaldareadoPortoOrganizadodeBelm_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_PoligonaldareadoPortoOrganizadodeBelm_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeBelm_48.addFeatures(features_PoligonaldareadoPortoOrganizadodeBelm_48);
var lyr_PoligonaldareadoPortoOrganizadodeBelm_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeBelm_48, 
                style: style_PoligonaldareadoPortoOrganizadodeBelm_48,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Belém',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeBelm_48.png" /> Poligonal da Área do Porto Organizado de Belém'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeBelm_48,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_44,lyr_reasAfetassOperaesPorturiasMdioPrazo_45,lyr_reasAfetassOperaesPorturiasCurtoPrazo_46,lyr_reasAfetassOperaesPorturiasSituaoAtual_47,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_32,lyr_ArmazenagemMdioPrazo_33,lyr_ArmazenagemCurtoPrazo_34,lyr_ArmazenagemSituaoAtual_35,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_28,lyr_AcostagemMdioPrazo_29,lyr_AcostagemCurtoPrazo_30,lyr_AcostagemSituaoAtual_31,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_27,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta'});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta'});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_14,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_10,lyr_AcessosRodoviriosInternosMdioPrazo_11,lyr_AcessosRodoviriosInternosCurtoPrazo_12,lyr_AcessosRodoviriosInternosSituaoAtual_13,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos'});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_9,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_5,lyr_CanaisdeAcessoMdioPrazo_6,lyr_CanaisdeAcessoCurtoPrazo_7,lyr_CanaisdeAcessoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros'});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_5.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_6.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_7.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_8.setVisible(false);lyr_AcessosHidroviriosExternos_9.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_10.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_11.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_12.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_13.setVisible(false);lyr_AcessosRodoviriosExternos_14.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.setVisible(false);lyr_reaseInstalaesAlfandegadas_27.setVisible(false);lyr_AcostagemLongoPrazo_28.setVisible(false);lyr_AcostagemMdioPrazo_29.setVisible(false);lyr_AcostagemCurtoPrazo_30.setVisible(false);lyr_AcostagemSituaoAtual_31.setVisible(false);lyr_ArmazenagemLongoPrazo_32.setVisible(false);lyr_ArmazenagemMdioPrazo_33.setVisible(false);lyr_ArmazenagemCurtoPrazo_34.setVisible(false);lyr_ArmazenagemSituaoAtual_35.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_44.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_45.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_47.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeBelm_48.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_CanaisdeAcessoLongoPrazo_5.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_6.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_7.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_8.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_9.set('fieldAliases', {'Calado': 'Calado (m) ', 'Nome': 'Nome', 'Atual': 'Atualização ', });
lyr_AcessosRodoviriosInternosLongoPrazo_10.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_11.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_12.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_13.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_14.set('fieldAliases', {'Sigla': 'Sigla', 'Nome': 'Nome', 'Jurisdiça': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'D_Inicio': 'Data de Início do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'D_Inicio': 'Data de Início do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'D_Inicio': 'Data de Início do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'D_Inicio': 'Data de Início do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Destinacao': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Destinacao': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Destinacao': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Destinacao': 'Destinação ', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_28.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_29.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_30.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_31.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_32.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_33.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_34.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_35.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.set('fieldAliases', {'Name': 'Nome ', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.set('fieldAliases', {'Arrend': 'Arrendatário ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'N_Cont': 'Número do Contrato ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.set('fieldAliases', {'Arrend': 'Arrendatário ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'N_Cont': 'Número do Contrato ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.set('fieldAliases', {'Arrend': 'Arrendatário ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'N_Cont': 'Número do Contrato ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.set('fieldAliases', {'Arrend': 'Arrendatário ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'N_Cont': 'Número do Contrato ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_44.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_45.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_46.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_47.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_48.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_5.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_6.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_7.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_8.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_9.set('fieldImages', {'Calado': 'TextEdit', 'Nome': 'TextEdit', 'Atual': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_10.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_11.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_12.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_13.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_14.set('fieldImages', {'Sigla': 'TextEdit', 'Nome': 'TextEdit', 'Jurisdiça': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'D_Inicio': 'DateTime', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'D_Inicio': 'DateTime', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'D_Inicio': 'DateTime', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'D_Inicio': 'DateTime', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldImages', {'Inst_Legal': 'TextEdit', });
lyr_AcostagemLongoPrazo_28.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemMdioPrazo_29.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemCurtoPrazo_30.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemSituaoAtual_31.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_32.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_33.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_34.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_35.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.set('fieldImages', {'Name': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.set('fieldImages', {'Arrend': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'N_Cont': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.set('fieldImages', {'Arrend': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'N_Cont': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.set('fieldImages', {'Arrend': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'N_Cont': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.set('fieldImages', {'Arrend': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'N_Cont': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_44.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_45.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_46.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_47.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_48.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_5.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_6.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_7.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_8.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_9.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Atual': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_10.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_11.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_12.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_13.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_14.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Jurisdiça': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_28.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_29.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_30.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_31.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_32.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_33.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_34.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_35.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.set('fieldLabels', {'Name': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_44.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_45.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_46.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_47.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_48.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_48.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});