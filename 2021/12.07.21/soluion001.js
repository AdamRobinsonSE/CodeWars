// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

//P: given a str of numbers
//R: return if the string is divisble by 3, try to avoid using %

function divisibleByThree(str){
    const number = str.split('').map(e => +e).reduce((acc,c) => acc + c, 0)
    return Number.isInteger(number / 3) ? true : false
};

//E:

console.log(divisibleByThree('123')) // true
console.log(divisibleByThree('8409')) // true
console.log(divisibleByThree('100853')) // false