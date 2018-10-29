var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;
    highlightLayer.openPopup();
}
var map = L.map('map', {
    zoomControl: true, maxZoom: 28, minZoom: 2
})
var hash = new L.Hash(map);
map.attributionControl.addAttribution('<a href="https://2018.spaceappschallenge.org/challenges/help-others-discover-earth/artify-earth/teams/salinity-1/project" target="_blank">Team Salinity</a>');
map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icon/placeholder_149060#term=point&page=1&position=4" target="_blank">Icons made by Smashicons from flaticons</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
    if (bounds_group.getLayers().length) {
        map.fitBounds(bounds_group.getBounds());
    }
}
var overlay_GoogleSatelliteHybrid_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    opacity: 1.0
});
overlay_GoogleSatelliteHybrid_0.addTo(map);
map.addLayer(overlay_GoogleSatelliteHybrid_0);
function audio_water_play1() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/8.mp3');
    audio.play();
};
function pop_Water1_1(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_water_play1,
    });
    /* Bahamas */
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Water1_1_0() {
    return {
        pane: 'pane_Water1_1',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [27.5, 27.5]
        }),
    }
}
map.createPane('pane_Water1_1');
map.getPane('pane_Water1_1').style.zIndex = 401;
map.getPane('pane_Water1_1').style['mix-blend-mode'] = 'normal';
var layer_Water1_1 = new L.geoJson(json_Water1_1, {
    attribution: '',
    pane: 'pane_Water1_1',
    onEachFeature: pop_Water1_1,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Water1_1_0(feature));
    },
});
bounds_group.addLayer(layer_Water1_1);
map.addLayer(layer_Water1_1);
function audio_water_play2() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/9.mp3');
    audio.play();
};
function pop_Water2_2(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_water_play2,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Water2_2_0() {
    return {
        pane: 'pane_Water2_2',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Water2_2');
map.getPane('pane_Water2_2').style.zIndex = 402;
map.getPane('pane_Water2_2').style['mix-blend-mode'] = 'normal';
var layer_Water2_2 = new L.geoJson(json_Water2_2, {
    attribution: '',
    pane: 'pane_Water2_2',
    onEachFeature: pop_Water2_2,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Water2_2_0(feature));
    },
});
bounds_group.addLayer(layer_Water2_2);
map.addLayer(layer_Water2_2);
function audio_mountain_play1() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/7.mp3');
    audio.play();
};
function pop_Mountain1_3(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_mountain_play1,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Mountain1_3_0() {
    return {
        pane: 'pane_Mountain1_3',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [28.5, 28.5]
        }),
    }
}
map.createPane('pane_Mountain1_3');
map.getPane('pane_Mountain1_3').style.zIndex = 403;
map.getPane('pane_Mountain1_3').style['mix-blend-mode'] = 'normal';
var layer_Mountain1_3 = new L.geoJson(json_Mountain1_3, {
    attribution: '',
    pane: 'pane_Mountain1_3',
    onEachFeature: pop_Mountain1_3,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Mountain1_3_0(feature));
    },
});
bounds_group.addLayer(layer_Mountain1_3);
map.addLayer(layer_Mountain1_3);
function audio_mountain_play2() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/6.mp3');
    audio.play();
};
function pop_Mountain2_4(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_mountain_play2,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Mountain2_4_0() {
    return {
        pane: 'pane_Mountain2_4',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Mountain2_4');
map.getPane('pane_Mountain2_4').style.zIndex = 404;
map.getPane('pane_Mountain2_4').style['mix-blend-mode'] = 'normal';
var layer_Mountain2_4 = new L.geoJson(json_Mountain2_4, {
    attribution: '',
    pane: 'pane_Mountain2_4',
    onEachFeature: pop_Mountain2_4,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Mountain2_4_0(feature));
    },
});
bounds_group.addLayer(layer_Mountain2_4);
map.addLayer(layer_Mountain2_4);

function audio_mountain_play3() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/5.mp3');
    audio.play();
};
function pop_Mountain3_5(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_mountain_play3,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Mountain3_5_0() {
    return {
        pane: 'pane_Mountain3_5',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Mountain3_5');
map.getPane('pane_Mountain3_5').style.zIndex = 405;
map.getPane('pane_Mountain3_5').style['mix-blend-mode'] = 'normal';
var layer_Mountain3_5 = new L.geoJson(json_Mountain3_5, {
    attribution: '',
    pane: 'pane_Mountain3_5',
    onEachFeature: pop_Mountain3_5,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Mountain3_5_0(feature));
    },
});
bounds_group.addLayer(layer_Mountain3_5);
map.addLayer(layer_Mountain3_5);
function audio_forest_play1() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/3.mp3');
    audio.play();
};
function pop_Forest1_6(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_forest_play1,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Forest1_6_0() {
    return {
        pane: 'pane_Forest1_6',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Forest1_6');
map.getPane('pane_Forest1_6').style.zIndex = 406;
map.getPane('pane_Forest1_6').style['mix-blend-mode'] = 'normal';
var layer_Forest1_6 = new L.geoJson(json_Forest1_6, {
    attribution: '',
    pane: 'pane_Forest1_6',
    onEachFeature: pop_Forest1_6,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Forest1_6_0(feature));
    },
});
bounds_group.addLayer(layer_Forest1_6);
map.addLayer(layer_Forest1_6);
function audio_forest_play2() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/4.mp3');
    audio.play();
};
function pop_Forest2_7(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_forest_play2,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Forest2_7_0() {
    return {
        pane: 'pane_Forest2_7',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Forest2_7');
map.getPane('pane_Forest2_7').style.zIndex = 407;
map.getPane('pane_Forest2_7').style['mix-blend-mode'] = 'normal';
var layer_Forest2_7 = new L.geoJson(json_Forest2_7, {
    attribution: '',
    pane: 'pane_Forest2_7',
    onEachFeature: pop_Forest2_7,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Forest2_7_0(feature));
    },
});
bounds_group.addLayer(layer_Forest2_7);
map.addLayer(layer_Forest2_7);
function audio_grass_play1() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/1.mp3');
    audio.play();
};
function pop_Grassland1_8(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_grass_play1,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Grassland1_8_0() {
    return {
        pane: 'pane_Grassland1_8',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Grassland1_8');
map.getPane('pane_Grassland1_8').style.zIndex = 408;
map.getPane('pane_Grassland1_8').style['mix-blend-mode'] = 'normal';
var layer_Grassland1_8 = new L.geoJson(json_Grassland1_8, {
    attribution: '',
    pane: 'pane_Grassland1_8',
    onEachFeature: pop_Grassland1_8,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Grassland1_8_0(feature));
    },
});
bounds_group.addLayer(layer_Grassland1_8);
map.addLayer(layer_Grassland1_8);
function audio_grass_play2() {
    var audio = new Audio('http://alexmcvittie.me/mp3s/2.mp3');
    audio.play();
};
function pop_Grassland2_9(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: audio_grass_play2,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Location: </th>\
                        <td style="white-space: nowrap;">' + (feature.properties['Location'] !== null ? Autolinker.link(String(feature.properties['Location'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Grassland2_9_0() {
    return {
        pane: 'pane_Grassland2_9',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/placeholder.svg',
            iconSize: [32.3, 32.3]
        }),
    }
}
map.createPane('pane_Grassland2_9');
map.getPane('pane_Grassland2_9').style.zIndex = 409;
map.getPane('pane_Grassland2_9').style['mix-blend-mode'] = 'normal';
var layer_Grassland2_9 = new L.geoJson(json_Grassland2_9, {
    attribution: '',
    pane: 'pane_Grassland2_9',
    onEachFeature: pop_Grassland2_9,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Grassland2_9_0(feature));
    },
});
bounds_group.addLayer(layer_Grassland2_9);
map.addLayer(layer_Grassland2_9);
var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing'
}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .className += ' fa fa-search';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .title += 'Search for a place';
var baseMaps = {};
L.control.layers(baseMaps, { '<img src="legend/Grassland2_9.png" /> Grassland 2': layer_Grassland2_9, '<img src="legend/Grassland1_8.png" /> Grassland 1': layer_Grassland1_8, '<img src="legend/Forest2_7.png" /> Forest 2': layer_Forest2_7, '<img src="legend/Forest1_6.png" /> Forest 1': layer_Forest1_6, '<img src="legend/Mountain3_5.png" /> Mountain 3': layer_Mountain3_5, '<img src="legend/Mountain2_4.png" /> Mountain 2': layer_Mountain2_4, '<img src="legend/Mountain1_3.png" /> Mountain 1': layer_Mountain1_3, '<img src="legend/Water2_2.png" /> Water 2': layer_Water2_2, '<img src="legend/Water1_1.png" /> Water 1': layer_Water1_1, "Google Satellite Hybrid": overlay_GoogleSatelliteHybrid_0, }).addTo(map);
setBounds();