// Determine if letter will appear as '_' or as a letter

function Letter(ltr) {
	this.ltr = ltr;
	this.show = false;
	if (this.ltr === ' '){
		this.show = true;
	}
};

letter.prototype.printInfo = function() {
	if (this.show) {
		return this.ltr;
	}
	return "_ ";
};

module.exports = Letter;