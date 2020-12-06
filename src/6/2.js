let input = require("./input.js");

function countUniqueLetters(group){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let output = 0;

    alphabet.forEach(letter => {
        let count = true;

        for(let i  = 0; i < group.length; i++){
            if(!group[i].includes(letter)){
                count = false;
                break;
            }
        }

        if(count)
            output++;
    });

    return output;
}

function getSumAllYes(input){
    let output = 0;
    input.forEach(group => {
        output += countUniqueLetters(group);
    });

    return output;
}

console.log(getSumAllYes(input));