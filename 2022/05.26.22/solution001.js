// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
    //reverse the arr, so the indexes read left to right, opposed to binary reading right to left, also map through it math.pow all indexes that contain the element of 1
    let newArr = arr.reverse().map((e, i) => e === 1 ? Math.pow(2,i) : 0)
    //reduce through new arr to add up the values
    return newArr.reduce((acc,c) => acc + c, 0)
};

binaryArrayToNumber([0,0,0,1]) // 1
binaryArrayToNumber([0,0,1,0]) // 2
binaryArrayToNumber([1,1,1,1]) // 15
binaryArrayToNumber([0,1,1,0]) // 6