//
//
var gamewords = require("./gamewords.js");
var Word = require("./word.js");
//var Letter = require("./letter.js");
var inquirer = require("inquirer");

var remainingGuesses = 10;
var junkArray = [];
var gameWord = gamewords;
console.log(gameWord);


var myWord = new Word(gameWord);


var startGame = function() {
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= remainingGuesses) {
		console.log("Out of guesses!");
		return; //game over
	}
	inquirer.prompt([
      {
      type: "input",
      message: "Guess a letter!",
      name: "userGuess"
      }
    ]).then(function(response) {
    	var letter = letterInput.letter;
    	myWord.findletter(letter);
    		if (myWord.isComplete()) {
    			console.log("Winner!");
    			return; 
    		}
    	console.log("==================\n"); //take next guess
    	console.log("You have " + (remainingGuesses - myWord.guessesMade.length) + " guesses left");
    	startGame(); //recursive
    }
};

startGame(); //start

// var startGame = function() {
//   var nextWord = new Word(wrd);

//       // checkForLetter method is run to see if letter is in the word
//       nextWord.splitWord();

//   // if statement - when guesses run out - you lose.
//   if (remainingGuesses > 0) {
    
    // inquirer.prompt([
    //   {
    //   type: "input",
    //   message: "Guess a letter!",
    //   name: "userGuess"
    //   }
    // ]).then(function(response) {
//       // initializes the variable nextLetter to be a Letter object which will take
//       // in the user's answers (letter)
//       var nextLetter = new Letter(response.userGuess);

//       // checkForLetter method is run to see if letter is in the word
//       nextLetter.checkForLetter();
//       // deduct guesses remaining
//       remainingGuesses--;
//       // run the getAnotherLetter function - recursive
//       getAnotherLetter();
//     });
//   }
//   else {
//     console.log("out of turns - need a prompt here to ask to play again");
//   }
// };
