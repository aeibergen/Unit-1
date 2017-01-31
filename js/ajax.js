function initialize(){
	//jsAjax();
	jQueryAjax();


};

//demo of AJAX using plain javascript
	function jsAjax(){
		//instatiate an ajax request object
		var ajaxRequest = new XMLHttpRequest();

		//create an event handler for the request (function that is called when event is fired) (happens every time ready state changes, when ready state becomes four
		// then you know data has loaded, then calls callback function and passes it your data)
		ajaxRequest.onreadystatechange = function(){
			console.log(ajaxRequest.readyState);
			if (ajaxRequest.readyState == 4){
				//call a callback function and pass the data to it
				jsCallback(ajaxRequest.response);
			}
		};

		//open ajax request
		ajaxRequest.open('GET', 'data/MegaCitiesGeoJSON.geojson', true);

		//set data type
		ajaxRequest.responseType = 'json';

		//send the call to the server
		ajaxRequest.send();
	};

	//callback function defined and recieves data here
	function jsCallback(data){
		console.log(data);
		var htmlString = "<h3>JavaScript AJAX response text:</h3>";
		htmlString += JSON.stringify(data);
		var p = document.createElement("p");
		p.innerHTML = htmlString;
		document.getElementById("mydiv").appendChild(p);
	}


	//ajax using jQuery
	function jQueryAjax(){
		$.ajax("data/MegaCities.geojson", {
			dataType: "json",
			success: jQueryCallback
		})
	}

	function jQueryCallback(data){
		console.log(data);
		var htmlString = "<h3>jQuery AJAX response text </h3>";
		htmlString += JSON.stringify(data);
		$("#mydiv").append("<p>"+htmlString+"</p>");
	}

	window.onload = initialize

	//conclusion, use jQuery instead of straight javascript