var reverseString = function() {};

reverseString = function(target) {
    var str = "";

    for (var i = target.length - 1; i >= 0; i--) {
        str += target[i];
    }

    return str;
};

module.exports = reverseString;
