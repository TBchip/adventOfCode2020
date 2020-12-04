let input = require("./input.js");

function isDateValid(passport, id, min, max){
    try{
        let num = Number(passport[id]);
        if(num >= min && num <= max)
            return true;
        else
            return false;
    }catch{
        return false;
    }    
}
function isHeigthValid(passport){
    let height = passport["hgt"];
    if(height.slice(3, 5) === "cm"){
        height = Number(height.replace("cm", ""));
        if(height >= 150 && height <= 193)
            return true;
        else
            return false;
    }else if(height.slice(2, 4) === "in"){
        height = Number(height.replace("in", ""));
        if(height >= 59 && height <= 76)
            return true;
        else
            return false;
    }else
        return false;
}
function isHairValid(passport){
    let hair = passport["hcl"];
    let correctChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    if(hair[0] !== "#" || hair.length !== 7)
        return false;

    hair = hair.replace("#", "");

    for(let i = 0; i < 6; i++){
        if(!correctChars.includes(hair[i]))
            return false;
    }

    return true;
}
function isEyeValid(passport){
    let eye = passport["ecl"];
    let validChars = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

    if(validChars.includes(eye))
        return true;
    else
        return false;
}
function isPIDValid(passport){
    let pid = passport["pid"];
    let correctChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(pid.length !== 9)
        return false;
    
    for(let i = 0; i < 9; i++){
        if(!correctChars.includes(pid[i]))
            return false;
    }

    return true;
}

function isPassportValid(passport){
    let shouldExist = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    let valid = true;
    shouldExist.forEach(e => {
        if(passport[e] === undefined)
            valid = false;
    });

    if(!valid)
        return false;
    else if(!isDateValid(passport, "byr", 1920, 2002))
        return false;
    else if(!isDateValid(passport, "iyr", 2010, 2020))
        return false;
    else if(!isDateValid(passport, "eyr", 2020, 2030))
        return false;
    else if(!isHeigthValid(passport))
        return false;
    else if(!isHairValid(passport))
        return false;
    else if(!isEyeValid(passport))
        return false;
    else if(!isPIDValid(passport))
        return false;

    return true;
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