//initialize city function called when the script loads
function initialize(){
	cities(); //calls the city function, defined below
};


//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div created in index.html
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    //calls the function that will add a new column onto our table
    addColumns(cityPop);
    //calls the function that makes our table interactive (click events, etc)
    addEvents();
};

//function to create a new column with information about size of cities
function addColumns(cityPop){
    //iterates through and adds a table row for each instance of cityPop
    $("tr").each(function(i){
    	//specifies that if the counter is in the header, to run through this code:
    	if (i == 0){
    		//adds the title "City Size" to the column header
    		$(this).append('<th>City Size</th>');
    	//if the counter isn't in the header, do the following:
    	} else {
    		//defines the variable describing the size of the city based on the population
    		var citySize;
    		//if population is less than 100,000 set variable city size equal to small
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		//if population is less than 500,000 set variable city size equal to medium
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		//if population is anything else(read: over 500,000) set variable city size equal to large
    		} else {
    			citySize = 'Large';
    		};
    		//add the citySize values to the table under the "City Size" heading
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};
//
function addEvents(){
	//activates the function when you mouse over the table
	$('table').mouseover(function() {
		//creates the variable color and starts a loop that prints to the console
		var color = "rgb(";
		//for loop that says for i (mouseover) less than three, add one and loop through to do the following:
		for (var i=0; i<3; i++){
			//creates variable called random that finds a random number, multiplies it by 255, then rounds it
			//to the nearest integer (to fit the rgb color scale)
			var random = Math.round(Math.random() * 255);
			//
			color += random;
			//specifies that if you mouseover less than two times, to add a comma to separate values
			//this continues the list because for rbg, you need 3 numbers, for each color (red, blue, and green)
			if (i<2){
				color += ",";

			//if i (mouseovers) is greater than 2, the third and final color is added and then a closing
			//bracket is added to finalize the rbg color scheme
			} else {
				color += ")";
		};
		//this uses css to change the color of the text in the table
		$(this).css('color', color);
	}});
	//function that alerts the user when clicked
	function clickme(){
		//creates a pop-up that tells the user it was clicked
		alert('Hey, you clicked me!');
	};
	//attaches event handler clickme when the table is clicked
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);