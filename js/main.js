// declare global variable
let myMap;
var geojsonLayer;
let mapSelect;

// declare baselayers
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

// main map function!!
function loadMap(mapid){
	try {
		myMap.remove()
	}
	catch(e) {
		console.log(e)
		console.log("no map to delete")
	}
	finally {
		if(mapid == 'mapa'){
			mapSelect = 'A'

			let baseLayers = {
				"Map View": CartoDB_Positron,
				"Satellite View": Satellite
			};

			myMap = L.map('mapdiv1', {
				center: [45.507606356599766, -73.56022692275582]
				,zoom: 15
				,maxZoom: 18
				,minZoom: 13
				,layers: CartoDB_Positron
			});

			// load census data
      geojsonLayer = L.geoJSON(geojsonData, {style: style, onEachFeature: onEachFeature}).addTo(myMap);

			// draw Chinatown boundary
			var chinatown = [ [45.50518675815352, -73.56452850910799], [45.503907028859125, -73.56182422096941], [45.50762901802472, -73.55873431643523], [45.510621469285866, -73.5567602106046], [45.5116364605666, -73.55900253715892], ];
			var poly2 = L.polygon([chinatown], {
					color: '#026670',
					fill: false
			}).addTo(myMap);

			// add custom map info
			legend.addTo(myMap);
			info.addTo(myMap);
		};

		if(mapid == 'mapb'){
			mapSelect = 'B'

			let baseLayers = {
				"Map View": CartoDB_Positron,
				"Satellite View": Satellite
			};

			myMap = L.map('mapdiv1', {
				center: [45.507606356599766, -73.56022692275582]
				,zoom: 15
				,maxZoom: 18
				,minZoom: 13
				,layers: CartoDB_Positron
			});

			// load data census data
      geojsonLayer = L.geoJSON(geojsonData, {style: style, onEachFeature: onEachFeature}).addTo(myMap);

			// draw Chinatown boundary
			var chinatown = [ [45.50518675815352, -73.56452850910799], [45.503907028859125, -73.56182422096941], [45.50762901802472, -73.55873431643523], [45.510621469285866, -73.5567602106046], [45.5116364605666, -73.55900253715892], ];
			var poly2 = L.polygon([chinatown], {
					color: '#026670',
					fill: false
			}).addTo(myMap);

			// add custom map info
			legend.addTo(myMap);
			info.addTo(myMap);
		};

		if(mapid == 'mapc'){
			mapSelect = 'C'

			let baseLayers = {
				"Map View": CartoDB_Positron,
				"Satellite View": Satellite
			};

			myMap = L.map('mapdiv1', {
				center: [45.507606356599766, -73.56022692275582]
				,zoom: 15
				,maxZoom: 18
				,minZoom: 13
				,layers: CartoDB_Positron
			});

			// load data census data
      geojsonLayer = L.geoJSON(geojsonData, {style: style, onEachFeature: onEachFeature}).addTo(myMap);

			// draw Chinatown boundary
			var chinatown = [ [45.50518675815352, -73.56452850910799], [45.503907028859125, -73.56182422096941], [45.50762901802472, -73.55873431643523], [45.510621469285866, -73.5567602106046], [45.5116364605666, -73.55900253715892], ];
			var poly2 = L.polygon([chinatown], {
					color: '#026670',
					fill: false
			}).addTo(myMap);

			// add custom map info
			legend.addTo(myMap);
			info.addTo(myMap);
		};

		if(mapid == 'mapd'){
			mapSelect = 'D'

			let baseLayers = {
				"Map View": CartoDB_Positron,
				"Satellite View": Satellite
			};

			myMap = L.map('mapdiv1', {
				center: [45.507606356599766, -73.56022692275582]
				,zoom: 15
				,maxZoom: 18
				,minZoom: 13
				,layers: CartoDB_Positron
			});

			// load data census data
      geojsonLayer = L.geoJSON(geojsonData, {style: style, onEachFeature: onEachFeature}).addTo(myMap);

			// draw Chinatown boundary
			var chinatown = [ [45.50518675815352, -73.56452850910799], [45.503907028859125, -73.56182422096941], [45.50762901802472, -73.55873431643523], [45.510621469285866, -73.5567602106046], [45.5116364605666, -73.55900253715892], ];
			var poly2 = L.polygon([chinatown], {
					color: '#026670',
					fill: false
			}).addTo(myMap);

			// add custom map info
			legend.addTo(myMap);
			info.addTo(myMap);
		};

	};
};


// set choropleth map colors
function getColor(d) {
	if (mapSelect == 'A'){
		return d > 18000 ? '#800026' :
           d > 14000  ? '#BD0026' :
           d > 11000  ? '#E31A1C' :
           d > 9000  ? '#FC4E2A' :
           d > 7000   ? '#FD8D3C' :
           d > 5000   ? '#FEB24C' :
           d > 3000   ? '#FED976' :
                      '#FFEDA0';
	};
	if (mapSelect == 'B'){
		return d > 50  ? '#E31A1C' :
					 d > 40  ? '#FC4E2A' :
					 d > 30   ? '#FD8D3C' :
					 d > 20   ? '#FEB24C' :
					 d > 10   ? '#FED976' :
											'#FFEDA0';
	};
	if (mapSelect == 'C'){
		return d > 75  ? '#E31A1C' :
					 d > 60  ? '#FC4E2A' :
					 d > 45   ? '#FD8D3C' :
					 d > 30   ? '#FEB24C' :
					 d > 15   ? '#FED976' :
											'#FFEDA0';
	};
	if (mapSelect == 'D'){
		return d > 75  ? '#E31A1C' :
					 d > 60  ? '#FC4E2A' :
					 d > 45   ? '#FD8D3C' :
					 d > 30   ? '#FEB24C' :
					 d > 15   ? '#FED976' :
											'#FFEDA0';
	};
};

// set choropleth map style
function style(feature) {
	if (mapSelect == 'A'){
		return {
        fillColor: getColor(feature.properties.Density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
	};
	if (mapSelect == 'B'){
		return {
				fillColor: getColor(feature.properties.LowInc),
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.5
		};
	};
	if (mapSelect == 'C'){
		return {
				fillColor: getColor(feature.properties.Age65overPerc),
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.5
		};
	};
	if (mapSelect == 'D'){
		return {
				fillColor: getColor(feature.properties.LangChiPerc),
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.5
		};
	};
};

// add hover interaction
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    };
		info.update(layer.feature.properties);
};

function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
		info.update();
};

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
};

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
};

// add custom info control
var info = L.control();

info.onAdd = function (myMap) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

info.update = function (props) {
	if (mapSelect == 'A'){
    this._div.innerHTML = '<h4>Population Density</h4>' +  (props ?
        '<b>' + 'DA:' + props.DAUID + '</b><br />' + props.Density + ' People/km<squ>2</squ>'
        : 'Display On Hover');
	};
	if (mapSelect == 'B'){
		this._div.innerHTML = '<h4>Low Income</h4>' +  (props ?
				'<b>' + 'DA:' + props.DAUID + '</b><br />' + props.LowInc + ' %'
				: 'Display On Hover');
	};
	if (mapSelect == 'C'){
		this._div.innerHTML = '<h4>Pop Over 65</h4>' +  (props ?
				'<b>' + 'DA:' + props.DAUID + '</b><br />' + props.Age65overPerc + ' %'
				: 'Display On Hover');
	};
	if (mapSelect == 'D'){
		this._div.innerHTML = '<h4>Chinese Speakers</h4>' +  (props ?
				'<b>' + 'DA:' + props.DAUID + '</b><br />' + props.LangChiPerc + ' %'
				: 'Display On Hover');
	};
};


// add legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (myMap) {
	if (mapSelect =='A'){
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 3000, 5000, 7000, 9000, 11000, 14000, 18000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    };
    return div;
	};
	if (mapSelect =='B'){
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 30, 40, 50],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    };
    return div;
	};
	if (mapSelect =='C'){
		var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 15, 30, 45, 60, 75],
				labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		for (var i = 0; i < grades.length; i++) {
				div.innerHTML +=
						'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
						grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		};
		return div;
	};
	if (mapSelect =='D'){
		var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 15, 30, 45, 60, 75],
				labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		for (var i = 0; i < grades.length; i++) {
				div.innerHTML +=
						'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
						grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		};
		return div;
	};
};


// window.onload = initialize();
