// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

//P: Given an integer
//R: Return the integer as a string, padded with 5 digits as `Value is ${value}`

function solution(value){
    let solution = String(value).padStart(5, '0')
    return `Value is ${solution}`
};

//E:

console.log(solution(5)) // 00005
console.log(solution(1204)) // 01204