const removeFromArray = function(numbers, ...args) {
    for (let arg of args){
        idx = numbers.indexOf(arg);
        if (idx === -1) {
            continue;
        }
        numbers.splice(idx,1);
    }
    return numbers;

};

// Do not edit below this line
module.exports = removeFromArray;
