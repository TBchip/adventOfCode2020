let input = require("./input.js");

function isSumOf(list, targetSum){
    for(let i = 0; i < list.length; i++){
        for(let j = i; j < list.length; j++){
            if(list[i]+list[j] === targetSum)
                return true;
        }
    }

    return false;
}

function getFirstWrongNum(input){
    for(let i = 25; i < input.length; i++){
        if(!isSumOf(input.slice(i-25, i), input[i]))
            return input[i];
    }
}

console.log(getFirstWrongNum(input));