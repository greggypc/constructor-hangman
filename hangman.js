var inquirer = require("inquirer");

var letter = require("./letter.js");



// variable we will use to count how many times our questions have been asked
var remainingGuesses = 10;

var getAnotherLetter = function() {
  // if statement to ensure that our questions are only asked five times
  if (remainingGuesses > 0) {
    
    inquirer.prompt([
      {
      type: "input",
      message: "Guess a letter!",
      name: "userGuess"
      }
    ]).then(function(response) {
      // initializes the variable nextLetter to be a Letter object which will take
      // in the user's answers (letter)
      var nextLetter = new Letter(response.userGuess);

      // checkForLetter method is run to see if letter is in the word
      nextLetter.checkForLetter();
      // deduct guesses remaining
      remainingGuesses--;
      // run the getAnotherLetter function - recursive
      getAnotherLetter();
    });
  }
  else {
    console.log("out of turns - need a prompt here to ask to play again");
  }
};

// call getAnotherLetter for initial run
getAnotherLetter();

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