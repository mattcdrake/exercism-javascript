var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (inputstr) {
    var outstr = "";

    for (var i = 0; i < inputstr.length; i++) {
        switch(inputstr[i]) {
            case 'C':
                outstr += 'G';
                break;
            case 'G':
                outstr += 'C';
                break;
            case 'A':
                outstr += 'U';
                break;
            case 'T':
                outstr += 'A';
                break;
            default:
                throw Error('Invalid input');
        }
    }

    return outstr;
}

module.exports = DnaTranscriber;
