// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//PREP

//Parameters: given an array of integers

//Return: return the two highest values in a new array, highest to lowest. If theres only one high value, only return that element once. If the array is emptry, return []

//Examples:
//console.log(twoHighest([1,2,3,4,5])) // [4,5]
//console.log(twoHighest([])) // []
//console.log(twoHighest([1,1,1])) // [1]

//PseudoCode:

function twoHighest(arr) {
    let uniqueArr = [...new Set(arr)].sort((a,b) => b - a) // gives us a new array of unique values, sorted in descending order
    if(uniqueArr.length < 2) return uniqueArr // returns single value if array only contains 1 element
    if(uniqueArr.length < 1) return [] // returns empty array if array is empty
    return [uniqueArr[0],uniqueArr[1]]
};

console.log(twoHighest([1,2,3,4,5])) // [4,5]
console.log(twoHighest([])) // []
console.log(twoHighest([1,1,1])) // [1]