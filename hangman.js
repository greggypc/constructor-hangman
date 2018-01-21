var inquirer = require("inquirer");

var letter = require("./letter.js");



// variable we will use to count how many times our questions have been asked
var remainingGuesses = 10;

var getAnotherLetter = function() {
  // if statement to ensure that our questions are only asked five times
  if (remainingGuesses > 0) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
      type: "input",
      message: "Guess a letter!",
      name: "userGuess"
      }
    ]).then(function(response) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var nextLetter = new Letter(response.name);

      // printInfo method is run to show that the newguy object was successfully created and filled
      nextLetter.checkForLetter();
      // add one to count to increment our recursive loop by one
      count--;
      // run the askquestion function again so as to either end the loop or ask the questions again
      getAnotherLetter();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("out of turns - need a prompt here to ask to play again");
  }
};

// call askquestion to run our code
getAnotherLetter();
