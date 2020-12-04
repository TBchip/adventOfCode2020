let input = require("./input.js");

function isPassportValid(passport){
    let shouldExist = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    let valid = true;
    shouldExist.forEach(e => {
        if(passport[e] === undefined)
            valid = false;
    });

    return valid;
}

function countValidPassports(passportList){
    let output = 0;
    for(let i = 0; i<passportList.length; i++){
        if(isPassportValid(passportList[i]) === true)
            output++;
    }

    return output;
}

console.log(countValidPassports(input));