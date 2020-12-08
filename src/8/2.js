let input = require("./input.js");

function makeTerminateable(input){
    for(let i = 0; i < input.length; i++){
        let newInput = JSON.parse(JSON.stringify(input));

        if(newInput[i][0] === "acc")
            continue;
        else if(newInput[i][0] === "jmp")
            newInput[i][0] = "nop";
        else
            newInput[i][0] = "jmp"

        let runnedIndexes = [];
        let j = 0
        while(true){
            if(!runnedIndexes.includes(j))
                runnedIndexes.push(j);
            else
                break;
    
            let command = newInput[j];
            if(command[0] === "acc"){
                j++;
            }else if(command[0] === "jmp"){
                j += command[1]
            }else
                j++;
            
            if(j === newInput.length)
                return newInput;
        }
    }
}

function getAcc(input){
    let acc = 0;

    let i = 0
    while(i !== input.length){
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

let newInput = makeTerminateable(input);
console.log(getAcc(newInput));