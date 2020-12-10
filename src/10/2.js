const mergeSort = require("../mergeSort.js");
let input = require("./input.js");

function getOutput(input, i){
    let output = 0;

    if(i === input.length-1)
        return 1;
    if(cache[i] !== undefined)
        return cache[i];


    output += getOutput(input, i+1);
    if(input[i+2]-input[i] < 4)
        output += getOutput(input, i+2);
    if(input[i+3]-input[i] < 4)
        output += getOutput(input, i+3);
    cache[i] = output;
    
    return output;
}

input = mergeSort(input);
input = [0, ...input];
input.push(input[input.length-1]+3);

let cache = new Array(input.length).fill(undefined);

console.log(getOutput(input, 0));