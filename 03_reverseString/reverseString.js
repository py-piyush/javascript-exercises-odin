const reverseString = function(s) {
    res = ''
    size = s.length
    for (let i = size - 1; i >= 0; i-- ){
        res += s[i]
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
