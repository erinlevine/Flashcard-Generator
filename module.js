

//Creating a new constructor function for BasicCard.
//Takes in two arguments: front, back. 
function BasicCard (front, back){
	this.front = front;
	this.back = back;
};

//Exporting this module to be used in another file. 
module.exports = BasicCard;