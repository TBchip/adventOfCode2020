let input = require("./input.js");

function getFirstDeparture(input){
    let first = [0, Infinity];

    input[1].forEach(bus => {
        if(bus-input[0]%bus < first[1])
            first = [bus, bus-input[0]%bus];
    });

    return first;
}

let firstDep = getFirstDeparture(input);
console.log(firstDep[0] * firstDep[1]);