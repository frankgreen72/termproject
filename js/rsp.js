// declare global variable
let myMap;

// declare our baselayers
const CartoDB_Positron = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

const Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

function initialize(){
    loadMap();
};

// map function
function loadMap(mapid){
			myMap = L.map('mapdiv1', {
				center: [45.507606356599766, -73.56022692275582]
				,zoom: 16
				,maxZoom: 18
				,minZoom: 4
				,layers: CartoDB_Positron
			});

			//add the basemap style(s) to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
			let baseLayers = {
				"Map View": CartoDB_Positron,
				"Satellite View": Satellite
			};

			//declare basemap selector widget
			let lcontrol = L.control.layers(baseLayers);
			//add it to the map
			lcontrol.addTo(myMap);

			// add site markers to map
      var marker1 = L.circle([45.50783789, -73.56142182], {
        title: "Brady Street Public Space"
        ,color: '#026670'
        ,fillColor: '#026670'
        ,fillOpacity: 0.5
        ,radius: 20
      }).addTo(myMap).bindPopup("<h2>Brady Street</h2><p>Converting Brady Street and the publicly-owned vacant lot into an intimate public space in the heart of Chinatown.</p> <img src='./imgs/brady.png'/>");

      var viger = [ [45.50651071936912, -73.55978728479731], [45.50764850007289, -73.55871001131912], [45.51062044492321, -73.5567299525289], [45.51013133420109, -73.55561474700788], [45.50909993461657, -73.55654787815811], [45.509232847994994, -73.55694237262813], [45.50632463155678, -73.55934727161684] ];
      var poly1 = L.polygon([viger], {
          color: '#026670'
      }).addTo(myMap).bindPopup("<h2>Viger Avenue</h2><p>Redesign of Viger Avenue and the adjacent space between the street and the Autoroute 720, including the reallocation of street lanes, the closing of the 720 on-ramp, and the creation of a continuous green corridor, linking the two metro stations.</p> <img src='./imgs/viger_redesign.png'/>");

      var marker3 = L.circle([45.5058249009575, -73.5613972267069], {
        title: "Palais des Congrès Square"
        ,color: '#026670'
        ,fillColor: '#026670'
        ,fillOpacity: 0.5
        ,radius: 35
      }).addTo(myMap).bindPopup("<h2>Palais des Congrès</h2><p>Redesign of the Square in the perspective of acknowledgment of the urban renewal legacy of the area, affirming its identity as a multifunctional public space that re-connects with and integrates into the local community fabric. </p> <img src='./imgs/pdc_square.png'/>");

};



window.onload = initialize();
