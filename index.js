//
//
var gamewords = require("./gamewords.js");
var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

var remainingGuesses = 15;
var gameWord = gamewords;
//var letterGuessed;
//console.log(gameWord);
exports.letter;


var myWord = new Word(gameWord);


var makeAGuess = function() {
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= remainingGuesses) {
		console.log("Out of guesses!");
		playAgain(); 
	}
	inquirer.prompt([
      {
      type: "input",
      message: "Guess a letter!",
      name: "userGuess"
      }
    ]).then(function(response) {
    	var letter = response.userGuess;
    	myWord.findLetter(letter);
    		if (myWord.isComplete()) {
    			console.log("Winner!");
    			playAgain(); 
    		}
    	//console.log("==================\n"); //take next guess
    	console.log("\nYou have " + (remainingGuesses - myWord.guessesMade.length) + " guesses left.\n");
    	makeAGuess(); //recursive
    });
};

var playAgain = function() {
	inquirer.prompt([
      {
      type: "confirm",
      message: "Play again?",
      name: "confirm"
      }
    ]).then(function(response) {
    	if (response.confirm === true) {
    		makeAGuess();
    	}else {
    		console.log("Thanks for playing! Bye!");
    		return;
    	}
    });
}

makeAGuess(); //start

