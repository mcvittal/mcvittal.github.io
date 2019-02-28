function playAudio(src) {
    if (window.audio) {
        audio.pause();
    }
    window.audio = new Audio(src);
    window.audio.play();
}

function popUp(feature, layer) {
    layer.bindPopup('<a id="landsatimg" href="#landsatModal" data-toggle="modal" data-img-url="images/landsat/' + feature.properties.imgname + '"><img class="img-points" src="images/landsat/' + feature.properties.imgname + '" alt="' + feature.properties.name + '"></a><br><b>Location:</b> ' + feature.properties.name + "<br><b>Classification:</b> " + feature.properties.classification);
}

var points = new L.GeoJSON.AJAX("data/points.geojson", { onEachFeature: popUp });

points.on('click', function (e) { playAudio(e.layer.feature.properties.audiolink) });

var colourmap = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="http://openstreetmap.org/" target="_blank">OpenStreetMap</a>, <a href="https://github.com/calvinmetcalf/leaflet-ajax" target="_blank">Leaflet Ajax</a>',
    noWrap: true, maxZoom: 5, minZoom: 2
});

var baseMaps = {
    "Colour": colourmap
}

var songsatmap = L.map('map', {
    center: [44.0, 0],
    zoom: 2,
    maxBounds: L.latLngBounds([-56, -180], [84, 180]),
    maxBoundsViscosity: 0.75,
    layers: [colourmap, points]
});

$(document).on("click", "#landsatimg", function(feature, layer){
    document.getElementById('landsatModalLabel').innerHTML = feature.currentTarget.firstChild.attributes.alt.textContent;
    document.getElementById('modal-img').innerHTML = '<img class="img-fluid" src="' + feature.currentTarget.dataset.imgUrl + '">';
 });
//L.control.layers(baseMaps).addTo(map);