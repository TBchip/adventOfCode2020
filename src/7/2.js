let input = require("./input");

function parseInput(input){
    let output = {};

    for(let i = 0; i < input.length; i++){
        input[i] = input[i].split(" bags contain ");
        let name = input[i][0];
        input[i] = input[i][1];
        name = name.split(" ").join("");

        input[i] = input[i].replace(".", "");
        input[i] = input[i].split(" bags").join("");
        input[i] = input[i].split(" bag").join("");
        input[i] = input[i].split(", ");
        let shouldContain = [];
        for(let j = 0; j < input[i].length; j++){
            let bag = input[i][j].split(" ");
            if(!bag.includes("other"))
                shouldContain.push([bag[0], bag.slice(1, bag.length).join("")]);
        }
        
        let obj = {}
        obj["name"] = name;
        obj["shouldContain"] = shouldContain;
        obj["containedIn"] = [];

        output[name] = obj;
    }

    for(key in output){
        for(let i = 0; i < output[key]["shouldContain"].length; i++){
            output[output[key]["shouldContain"][i][1]]["containedIn"].push(key);
        }
    }

    return output;
}

function totalBagsNeeded(input, bagName){
    if(input[bagName]["shouldContain"].length === 0)
        return 1;

    let total = 1;
    for(let i = 0; i < input[bagName]["shouldContain"].length; i++){
        total += input[bagName]["shouldContain"][i][0] * totalBagsNeeded(input, input[bagName]["shouldContain"][i][1]);
    }

    return total;
}

input = parseInput(input);
// -1 because we shouldnt count original shinygold bag
console.log(totalBagsNeeded(input, "shinygold") - 1);