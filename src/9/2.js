let input = require("./input.js");


function getContinousSetSum(input, targetSum){
    for(let i = 0; i < input.length; i++){
        let smallest = input[i];
        let largest = input[i];

        let sum = input[i];
        let j = 0;
        while(sum < targetSum){
            j++;
            sum += input[i+j];

            smallest = Math.min(smallest, input[i+j]);
            largest = Math.max(largest, input[i+j]);
        }

        if(sum === targetSum)
            return [smallest, largest, smallest+largest];
    }

    return "None found";
}


console.log(getContinousSetSum(input, 26134589));