function popUp(feature, layer) {
    layer.bindPopup('<a id="landsatimg" href="#landsatModal" data-toggle="modal" data-img-url="images/landsat/' + feature.properties.imgname + '"><img class="img-points" src="images/landsat/' + feature.properties.imgname + '" alt="' + feature.properties.name + '"></a><br><b>Location:</b> ' + feature.properties.name + "<br><b>Classification:</b> " + feature.properties.classification);
}

var points = new L.GeoJSON.AJAX("data/points.geojson", { onEachFeature: popUp });

points.on('click', function (e) { playAudio(e.layer.feature.properties.audiolink) });

var colourmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service, <a href="https://github.com/calvinmetcalf/leaflet-ajax" target="_blank">Leaflet Ajax</a>',
    id: 'songsatmap',
    noWrap: true, maxZoom: 8, minZoom: 3
});

console.log(points.getBounds(), {padding: L.point(20, 20)})

var baseMaps = {
    "Colour": colourmap
}

var songsatmap = L.map('map', {
    center: [44.0, 0],
    zoom: 3,
    maxBounds: L.latLngBounds([-90, -180], [84, 180]),
    maxBoundsViscosity: 0.2,
    layers: [colourmap, points]
});

// Add a layer control element to the map
layerControl = L.control.layers({position: 'bottomleft'});
layerControl.addTo(songsatmap);

$(document).on("click", "#landsatimg", function (feature, layer) {
    document.getElementById('landsatModalLabel').innerHTML = feature.currentTarget.firstChild.attributes.alt.textContent;
    document.getElementById('modal-img').innerHTML = '<img class="img-fluid" src="' + feature.currentTarget.dataset.imgUrl + '">';
});
//L.control.layers(baseMaps).addTo(map);