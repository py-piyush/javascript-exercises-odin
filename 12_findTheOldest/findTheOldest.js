const findTheOldest = function(arr) {
    arr.sort((person1, person2)=>{
        if (!("yearOfDeath" in person1)){
            person1.yearOfDeath = (new Date()).getFullYear();
        }
        if (!("yearOfDeath" in person2)){
            person2.yearOfDeath = (new Date()).getFullYear();
        }
        let a = person1.yearOfDeath - person1.yearOfBirth;
        let b = person2.yearOfDeath - person2.yearOfBirth;
        return a > b ? -1 : 1;
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
