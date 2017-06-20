var inquirer = require("inquirer");

//Creating our global variables
var count = 0;
var cards = [];

//Creating a new constructor function for BasicCard
function BasicCard (front, back){
	this.front = front;
	this.back = back;
};

//Creating a new variable for a new card. This has the first question and first answer
var card1 = new BasicCard("Question question question", "Answer answer answer");
var card2 = new BasicCard("Question question question TWO", "Answer answer answer TWO");

//Pushing input from user into the cards array. 
cards.push(cards1);
cards.push(cards2);

function askBasic(){
	console.log("We're going to ask you 10 questions! See how many you can get right!");
	if (count < 10){
		inquirer.prompt([
		{

		}
	}
}