const palindromes = function (s) {
s = s.replace(/[^\w]/g, '').toLowerCase();
size = s.length
for (let i = 0; i<Math.floor(size/2); i++){
    if (s[i] != s[size - i - 1]){
        return false;
    }
}
return true;

};

// Do not edit below this line
module.exports = palindromes;
