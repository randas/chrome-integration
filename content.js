var elements = document.getElementsByTagName("address");
var i;
for(i = 0; i < elements.length; i++){
	var link = document.createElement("a");
	link.href = "#";
	var container = document.createElement(div);
	container.class = "button";
	var time = document.createElement(p);
	time.id = "time";
	var node = document.createTextNode("ESTIMATING TIME");
	time.appendChild(node);
}



var uberClientID = "1SgYLxvfNCPyUqS5s7uYZfB6AZlhdg49"
	, serverToken = "Ks8Pt2MM9PGzf8WBW2ThZGZPmhBxFfkycbUSgyMk"
	, gooToken = "AIzaSyCJhFwZi2GD3Qdsg7yiOLTv7cFa73FpDxI";

var userLat,
	userLong,
	destLat,
	destLong;

var timer;

navigator.geolocation.watchPosition(function(position) {
	userLatitude = position.coords.latitude;
	userLongitude = position.coords.longitude;

	if (typeof timer === typeof undefined) {
		timer = setInterval(function() {
			getEstimatesForUserLocation(userLatitude, userLongitude);
		}, 60000);

		getEstimatesForUserLocation(userLatitude, userLongitude);
	}
});

function getEstimatesForUserLocation(latitude,longitude) {
	console.log("Requesting updated time estimate...");
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
    	Authorization: "Token " + uberServerToken
    },
    data: { 
    	start_latitude: latitude,
    	start_longitude: longitude,
    	end_latitude: partyLatitude,
    	end_longitude: partyLongitude
    },
    success: function(result) {
    	console.log(JSON.stringify(result));

    	// 'results' is an object with a key containing an Array
    	var data = result["prices"]; 
    	if (typeof data != typeof undefined) {
    		// Sort Uber products by time to the user's location 
    		data.sort(function(t0, t1) {
    			return t0.duration - t1.duration;
    		});

    		// Update the Uber button with the shortest time
    		var shortest = data[0];
    		if (typeof shortest != typeof undefined) {
    			console.log("Updating time estimate...");
					$("#time").html("IN " + Math.ceil(shortest.duration / 60.0) + " MIN");
    		}
    	}
    }
  });
}

$("a").click(function(event){
	// Redirect to Uber API via deep-linking to the mobile web-app
	var uberURL = "https://m.uber.com/sign-up?";

	// Add parameters
	uberURL += "client_id=" + uberClientId;
	if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
	if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
	uberURL += "&" + "dropoff_latitude=" + partyLatitude;
	uberURL += "&" + "dropoff_longitude=" + partyLongitude;
	uberURL += "&" + "dropoff_nickname=" + "Thinkful";

	// Redirect to Uber
	window.location.href = uberURL;
});


// var para = document.createElement("p");
// var node = document.createTextNode("RED PANDAAAA");
// para.appendChild(node);

// var element = document.getElementsByTagName("Body");
// element[0].appendChild(para);


// var elements = document.getElementsByTagName("address");
// var i;
// for(i = 0; i < elements.length; i++){
// 	var link = document.createElement("a");
// 	link.href="http://www.google.com/search?tbm=isch&q=RED+PANDAAAA";
// 	link.target="_blank";
// 	var image = document.createElement("img");
// 	var imageurl = chrome.extension.getURL("red.jpg");
// 	image.src = imageurl;
// 	image.width = "640";
// 	image.height = "480";
// 	link.appendChild(image);
// 	elements[i].appendChild(link);

// 	var para1 = document.createElement("p");
// 	var node1 = document.createTextNode("RED PANDAAAA");
// 	para1.appendChild(node1);
// }

//document.write("RED PANDAAAA");