//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//examples

//n = 0  ==> [1]        # [2^0]
//n = 1  ==> [1, 2]     # [2^0, 2^1]
//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powers(n){
    let result = [] // empty arrray
    for (let i = 0 ; i < n ; i++){
        result.push(Math.pow(2,i)) // loops through while it is less than n, and pushes it to the empty array
    }return result
}

//Description:
//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//Your function will be tested with pre-made examples as well as random ones.
//If you can, try writing it in one line of code.

function differenceOfCubes(cube1,cube2){
    let volume1 = cube1.reduce((acc,c) => acc * c,1) // gets the volume of cube1
    let volume2 = cube2.reduce((acc,c) => acc * c,1) // gets the volume of cube2
    return Math.abs(volume1 - volume2) // gets the absolute value of volume1 - volume2
}

//Create a function that abbreviates a name into something like this

// Adam Robinson => A.R

function abbrev(str){
    return str.split(' ') // splits the string into an array [adam, robinson]
    .map(e => e[0].toUpperCase()) // creates new array of [A,R]
    .join('.') // joins them together to make A.R
}

//Create a function to remove the first & last character of a string

function removeFirstAndLast(str){
    return str.split('') // splits string into an array ['a','d','a','m']
    .slice(1, str.length - 1) // returns shall copy of array from index 1 to 3 ['d','a']
}

//Write a program that takes in an array of birds, and filters out any that are geese

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(e => e !== geese.includes(e))
  };

//Write a function that converts a string to a number, show three differeny ways

function convert(str){
    return Number(str) // + str // parseInt(str)
}

//Description:
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast,dish){
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false
}