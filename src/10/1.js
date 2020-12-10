const mergeSort = require("../mergeSort.js");
let input = require("./input.js");

function getDifferencesSum(sortedInput){
    let output = [0, 0, 0];
    
    //add final adapter
    sortedInput.push(sortedInput[sortedInput.length-1]+3);
    //add wall outlet
    sortedInput = [0, ...sortedInput];

    for(let i = 1; i < sortedInput.length; i++){
        let diff = sortedInput[i]-sortedInput[i-1];
        output[diff-1]++;
    }

    return output;
}

input = mergeSort(input);

let sumDifference = getDifferencesSum(input);

console.log(sumDifference);
console.log(sumDifference[0]*sumDifference[2]);