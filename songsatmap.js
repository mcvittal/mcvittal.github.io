function playAudio(src) {
    if (window.audio) {
        audio.pause();
    }
    window.audio = new Audio(src);
    window.audio.play();
}

function popUp(feature, layer) {
    layer.bindPopup("<b>Location:</b> " + feature.properties.name + "<br><b>Classification:</b> " + feature.properties.classification);
}

var points = new L.GeoJSON.AJAX("data/points.geojson", { onEachFeature: popUp });

points.on('click', function (e) { playAudio(e.layer.feature.properties.audiolink) });

var colourmap = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="http://openstreetmap.org/" target="_blank">OpenStreetMap</a>, <a href="https://github.com/calvinmetcalf/leaflet-ajax" target="_blank">Leaflet Ajax</a>',
    maxZoom: 14, minZoom: 2
});

var baseMaps = {
    "Colour": colourmap
}

var songsatmap = L.map('map', {
    center: [44.0, 0],
    zoom: 2,
    layers: [colourmap, points]
});

L.control.layers(baseMaps).addTo(map);