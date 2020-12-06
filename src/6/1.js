let input = require("./input.js");

function countUniqueLetters(group){
    let letters = [];
    
    group.forEach(person => {
        for(let i = 0; i < person.length; i++){
            if(!letters.includes(person[i]))
                letters.push(person[i]);
        }
    });

    return letters.length;
}

function getSumUniqueLetters(input){
    let output = 0;
    input.forEach(group => {
        output += countUniqueLetters(group);
    });

    return output;
}

console.log(getSumUniqueLetters(input));