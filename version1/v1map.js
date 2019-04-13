var colourmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service, <a href="https://github.com/calvinmetcalf/leaflet-ajax" target="_blank">Leaflet Ajax</a>',
    noWrap: true, maxZoom: 8, minZoom: 2
});

var baseMaps = {
    "Colour": colourmap
}

var songsatmap = L.map('map', {
    center: [44.0, 0],
    zoom: 2,
    maxBounds: L.latLngBounds([-56, -180], [84, 180]),
    maxBoundsViscosity: 0.2,
    layers: [colourmap]
});

songsatmap.on('click', function(e) { console.log("Lat: " + e.latlng.lat + ",  Lon: " + e.latlng.lng) });

$(document).on("click", "#landsatimg", function (feature, layer) {
    document.getElementById('landsatModalLabel').innerHTML = feature.currentTarget.firstChild.attributes.alt.textContent;
    document.getElementById('modal-img').innerHTML = '<img class="img-fluid" src="' + feature.currentTarget.dataset.imgUrl + '">';
});
//L.control.layers(baseMaps).addTo(map);