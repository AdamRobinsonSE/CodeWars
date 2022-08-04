// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//P: given an array of integers
//R: return the integer that appears an odd amount of times

function findOdd(A) {
    //set up an empty obj to put results in
    let obj = {}
    //loop through array, and use it to count how many times an element appears
    A.forEach(e => {
        obj[e] = (obj[e] || 0) + 1
    })
    //loop through the object and use if block to see if its odd
    for(prop in obj){
        if (obj[prop] % 2 !== 0){
            return +prop
        }
    }
};

//E:

console.log(findOdd([7])) // 7 because it occurs 1 time, which is odd
console.log(findOdd([0])) // 0, because it occurs 1 time, which is odd
console.log(findOdd([1,1,2])) // 2, because it occurs 1 time, which is odd
console.log(findOdd([0,1,0,1,0])) // 0, because it occurs 3 times, which is odd