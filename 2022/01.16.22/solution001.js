// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

//P: given a positive integer, greater than or equal to 1
//R: return an array from 1 to the argument

function preFizz(n) {
    //empty array to push to
    let result = []
    //loop 
    for(let i = 1 ; i <= n ; i++){
      result.push(i)
    }
    //return result
    return result
};

//E: 

console.log(preFizz(5)) // [1,2,3,4,5]
