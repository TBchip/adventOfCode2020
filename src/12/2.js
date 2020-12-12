let input = require("./input.js");

function clambAnlge(angle){
    while(angle < 0){
        angle += 360;
    }
    while(angle >= 360){
        angle -= 360;
    }

    return angle;
}

function getManhattanPos(input){
    let shipX = 0;
    let shipY = 0;

    let wayX = 10;
    let wayY = 1;

    input.forEach(instruction => {
        if(instruction[0] === "X")
            wayX += instruction[1];
        else if(instruction[0] === "Y")
            wayY += instruction[1];
        else if(instruction[0] === "R"){
            if(instruction[1] === 90){
                let z = wayX;
                wayX = wayY;
                wayY = -z;
            }else if(instruction[1] === 180){
                wayX *= -1;
                wayY *= -1;
            }else if(instruction[1] === 270){
                let z = wayX;
                wayX = -wayY;
                wayY = z;
            }
        } else{
            shipX += wayX*instruction[1];
            shipY += wayY*instruction[1];
        }
    });

    return Math.abs(shipX) + Math.abs(shipY);
}

function parseInputArr(input){
    let newInput = [];

    input.forEach(e => {
        if(e[0] === "N" || e[0] === "S")
            newInput.push( ["Y", e[0] === "N" ? Number(e.slice(1)) : -Number(e.slice(1))] );
        else if(e[0] === "E" || e[0] === "W")
            newInput.push( ["X", e[0] === "E" ? Number(e.slice(1)) : -Number(e.slice(1))] );
        else if(e[0] === "L" || e[0] === "R")
            newInput.push( ["R", clambAnlge(e[0] === "R" ? Number(e.slice(1)) : -Number(e.slice(1)))] );
        else
            newInput.push( ["F", Number(e.slice(1))] );
    });

    return newInput;
}

input = parseInputArr(input);
let manhattanPos = getManhattanPos(input);

console.log(manhattanPos);