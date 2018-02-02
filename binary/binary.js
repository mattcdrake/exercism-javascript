var Binary = function(binaryString) {
    this.binaryString = binaryString;
};

Binary.prototype.toDecimal = function() {
    if (!this.binaryString.match(/^[01]+$/)) {
        return 0;
    }

    var runningTotal = 0;
    var exponent = 0;

    for (var i = this.binaryString.length; i > 0; i--) {
        if (this.binaryString.charAt(i - 1) === "1") {
            runningTotal += Math.pow(2, exponent);
        }
        exponent++;
    }

    return runningTotal;
};

module.exports = Binary;
