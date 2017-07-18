// 
// Trivia Game
// Maxwell Schmelling
// 

// MAIN
$( document ).ready(function() {
    LoadScreen(screens[0]);
});
// END MAIN



// GLOABAL VARIABLES

	// Background Color Rotation Variables
	var rotateBG = false;
	var colorIterator = 1;
	var bgColors = ["red", "blue", "yellow", "green"];
	var rotateBGinterval;
// END GLOBAL VARIABLES



// OBJECTS
var screens = [
	{id: 0, title: "main", rotateBG: true},
	{id: 1, title: "about", rotateBG: true},
	{id: 2, title: "name", rotateBG: true},
	{id: 3, title: "question", rotateBG: false},
	{id: 4, title: "result", rotateBG: false},
	{id: 5, title: "continue", rotateBG: true}]



var questions = [	
	{id: 0, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 1, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 2, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 3, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 4, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 5, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 6, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 7, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 8, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false},
	{id: 9, question: "What is the question?", answers: ["answer1","answer2","answer3","answer4"], correctAnswer: false}];
// END OBJECTS



// FUNCTION DEFINITIONS
function LoadScreen(_screen) {
	console.log(_screen.title);
	if(_screen.rotateBG) {
		rotateBGinterval = setInterval(RotateBackgroundColors, 1000);
	}
	else clearInterval(rotateBGinterval);
}



function RotateBackgroundColors() {
	console.log("rotating bg colors!");

	switch(colorIterator) {
		case 0:
			$("#bg-quad-1").css("background-color", bgColors[colorIterator]);
			$("#bg-quad-2").css("background-color", bgColors[colorIterator+1]);
			$("#bg-quad-3").css("background-color", bgColors[colorIterator+2]);
			$("#bg-quad-4").css("background-color", bgColors[colorIterator+3]);
			break;
		case 1:
			$("#bg-quad-1").css("background-color", bgColors[colorIterator]);
			$("#bg-quad-2").css("background-color", bgColors[colorIterator+1]);
			$("#bg-quad-3").css("background-color", bgColors[colorIterator+2]);
			$("#bg-quad-4").css("background-color", bgColors[colorIterator-1]);
			break;
		case 2:
			$("#bg-quad-1").css("background-color", bgColors[colorIterator]);
			$("#bg-quad-2").css("background-color", bgColors[colorIterator+1]);
			$("#bg-quad-3").css("background-color", bgColors[colorIterator-2]);
			$("#bg-quad-4").css("background-color", bgColors[colorIterator-1]);
			break;
		case 3:
			$("#bg-quad-1").css("background-color", bgColors[colorIterator]);
			$("#bg-quad-2").css("background-color", bgColors[colorIterator-3]);
			$("#bg-quad-3").css("background-color", bgColors[colorIterator-2]);
			$("#bg-quad-4").css("background-color", bgColors[colorIterator-1]);
			break;
		default: break;
	}
	// bgColors = ["red", "blue", "yellow", "green"];
	colorIterator++;
	if(colorIterator >= 4) colorIterator = 0;

}
// END FUNCTION DEFINITIONS








