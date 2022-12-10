// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let result = []
    for(let i = 0 ; i < a.length ; i++){
        if(!result.includes(a[i])){
            result.push(a[i])
        }
    }
    return result
};

console.log(distinct([1]))
console.log(distinct([1,2]))
console.log(distinct([1,1,2]))