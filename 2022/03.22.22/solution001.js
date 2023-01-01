// *substring returns strings with two values, start index and end index
// *substr returns strings with two values, start index, and how many characters to include

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

//PREP
//P:Remove the middle part of a string, if its even, return the middle two characters
//R: Return it
//E:

function getMiddle(str){
    //conditional, checking if the string is odd or even
    if (str.length % 2 === 1){
        return str.substr(str.length/2,1)
    }else if (str.length % 2 === 0){
        return str.substr(str.length/2-1,2)
    }
}