let input = require("./input.js");

function loopTillDouble(input){
    let acc = 0;

    let runnedIndexes = [];
    let i = 0

    while(true){
        if(!runnedIndexes.includes(i))
            runnedIndexes.push(i);
        else
            break;

        let command = input[i];
        if(command[0] === "acc"){
            acc += command[1];
            i++;
        }else if(command[0] === "jmp"){
            i += command[1]
        }else
            i++;
    }

    return acc;
}

console.log(loopTillDouble(input));