// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//PREP
//P: Given an array of integers
//R: Return an array that fills in the missing numbers, so the new array is entirely consecutive from its minimum to maximum
//E:

function pipeFix(numbers){
    //define new array to push numbers into
    let result = [] 
    //loop through existing array and push i into it if it doesn't already include i
    for (let i = numbers[0] ; i < numbers[numbers.length - 1] ; i++){
        if (!result.includes[numbers[i]]){
            result.push(i) 
        }
    }
    //return result
    return result
}

pipeFix([1,2,3,4,5,6,8,9]) // [1,2,3,4,5,6,7,8,9]
pipeFix([1,2,3,12]) // [1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([6,9]) // [6,7,8,9]