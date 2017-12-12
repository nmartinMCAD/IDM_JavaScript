// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

// create the slippy map
var map = L.map('marsMap', {
  minZoom: 1,
  maxZoom: 4,
  center: [400, 500],
  zoom: 1,
  crs: L.CRS.Simple
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






var interestMarker = L.icon({
    iconUrl: 'img/interestMarker.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-12, -30 ] // point from which the popup should open relative to the iconAnchor
});

var vallesMarker = L.marker([-240, 300], {icon: interestMarker}).addTo(map);
var noctisMarker = L.marker([-235, 230], {icon: interestMarker}).addTo(map);

vallesMarker.bindPopup("<h3>Valles Marineris</h3><h4>13° 54′ 0″ S, 59° 12′ 0″ W</h4>").setOpacity(0)
noctisMarker.bindPopup("<h3>Noctis Labyrinthus</h3><h4>7° 0′ 0″ S, 102° 12′ 0″ W</h4>").setOpacity(0)


var landingMarker = L.icon({
    iconUrl: 'img/missionLanding.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-12, -30 ] // point from which the popup should open relative to the iconAnchor
});

var curiosityLanding = L.marker([-227.5, 885], {icon: landingMarker}).addTo(map);


curiosityLanding.bindPopup("<h3>Curiosity Rover</h3><h4>Gale Crater</h4>").setOpacity(0);








var menuTitle = $('h1');
var menuTools = $('h2');


$(".hamburger").click(function (evt) {
  $(".hamburger").toggleClass( "is-active" );
  $(".toolsMenu").toggle();
  menuTitle.textillate({
    in: {
      effect: 'fadeInRight',
      sync: true,
    }
  });
  menuTools.textillate({
    in: {
      effect: 'fadeInRight',
      sync: true,
    }
  });
});

$('#pointsOfInterest').click(function (evt) {
  vallesMarker.setOpacity(1);
  noctisMarker.setOpacity(1);
});

$('#landingSites').click(function (evt) {
  curiosityLanding.setOpacity(1);
});
