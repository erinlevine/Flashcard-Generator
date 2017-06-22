//Requiring inquirer
var inquirer = require("inquirer");
//Requiring the BasicCard constructure from the module.js file. 
var BasicCard = require("./module.js");


//Creating our count and cards variables.
var count = 0;
var cards = [];



//Creating a new variable for each card. Based upon the arguments, it takes in a front and back argument.
var card1 = new BasicCard("Roquefort is a French blue cheese made from the milk of what animal?", "Sheep");
var card2 = new BasicCard("What fast food chain has the most franchises?", "Subway");
var card3 = new BasicCard("'Granny Smith' is a popular type of what fruit?", "Apple");
var card4 = new BasicCard("Dijon mustard originated in the city of Dijon, which is located in what country?", "France");
var card5 = new BasicCard("In what year did McDonalds start selling breakfast items?", "1972");
var card6 = new BasicCard("What is a colloquial term for a rotating tray often placed on a table to aid in distributing food?", "Lazy Susan");
var card7 = new BasicCard("What popular soda was originally created as a mixer for whiskey?", "Mountain Dew");
var card8 = new BasicCard("What was the original flavor of the filling in Twinkies?", "Banana");
var card9 = new BasicCard("Sauerkraut is made from what finely diced vegetable?", "Cabbage");
var card10 = new BasicCard("In what type of restaurant would you typically find the condiment wasabi?", "Japanese");

//Pushing the value of each card into the cards array. 
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);
cards.push(card7);
cards.push(card8);
cards.push(card9);
cards.push(card10);

//Creating a new function called askBasic. Has a loop for 10 questions where it pulls the front of the card and uses it as a prompt. 
var askBasic = function(){
	if (count < 10){
		inquirer.prompt([
		{
			type: "input",
			message: cards[count].front,
			name: "response"

		}
		//Once we receive a response, this is executed. A basic if statement.
		]).then(function(answers) {
			if(answers.response == cards[count].back){
			console.log("You got the question right!");
		}
			else{
				console.log("You got the question wrong!");
			}
		//Increases the count so the loop can continue.
		count++;
		//Function starts again. 
		askBasic();
	});
			

}
}
//Function begins upon user starting node command. 
askBasic();








