let input = require("./input.js");


function parse_input(input){
    let t_arr = input.split(": ");
    let outputStr = t_arr[1];

    t_arr = t_arr[0].split(" ");
    let outputChar = t_arr[1];

    t_arr = t_arr[0].split("-");
    let outputMin = Number(t_arr[0]);
    let outputMax = Number(t_arr[1]);

    return [outputMin, outputMax, outputChar, outputStr];
}

let output = 0;
for(let i = 0; i < input.length; i++){
    let target = parse_input(input[i]);
    let a = "asdf";
    let occurences = target[3].split(target[2]).length - 1;

    if(target[0] <= occurences && occurences <= target[1]){
        output++;
    }
}

console.log(output);
