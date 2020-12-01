function mergeSort(input){
    if(input.length === 1)
        return input;

    let arr1 = mergeSort(input.slice(0, Math.floor(input.length/2)));
    let arr2 = mergeSort(input.slice(Math.floor(input.length/2), input.length));
    
    let output = []
    while(arr1.length !== 0 || arr2.length !== 0){
        if(arr1.length === 0)
            output.push(arr2.shift());
        else if(arr2.length === 0)
            output.push(arr1.shift());
        else{
            if(arr1[0] < arr2[0])
                output.push(arr1.shift());
            else
                output.push(arr2.shift());
        }
    }

    return output;
}

module.exports = mergeSort;