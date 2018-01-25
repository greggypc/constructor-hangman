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
	var lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		return "Already selected!";
	}
	this.guessesMade += lowerLetter;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].ltr.toLowerCase() === lowerLetter) {
		this.letters[i].show = true;
		}	
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

