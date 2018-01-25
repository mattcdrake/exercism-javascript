function Cipher(key) {
    if (key === '') {
        throw new Error('Bad key');
    }
    else if (key && !key.match(/^[a-z]+$/)) {
        throw new Error('Bad key');
    }

    this.key = key || "aaaaaaaaaa";
}

Cipher.prototype.encode = function(text) {
    var out = '';
    var charcode = 0;

    for (var i = 0; i < text.length; i++) {
        if (!text[i].match(/^[a-zA-z]+$/)) {
            out += text[i];
        }
        else if (text[i].match(/^[A-Z]+$/)) {
            charcode = (((text.charCodeAt(i) - 65) + 
                    (this.key.charCodeAt(i % this.key.length) - 65)) % 26) + 65;
            out += (String.fromCharCode(charcode));
        }
        else {
            charcode = (((text.charCodeAt(i) - 97) + 
                    (this.key.charCodeAt(i % this.key.length) - 97)) % 26) + 97;
            out += (String.fromCharCode(charcode));
        }
    }

    return out;
};

Cipher.prototype.decode = function(cipher) {
    var out = '';
    var charcode = 0;

    for (var i = 0; i < cipher.length; i++) {
        if (!cipher[i].match(/^[a-zA-z]+$/)) {
            out += cipher[i];
        }
        else if (cipher[i].match(/^[A-Z]+$/)) {
            charcode = (((cipher.charCodeAt(i) - 65) + 26 - 
                    (this.key.charCodeAt(i % this.key.length) - 65)) % 26) + 65;
            out += (String.fromCharCode(charcode));
        }
        else {
            charcode = (((cipher.charCodeAt(i) - 97) + 26 - 
                    (this.key.charCodeAt(i % this.key.length) - 97)) % 26) + 97;
            out += (String.fromCharCode(charcode));
        }
    }

    return out;
};

module.exports = Cipher;
