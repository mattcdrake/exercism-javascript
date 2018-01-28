class pangram {
    constructor(sentence) {
        this.sentence = sentence;
    }

    isPangram() {
        if (this.sentence === "") {
            return false;
        }
    
        var alphabet = "abcdefghijklmnopqrstuvwxyz";

        this.sentence = this.sentence.toLowerCase();
    
        for (var i = 0; i < alphabet.length; i++) {
            if (!this.sentence.includes(alphabet.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}

module.exports = pangram;