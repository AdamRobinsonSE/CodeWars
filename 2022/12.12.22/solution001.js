// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function valueCount(arr){
    let map = {}
    let result = false

    for(const nums of arr){
        if (map[nums]) {
            map[nums]++
        } else {
            map[nums] = 1
        }
    }

    for(prop in map){
        if (map[prop] > 1){
            result = true
        }
    }

    return result
}

console.log(valueCount([1,2,3,1])) // true
console.log(valueCount([1,2,3,4])) // false
console.log(valueCount([1,1,1,3,3,4,3,2,4,2])) // true