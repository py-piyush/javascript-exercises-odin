const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum_ = arr.reduce((sum_, num)=> sum_ + num, 0);
  return sum_
};

const multiply = function(arr) {
  let ans = arr.reduce((prod, num) => prod*num, 1);
  return ans;
};

const power = function(a, pow) {
	let ans = 1;
  for(let i = 1; i<=pow; i++){
    ans *= a;
  }
  return ans;
};

const factorial = function(num) {
	if (num == 0){
    return 1;
  }
  return num*factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
