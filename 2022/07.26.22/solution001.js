// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//Parameters: Given an array with integers and floats
//Return: Return the one element that is unique

//Pseudo Code:
function findUniq(arr) {
    //sorted arr placing the unique arr at either first or last index
    let newArr = arr.sort((a, b) => a - b)
    //variables to hold first and last elements
    let first = newArr[0]
    let last = newArr[newArr.length - 1]
    //conditional to check which is unique
    if(newArr[1] === first){
        return last
    }else {
        return first
    }
};

//Examples:
console.log(findUniq([1,0,0])) // 1
console.log(findUniq([0,1,0])) // 1
console.log(findUniq([1,1,1,1,2,1,1])) // 2
  