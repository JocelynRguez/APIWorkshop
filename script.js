/*

Script for API, will include pre-given code and students will add their own code as well.

*/

//Colors
var red = 'rgb(255, 86, 97)';
var purple = 'rgb(176, 118, 224)';
var green = 'rgb(86, 196, 132)';
var orange = 'rgb(247, 210, 118)';
var colors = [red, purple, green, orange];

/*
	TODO: Get name of user when page first loads.
*/
function getName(){

	//will change color of circle
	changeColor();
}

/*
	Changes the color of the circle that will change the page's background color once clicked.
*/
function changeColor(){
	var randomIndex = Math.floor(Math.random() * colors.length);
	var color =  colors[randomIndex];
	$('#circle').css('background-color', color );
}

/*
	TODO: Write the code for changing the background of the webpage.
*/
function changeBackground(){


	//will change color of circle
	changeColor();
}

/*
	TODO: Write AJAX request and display GIF on webpage.
*/
function searchGiphy(){

}

/*
	Functions to animate circle and get user's name.
*/

$('#circle').on('click', function(){
	changeBackground();
});

$(document).ready(getName());
