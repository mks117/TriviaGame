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

	// game variables
	var correct = 0;
	var wrong = 0;
	var name = "Player";
	var questionInterval;
	var count = 0;
	var selectedAnswer;
// END GLOBAL VARIABLES



// OBJECTS
var screens = [
	{id: 0, title: "main", 		rotateBG: true},
	{id: 1, title: "about", 	rotateBG: true},
	{id: 2, title: "name", 		rotateBG: true},
	{id: 3, title: "question", 	rotateBG: false},
	{id: 4, title: "result", 	rotateBG: false},
	{id: 5, title: "continue", 	rotateBG: true}]

var questions = [	
	{id: 1, question: "The inventor Nikola Tesla was born on July 10th 1856 in what country?", answers: ["Poland","Serbia","United States","Russia"], correctAnswer: 1},
	{id: 2, question: "The first human-made object to land on the moon was launched by what country?", answers: ["China","United States","Germany","Soviet Union"], correctAnswer: 3},
	{id: 3, question: "The use of chopsticks originated in what country?", answers: ["China","Japan","Korea","Vietnam"], correctAnswer: 0},
	{id: 4, question: "What famous dictator was assasinated on the Ides of March?", answers: ["Hannibal","Caligula","Julius Ceaser","Nero"], correctAnswer: 2},
	{id: 5, question: "The Great Pyramid of Giza is located in what Egyptian city?", answers: ["Cairo","Giza","Alexandria","Luxor"], correctAnswer: 0},
	{id: 6, question: "What was the name of the U.S. research and development project to create nuclear weapons in WWII?", answers: ["Project Fatboy","Manhattan Project","Staten Project","Project MAD"], correctAnswer: 1},
	{id: 7, question: "What is the most popular board game of all time?", answers: ["Mahjong","Chess","Checkers","Go"], correctAnswer: 1},
	{id: 8, question: "In what year did Fidel Castro die?", answers: ["1984","1979","2016","2017"], correctAnswer: 2},
	{id: 9, question: "In what year did India gain its independence from Britain?", answers: ["1992","2003","1956","1947"], correctAnswer: 3},
	{id: 10, question: "In what year was the Declaration of Independence created?", answers: ["1776","1775","1812","1770"], correctAnswer: 0}];
// END OBJECTS



// FUNCTION DEFINITIONS
function LoadScreen(_screen) {
			clearInterval(rotateBGinterval);
			rotateBGinterval = setInterval(RotateBackgroundColors, 1500);
	switch(_screen.id) {
		// About
		case 0:
			console.log(_screen.title + " screen loaded")

			correct = 0;
			wrong = 0;
			count = 0;


			$("#screen-main").css({"display": "inline"})
			$("#screen-about").css({"display": "none"})
			$("#screen-result").css({"display": "none"})

			break;

		// About
		case 1:
			console.log(_screen.title + " screen loaded")

			$("#screen-main").css({"display": "none"})
			$("#screen-about").css({"display": "inline"})

			break;

		// Name
		case 2:
			console.log(_screen.title + " screen loaded")

			$("#screen-main").css({"display": "none"})
			$("#screen-name").css({"display": "inline"})

			break;

		// Question
		case 3:
			console.log(_screen.title + " screen loaded")

			console.log(count);

			$("#screen-name").css({"display": "none"})
			$("#screen-question").css({"display": "inline"})


			$("#lbl-question-number").text("Question #" + (questions[count].id));
			$("#lbl-question").text(questions[count].question);
			for (var i = 0; i < 4; i++) {
				$("#btn-answer"+i).text(questions[count].answers[i]);		
			}
			document.getElementById("btn-answer0").onclick = function() {
				console.log("click"); 
				selectedAnswer = 0
				if(selectedAnswer === questions[count].correctAnswer) {
					count++;
					correct++;
					console.log("correct!");
					LoadScreen(screens[3]);
				}

				else if(selectedAnswer !== questions[count].correctAnswer) {
					count++;
					wrong++;
					console.log("wrong!");
					LoadScreen(screens[3]);
				}
			};
			document.getElementById("btn-answer1").onclick = function() {
				console.log("click"); 
				selectedAnswer = 1;
				if(selectedAnswer === questions[count].correctAnswer) {
					count++;
					correct++;
					console.log("correct!");
					LoadScreen(screens[3]);
				}

				else if(selectedAnswer !== questions[count].correctAnswer) {
					count++;
					wrong++;
					console.log("wrong!");
					LoadScreen(screens[3]);
				}
			};
			document.getElementById("btn-answer2").onclick = function() {
				console.log("click"); 
				selectedAnswer = 2;
				if(selectedAnswer === questions[count].correctAnswer) {
					count++;
					correct++;
					console.log("correct!");
					LoadScreen(screens[3]);
				}

				else if(selectedAnswer !== questions[count].correctAnswer) {
					count++;
					wrong++;
					console.log("wrong!");
					LoadScreen(screens[3]);
				}
			};
			document.getElementById("btn-answer3").onclick = function() {
				console.log("click"); 
				selectedAnswer = 3;
				if(selectedAnswer === questions[count].correctAnswer) {
					count++;
					correct++;
					console.log("correct!");
					LoadScreen(screens[3]);
				}

				else if(selectedAnswer !== questions[count].correctAnswer) {
					count++;
					wrong++;
					console.log("wrong!");
					LoadScreen(screens[3]);
				}
			};

			if(count >= 9) {
				LoadScreen(screens[4]);
			};
				
			break;

		// Result
		case 4:
			console.log(_screen.title + " screen loaded")

			$("#screen-question").css({"display": "none"})
			$("#screen-result").css({"display": "inline"})

			$("#game-over-message").text("You got " + correct + " out of 9 questions right!")

			break;
		default: break;
	}
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

function Question() {
}
// END FUNCTION DEFINITIONS








