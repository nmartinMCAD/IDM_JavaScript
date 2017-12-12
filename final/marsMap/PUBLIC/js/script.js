// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

// create the slippy map
var map = L.map('marsMap', {
  minZoom: 1,
  maxZoom: 4,
  center: [400, 500],
  zoom: 1,
  crs: L.CRS.Simple,
  layers: false
});

// dimensions of the image
var w = 8000,
    h = 3500,
    url = 'img/marsMap.jpg';

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay,
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);




var interestIcon = L.icon({
    iconUrl: 'img/interestMarker.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-12, -30 ] // point from which the popup should open relative to the iconAnchor
});

var vallesMarker = L.marker([-240, 300], {icon: interestIcon}).bindPopup("<h3>Valles Marineris</h3><h4>13° 54′ 0″ S, 59° 12′ 0″ W</h4><h5>more info</h5>")
    noctisMarker = L.marker([-235, 230], {icon: interestIcon}).bindPopup("<h3>Noctis Labyrinthus</h3><h4>7° 0′ 0″ S, 102° 12′ 0″ W</h4><h5>more info</h5>")

var interestMarkers = L.layerGroup([vallesMarker, noctisMarker]);


var landingIcon = L.icon({
    iconUrl: 'img/missionLanding.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-12, -30 ] // point from which the popup should open relative to the iconAnchor
});

var curiosityLanding = L.marker([-227.5, 885], {icon: landingIcon}).bindPopup("<h3>Curiosity Rover</h3><h4>Gale Crater</h4><h5>more info</h5>")

var landingMarkers = L.layerGroup([curiosityLanding]);

var overlays = {
		"Points of Interest": interestMarkers,
    "Landing Sites": landingMarkers
	};

L.control.layers(null, overlays).addTo(map);
