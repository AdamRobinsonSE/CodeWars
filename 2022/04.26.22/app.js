//Introduction
//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//Task
//Given a year, return the century it is in.
//Examples
//1705 --> 18
//1900 --> 19
//1601 --> 17
//2000 --> 20

function findYear(n){
    return Math.ceil(n/100)
}

//Write a method, that will get an integer array as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array like this:
//If the number has an integer square root, take this, otherwise square the number.
//Example
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]
//Notes
//The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    let result = []
    for (let i = 0 ; i < array.length ; i++){
        if (Number.isInteger(Math.sqrt(array[i]))){
            result.push(Math.sqrt(array[i]))
        }else {
            result.push(array[i] * array[i])
        }
    }return result
}

//Hide Kata Description
//*** No Loops Allowed ***
//
//You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
//
//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
//
//Looking for more, loop-restrained fun? Check out the other kata in the series:

function check(a,b){
    return a.includes(b);
  };

