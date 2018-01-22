//word.js contains code for selecting random word, splitting into letters and passing to letter.js


var randomPokemon = require('./pokemon.js');
 
function Word (randomPokemon) {
	this.pokemon = randomPokemon;

	}
console.log("from word.js " + randomPokemon);

Word.prototype.splitWord = function() {
	gameLetters = randomPokemon.split("");
    var gameBlanks = gameLetters.map(i => ' _ ');
    console.log(gameBlanks.join(" "));
	};


module.exports = Word;
