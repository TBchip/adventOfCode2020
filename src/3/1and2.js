let input = require("./input.js");

function clambCol(input, max){
    while(input >= max){
        input -= max;
    }

    return input;
}

function getTrees(input, yMove, xMove){
    let cols = input[0].length;
    let rowTarget = input.length - 1;

    let curRow = 0;
    let curCol = 0;
    
    let trees = 0;
    while(curRow !== rowTarget){
        curRow += yMove;
        curCol += xMove;

        curCol = clambCol(curCol, cols);

        if(input[curRow][curCol] === "#")
            trees++;
    }

    return trees;
}

let trees = [
    getTrees(input, 1, 1),
    getTrees(input, 1, 3),
    getTrees(input, 1, 5),
    getTrees(input, 1, 7),
    getTrees(input, 2, 1)
]

let answer = trees[0]*trees[1]*trees[2]*trees[3]*trees[4];
console.log(answer);