$('document').ready(function(){
	init()
	L.mapbox.accessToken = 'pk.eyJ1IjoicGFtLSIsImEiOiJNT09NSzgwIn0.AWl1AY_kO1HMnFHwxb9mww';
	var map = L.mapbox.map('map', 'mapbox.streets')
    	.setView([40, -100], 5);

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1aROLgOHRS7jBpdTlrTzK5QM645tf0iwxYgyxr9g0iNs/pub?hl=en_US&hl=en_US&single=true&gid=0&output=html';

  function init() {

  Tabletop.init({
    key: '1aROLgOHRS7jBpdTlrTzK5QM645tf0iwxYgyxr9g0iNs',
    callback: showInfo,
    simpleSheet: true
	});
  }

  function showInfo(data, tabletop) {
		var friends = data;
		for (i=0; i < friends.length; i++) {
			if (friends[i]["Long"] !== "Long" && friends[i]["Lat"] !== "Lat") {
				var long = parseFloat(friends[i]["Long"]);
				var lat = parseFloat(friends[i]["Lat"]);
				var friend = friends[i]["Friend"];
				var city = friends[i]["City"];
				var state = friends[i]["State"];
				console.log(friends[i]["Long"], friends[i]["Lat"]);
					console.log(long);
					markerGenerator(friend, city, state, long, lat);

  			/*	L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    				type: 'Feature',
    				geometry: {
        			type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        			coordinates: [
          			long,
          			lat,
        			]
    				},
	    			properties: {
	        		title: 'Mira Nair',
	        		description: 'Boston, Massachussetts',
	              'marker-size': 'large',
	        			'marker-color': '#861c58',
						}

					}).addTo(map); */

				}
		}
	}
	function markerGenerator(friend, city, state, long, lat){
		L.mapbox.featureLayer({
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [
						long,
						lat,
					]
				},
				properties: {
					title: friend,
					description: city + ", " + state,
						'marker-size': 'large',
						'marker-color': '#861c58',
				}

			}).addTo(map);
	}
});
