let input = require("./input.js");

function toDecimalArray(binary){
    let output = [];
    for(let i = 0; i < input.length; i++){
        output.push(parseInt(binary[i], 2));
    }

    return output;
}

input = toDecimalArray(input);
console.log(Math.max(...input));