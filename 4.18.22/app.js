//write a function that swaps the two elements in an array with let temp = arr[0]
//example
//[1,2] = [2,1]

function swap(arr){
    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
    return arr
}

//Create a function that abbreviates a name into something like this
//Adam Robinson // A.R

function abbrev(str){
    return str.split(' ')
    .map((e,i) => e[0].toUpperCase())
    .join('.')
}

// Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string

function remove(str){
    let vowels = ['a','e','i','o','u']
    let result = []
    for (let i = 0 ; i < str.length ; i++){
        if (!vowels.includes(str[i])){
            result.push(str[i])
        }
    }return result.join('')
}

//Write a function that converts a string to a number, show three differeny ways

function convert(str){
    return +str // Number(str) // parseInt(str)
}

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
    let result = [];
    for(let i = 1 ; i <= x ; i++){
        result.push(n * i)
    }return result
}

//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased

function camelize(str){
    return str.split('-')
    .map((e,i) => i === 0 ? i : e[0].toUpperCase() + e.slice(1))
    .join('')
}

//Kata Task
//I have a cat and a dog.
//I got them at the same time as kitten/puppy. That was humanYears years ago.
//Return their respective ages now as [humanYears,catYears,dogYears]
//NOTES:
//humanYears >= 1
//humanYears are whole numbers only
//Cat Years
//15 cat years for first year
//+9 cat years for second year
//+4 cat years for each year after that
//Dog Years
//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears){
    let catYears = 0
    let dogYears = 0

    for (let i = 1 ; i <= humanYears ; i++){
        if (humanYears === 1){
            catYears = 15
            dogYears = 15
        }else if (humanYears === 2){
            catYears = 24
            dogYears = 24
        }else if (humanYears > 2){
            catYears = 24 +(humanYears - 2) * 4
            dogYears = 24 +(humanYears - 2) * 5
        }
    }return [humanYears, catYears, dogYears]
}

//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
//Let's look at a few examples:
//array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
    if (n < array.length){
        return Math.pow(array[n],n)
    }else {
      return -1
    }
  }

//If/else syntax debug
//While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive (health) {
    return health > 0 ? true : false
}

//Return the Nth Even Number
//Example(Input --> Output)
//1 --> 0 (the first even number is 0)
//3 --> 4 (the 3rd even number is 4 (0, 2, 4))
//100 --> 198
//1298734 --> 2597466

function nthEven(n){
    return n*2 - 2
}

//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//Task
//Implement a function named
//generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
//generateRange(1, 10, 3) // should return array of [1,4,7,10]
//Note
//min < max
//step > 0
//the range does not HAVE to include max (depending on the step)
//Suggest kata description edits

function generateRange(min, max, step){
    let result = []
    for (let i = min ; i <= max ; i += step){
        result.push(i)
    }return result
}