
var hangman = require("./hangman.js");

var word = require("./word.js");

function Letter (letter) {
	this.letter = letter;
	}

// Now create a method for the constructor that would print all of the information contained within an object to the console. 
// More memory efficient than putting
//print function inside the object
Letter.prototype.checkForLetter = function() {
	console.log("checking if letter is in the word");
		console.log("\n===================\n");
	};

module.exports = Letter;