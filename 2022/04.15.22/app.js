//Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
//Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
}

//Create a function with two arguments that will return an array of the first(n) multiples of (x).
//example
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10]

function multiples(n,x){
    let result = []
    for (let i = 1 ; i <= x ; i++){
        result.push(n * i)
    }
}

//What is Object.assign? Use it to merge 3 objects into 1

//let user = {name: 'adam'}
//let permissions1 = {canView: true}
//let permissions2 = {canEdit: true}

Object.assign(user, permissions1,permission2)

//Create a method all which takes two params, and returns true if the function in the params returns true for every element in the sequence
//example
//all((1,2,3,4,5), greater_than_9) -> false

function test(a,b){
    return a.every(b)
}

//Write a function called repeatStr which repeats the given string string exactly n times.
//
//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeat(a,b){
    return b.repeat(a)
}

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//For example:
//summation(2) -> 3
//1 + 2
//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function sumnation (num) {
    let result = []
    for (let i = 0 ; i <= num ; i++){
        result.push(i)
    }
    return result.reduce((acc,c) => acc + c, 0)
}

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

//Examples:
//1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
//2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
//3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
//4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n,x,y){
    if (n % x === 0 && n % y === 0){
        return true
    }else {
        return false
    }
}