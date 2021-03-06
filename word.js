//create an object representing the current word the user is attempting to guess

var Letter = require('./letter.js');
 
function Word(wrd) {
	this.wrd = wrd;
	this.letters = [];
	this.guessesMade = "";
	for (var i = 0; i < this.wrd.length; i++) {
		this.letters.push(new Letter(this.wrd[i]));
	}
};

Word.prototype.isComplete = function() {
	for (var i = 0; i < this.letters.length; i++) {
		if (!this.letters[i].show) return false;
	}
	return true;
};

Word.prototype.findLetter = function(letter) {
	var upperLetter = letter.toUpperCase();
	if (this.guessesMade.indexOf(upperLetter) != -1) {
		console.log("Already selected!");
	}
	this.guessesMade += upperLetter;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].ltr.toUpperCase() === upperLetter) {
		this.letters[i].show = true;
		} //else
	}
};

Word.prototype.toString = function() {
	var output = "";
	for (var i = 0; i < this.letters.length; i++) {
		output += this.letters[i].printInfo();
	}
	return output;
};

 module.exports = Word;

