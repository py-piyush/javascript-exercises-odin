const repeatString = function(s, num) {
    res = '';
    if (num < 0){
        return 'ERROR';
    }
    for(i=0; i<num; i++){
        res += s;
    }
    return res;

};

// Do not edit below this line
module.exports = repeatString;
