const { includes } = require("./input.js");
let input = require("./input.js");

function toDecimalArray(binary){
    let output = [];
    for(let i = 0; i < input.length; i++){
        output.push(parseInt(binary[i], 2));
    }

    return output;
}

function getMissingSeat(seats){
    let missingSeats = [];

    let highestSeat = Math.max(...seats);
    for(let i = 0; i < highestSeat; i++){
        if(!seats.includes(i))
            missingSeats.push(i);
    }

    for(let i = 0; i < missingSeats.length; i++){
        if(seats.includes(missingSeats[i]-1) && seats.includes(missingSeats[i]+1))
            return missingSeats[i];
    }

    return -1;
}


input = toDecimalArray(input);
console.log(getMissingSeat(input));
