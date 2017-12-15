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



//Creating a custom icon for geographic features markers
var interestIcon = L.icon({
    iconUrl: 'img/interestMarker.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-12, -30 ] // point from which the popup should open relative to the iconAnchor
});

//Initializing the geographic features markers, assigning the custom icon, and binding a pop, from which a relevant lightbox can be accessed
var vallesMarker = L.marker([-240, 300], {icon: interestIcon}).bindPopup("<h3>Valles Marineris</h3><h4>-13.9°, -59.2°</h4><h5 data-featherlight='#vallesLightbox'>more info</h5>")
    noctisMarker = L.marker([-235, 230], {icon: interestIcon}).bindPopup("<h3>Noctis Labyrinthus</h3><h4>-7°, -102.2°</h4><h5 data-featherlight='#noctisLightbox'>more info</h5>")
    monsMarker = L.marker([-157.5, 132.5], {icon: interestIcon}).bindPopup("<h3>Olympus Mons</h3><h4>18.65°, 226.2°</h4><h5 data-featherlight='#olympusLightbox'>more info</h5>")
    hellasMarker = L.marker([-325, 700], {icon: interestIcon}).bindPopup("<h3>Hellas Planitia</h3><h4>42.4°S, 70.5°E</h4><h5 data-featherlight='#hellasLightbox'>more info</h5>")
    elysiumMarker = L.marker([-140, 910], {icon: interestIcon}).bindPopup("<h3>Elysium Mons</h3><h4>25.02°N, 147.21°E</h4><h5 data-featherlight='#elysiumLightbox'>more info</h5>")

//Assigning geographic features markers to a layer group that can be toggled from the layers menu
var interestMarkers = L.layerGroup([vallesMarker, noctisMarker, monsMarker, hellasMarker, elysiumMarker]);


//Creating a custom icon for mission landing sites markers
var landingIcon = L.icon({
    iconUrl: 'img/missionLanding.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-12, -30 ] // point from which the popup should open relative to the iconAnchor
});

//Initializing the mission landing sites, assigning the custom icon, and binding a pop, from which a relevant lightbox can be accessed
var curiosityLanding = L.marker([-227.5, 885], {icon: landingIcon}).bindPopup("<h3>Curiosity Rover</h3><h4>Gale Crater</h4><h5 data-featherlight='#curiosityLightbox'>more info</h5>")
    opportunityLanding = L.marker([-215, 510], {icon: landingIcon}).bindPopup("<h3>Opportunity Rover</h3><h4>Meridiani Planum</h4><h5 data-featherlight='#opportunityLightbox'>more info</h5>")
    vikingOneLanding = L.marker([-125, 390], {icon: landingIcon}).bindPopup("<h3>Viking I</h3><h4>Chryse Planitia</h4><h5 data-featherlight='#vikingOneLightbox'>more info</h5>")
    vikingTwoLanding = L.marker([-80, 885], {icon: landingIcon}).bindPopup("<h3>Viking II</h3><h4>Utopia Planitia</h4><h5 data-featherlight='#vikingTwoLightbox'>more info</h5>")
    pathfinderLanding = L.marker([-180, 425], {icon: landingIcon}).bindPopup("<h3>Pathfinder Rover</h3><h4>Ares Vallis</h4><h5 data-featherlight='#pathfinderLightbox'>more info</h5>")

//Assigning mission landing markers to a layer group that can be toggled from the layers menu
var landingMarkers = L.layerGroup([curiosityLanding, opportunityLanding, vikingOneLanding, vikingTwoLanding, pathfinderLanding]);

//Creating a custom icon for craters of interest markers
var craterIcon = L.icon({
    iconUrl: 'img/craterMarker.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-16, -30 ] // point from which the popup should open relative to the iconAnchor
});

//Initializing the craters of interest markers, assigning the custom icon, and binding a pop, from which a relevant lightbox can be accessed
var bacolorMarker = L.marker([-114, 831], {icon: craterIcon}).bindPopup("<h3>Bacolor Crater</h3><h4>33°N, 241.4°W</h4><h5 data-featherlight='#bacolorLightbox'>more info</h5>")
    huygensMarker = L.marker([-255, 660], {icon: craterIcon}).bindPopup("<h3>Huygens Crater</h3><h4>13.9°S, 304.4°W</h4><h5 data-featherlight='#huygensLightbox'>more info</h5>")
    schiaparelliMarker = L.marker([-220, 550], {icon: craterIcon}).bindPopup("<h3>Schiaparelli Crater</h3><h4>2.7°S, 16.7°E</h4><h5 data-featherlight='#schiaparelliLightbox'>more info</h5>")
    victoriaMarker = L.marker([-220, 495], {icon: craterIcon}).bindPopup("<h3>Victoria Crater</h3><h4>2.05°S, 5.50°W</h4><h5 data-featherlight='#victoriaLightbox'>more info</h5>")
    arimaMarker = L.marker([-260, 325], {icon: craterIcon}).bindPopup("<h3>Arima Twin Craters</h3><h4>15.8°S, 296.3°E</h4><h5 data-featherlight='#arimaLightbox'>more info</h5>")

//Assigning craters of interest markers to a layer group that can be toggled from the layers menu
var craterMarkers = L.layerGroup([bacolorMarker, huygensMarker, schiaparelliMarker, victoriaMarker, arimaMarker]);

//Placing overlay toggles into layer control box
var overlays = {
		"Geographic Features": interestMarkers,
    "Mission Landing Sites": landingMarkers,
    "Craters of Interest": craterMarkers
	};

//Initializing layer control box, setting 'baseMaps' feature to null since it is not in used, and 'overlayMaps' to my marker groups
L.control.layers(null, overlays).addTo(map);
