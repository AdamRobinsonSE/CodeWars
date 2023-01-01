// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

// Given an array of integers. Are they always positive? floats? Will it ever be empty?

// Return every other element indexed, starting with index 1 (aka odd indexes)

function doubleEveryOther(a) {
    // map over the array and if the index is odd then return num * 2, else num
    return a.map((num, index) => index % 2 !== 0? num * 2 : num)
};

// Example
console.log(doubleEveryOther([1,2,3,4]))
