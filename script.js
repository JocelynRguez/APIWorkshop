/*

Script for API, will include pre-given code and students will add their own code as well.

*/


/*
	Get's name of user when page first loads.
*/
function getName(){
	var person = prompt('Please enter your name:');
	var node;
	if(person == null || person == ''){
		node = 'Stranger';
	} else {
		node = person;
	}
	$('#title').append(node);
}

$(document).ready(getName());
