const sumAll = function(a, b) {
    let sum_ = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }
    if (a < 0 || b < 0){
        return 'ERROR';
    }
    let small = a < b ? a : b ;
    let large = a + b - small ;
    for (let i = small; i<= large; i++){
        sum_ += i;
    }
    return sum_;
};

// Do not edit below this line
module.exports = sumAll;
