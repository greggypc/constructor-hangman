//Game words for Constructor Hangman
//Random word selected and exported


var arrayOfWords = ["PTERODACTYL", "JAVASCRIPT", "CANTALOUPE",
                  "ARCHIPELAGO", "BASKETBALL", "NOTEBOOK", "ONOMATOPOEIA"];
var randomNumber = Math.floor(Math.random() * arrayOfWords.length);
var currentGameWord = arrayOfWords[randomNumber];


//console.log(currentGameWord);
module.exports = currentGameWord;