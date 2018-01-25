//Each letter object should either display an underlying character, 
//or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter

function Letter(ltr) {
	this.ltr = ltr;
	this.show = false;
	if (this.ltr === ' '){
		this.show = true;
	}
};

//log a '_' for every letter
Letter.prototype.printInfo = function() {
	if (this.show) {
		return this.ltr;
	}
	return "_ ";
};

module.exports = Letter;