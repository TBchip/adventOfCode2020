let input = require("./input.js");

function shouldChange(input, i, j){
    if(input[i][j] === "L"){
        for(let k = -1; k < 2; k++){
            let r = input[i+k];
            if(r !== undefined){
                for(let l = -1; l < 2; l++){
                    if(k === 0 && l === 0)
                        continue;

                    if(r[j+l] === "#")
                        return false;
                }
            }
        }
    }

    if(input[i][j] === "#"){
        let count = 0;
        for(let k = -1; k < 2; k++){
            let r = input[i+k];
            if(r !== undefined){
                for(let l = -1; l < 2; l++){
                    if(k === 0 && l === 0)
                        continue;

                    if(r[j+l] === "#")
                        count++;
                }
            }
        }

        if(count < 4)
            return false;
    }

    return true;
}

function simulateTillStop(input){
    let hasChanged = true;
    while(hasChanged){
        let oldInput = JSON.parse(JSON.stringify(input));
        hasChanged = false;

        for(let i = 0; i < input.length; i++){
            for(let j = 0; j < input[i].length; j++){
                if(input[i][j] === ".")
                    continue;

                if(shouldChange(oldInput, i, j)){
                    hasChanged = true;

                    if(input[i][j] === "L")
                        input[i] = input[i].substring(0, j) + "#" + input[i].substring(j+1);
                    else
                        input[i] = input[i].substring(0, j) + "L" + input[i].substring(j+1);
                }
            }
        }
    }

    return input;
}

function countOccupied(input){
    let count = 0;
    input.forEach(e => {
        count += (e.match(/#/g) || []).length;
    });

    return count;
}


input = simulateTillStop(input);

console.log(countOccupied(input));