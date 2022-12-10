// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

//PREP

//PARAMETERS: given an array of integers

//Return: return the digits that are not present in the array as a string, sorted in ascending order


function unusedDigits(arr) {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    let digits = arr.join('')
    return numbers.filter(e => !digits.includes(e)).join('')
};

//EXAMPLES
console.log(unusedDigits([12, 34, 56, 78])) // '09'
console.log(unusedDigits([2015, 8, 26])) // '3479'