//Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string

function shortcut(str){
    let result = []
    let vowels = ['a','e','i','o','u']
    for (let i = 0 ; i < str.length ; i++){
        if(!vowels.includes(str[i])){
            result.push(str[i])
        }
    }return result.join('')
}

//Hide Kata Description
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

// OR //

function secondSquareOrSquareRoot(arr){
    return arr.map(e => {
        const n = Math.sqrt(e)
        return Number.isInteger(n) ? n : Math.pow(e,2)
    })
}

//*** No Loops Allowed ***
//You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
//Looking for more, loop-restrained fun? Check out the other kata in the series:

function check(arr,x){
    return arr.includes(x)
}

//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//For example: ["3:1", "2:2", "0:1", ...]
//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//if x > y: 3 points
//if x < y: 0 point
//if x = y: 1 point
//Notes:
//there are 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

function points(games){
    let result = []
    for(let i = 0 ; i < games.length ; i++){
        if(games[i][0] > games[i][2]){
            result.push(3)
        }else if(games[i][0] === games[i][2]){
            result.push(1)
        }
    }return result.reduce((acc,c) => acc + +c,0)
}

// OR // 

function points2(games){
    let total = 0
    games.map(e => {
        if (e[0] === e[2]){
            total += 1
        }else if (e[0] > e[2]){
            total += 3
        }
    })
    return total
}

////Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2))
};

//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//Example:
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toUpperCase(arr){
    return arr.forEach(e => e.toUpperCase())
}

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    //Code here
}

//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).
//Examples:
//Input: [0]
//Output: "even"
//Input: [0, 1, 4]
//Output: "odd"
//Input: [0, -1, -5]
//Output: "even"

function oddOrEven(array) {
    let sum = array.reduce((acc,c) => acc + c, 0)
    if(Math.abs(sum) % 2 === 0){
      return 'even'
    }else {
      return 'odd'
    }
 }