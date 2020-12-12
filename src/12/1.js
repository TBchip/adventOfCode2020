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
    let xPos = 0;
    let yPos = 0;
    let rot = 0;
    
    input.forEach(instruction => {
        if(instruction[0] === "X")
            xPos += instruction[1];
        else if(instruction[0] === "Y")
            yPos += instruction[1];
        else if(instruction[0] === "R"){
            rot += instruction[1];
        } else{
            rot = clambAnlge(rot);
            if(rot === 0)
                xPos += instruction[1];
            else if(rot === 90)
                yPos -= instruction[1];
            else if(rot === 180)
                xPos -= instruction[1];
            else
                yPos += instruction[1];
        }
    });

    return Math.abs(xPos) + Math.abs(yPos);
}

function parseInputArr(input){
    let newInput = [];

    input.forEach(e => {
        if(e[0] === "N" || e[0] === "S")
            newInput.push( ["Y", e[0] === "N" ? Number(e.slice(1)) : -Number(e.slice(1))] );
        else if(e[0] === "E" || e[0] === "W")
            newInput.push( ["X", e[0] === "E" ? Number(e.slice(1)) : -Number(e.slice(1))] );
        else if(e[0] === "L" || e[0] === "R")
            newInput.push( ["R", e[0] === "R" ? Number(e.slice(1)) : -Number(e.slice(1))] );
        else
            newInput.push( ["F", Number(e.slice(1))] );
    });

    return newInput;
}

input = parseInputArr(input);
let manhattanPos = getManhattanPos(input);

console.log(manhattanPos);