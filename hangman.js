var inquirer = require("inquirer");

//var letter = require("./letter.js");

var randomPokemon = require('./pokemon.js');

// variable we will use to count how many times our questions have been asked
var remainingGuesses = 10;
var junkArray = [];

var getAnotherLetter = function() {
  var nextWord = new Word(randomPokemon);

      // checkForLetter method is run to see if letter is in the word
      nextWord.splitWord();

  // if statement - when guesses run out - you lose.
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

//======================================LETTER==================================================
// call getAnotherLetter for initial run
getAnotherLetter();

//var word = require("./word.js");

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

	//module.exports = Letter;

//======================================WORD==================================================

	//var randomPokemon = require('./pokemon.js');
 
function Word (randomPokemon) {
	this.pokemon = randomPokemon;

	}
console.log("from word.js " + randomPokemon);

Word.prototype.splitWord = function() {
	var gameLetters = randomPokemon.split("");
    var gameBlanks = gameLetters.map(i => ' _ ');
    console.log(gameBlanks.join(" "));
	};

	//module.exports = Word;

//======================================================================================