// Create a function that takes a string and an integer (n).
// The function should return a string that repeats the input string n number of times.
// If anything other than a string is passed in you should return "Not a string"
// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

//PREP
//P: Given two parameters, If one is a string, and the other is a number, repeat the string the number amount of times.
    //Number always positive? integer? float?
    //
//R: Returning the string X times
//E:

function repeatString(str, num){
    //tenary operator
    //check if string is a string, return string repeated, or not a string
    return typeof str === 'string' ? str.repeat(n) : 'Not a string'
};

repeatString('hello',5)
repeatString(true, 5)
