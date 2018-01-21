//word.js contains code for selecting random word, splitting into letters and passing to letter.js


var randomPokemon = require('./pokemon.js');
 
function Word (randomPokemon) {
	this.pokemon = randomPokemon;

	}
console.log("from word.js " + randomPokemon);

module.exports = Word;

// Now create a method for the constructor that would print all of the information contained within an object to the console. 
// More memory efficient than putting
//print function inside the object
// Programmer.prototype.printInfo = function() {
// 	console.log(this.name + "\n" + this.position + "\n" + this.age + "\n" + this.favLangauge);
// 		console.log("\n===================\n");
// 	};


 // var gameWords = ["PTERODACTYL", "JAVASCRIPT", "CANTALOUPE",
 //        "ARCHIPELAGO", "BASKETBALL", "NOTEBOOK", "ONOMATOPOEIA"];
 //    var thisGameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
 //    var gameLetters = thisGameWord.split("");
 //    var blanks = gameLetters.map(i => ' _ ');

 //    document.querySelector("#gameBlanks").innerHTML = blanks.join(" ");