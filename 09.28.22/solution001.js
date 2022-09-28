// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
// Inspired by https://adriann.github.io/programming_problems.html

//PARAMTERS: given two arrays, a & b

//RETURN: return one array, combing both arrays, alternating between each element

//EXAMPLES
// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

//PSEUDO CODE:

function mergeArrays(a, b) {
    let result = []
    if(a.length > b.length){
        for(let i = 0 ; i < a.length ; i++){
            result.push(a[i])
            result.push(b[i])
        }
    }else {
        for(let i = 0 ; i < b.length ; i++){
            result.push(a[i])
            result.push(b[i])
        }
    }
    return result.filter(e => e !== undefined)
};

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])) // [a, 1, b, 2, c, 3, d, 4, e, 5]
console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f'])) // [1, a, 2, b, 3, c, d, e, f]