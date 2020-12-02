let input = require("./input.js");


function parse_input(input){
    let t_arr = input.split(": ");
    let outputStr = t_arr[1];

    t_arr = t_arr[0].split(" ");
    let outputChar = t_arr[1];

    t_arr = t_arr[0].split("-");
    let outputPos1 = Number(t_arr[0]);
    let outputPos2 = Number(t_arr[1]);

    return [outputPos1, outputPos2, outputChar, outputStr];
}

let output = 0;
for(let i = 0; i < input.length; i++){
    let target = parse_input(input[i]);
    let positionCount = 0;
    
    if(target[3][target[0]-1] === target[2])
        positionCount++;
    if(target[3][target[1]-1] === target[2])
        positionCount++;
    
    if(positionCount === 1)
        output++;
}

console.log(output);
