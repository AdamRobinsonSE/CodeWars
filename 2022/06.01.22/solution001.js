// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//P: Given a string
//R: Return the string with any 5 or more letter words reversed

//P:

function spinWords(string){
    //split string into an array at spaces
    const newArr = string.split(' ')
    return newArr.map((e,i) => e.length >= 5 ? newArr[i].split('').reverse().join('') : e).join(' ')
};

//E:

console.log(spinWords('Welcome')) // 'emocleW'
console.log(spinWords('Hey fellow warriors')) // 'Hey wollef sroirraw'
console.log(spinWords('This is a test')) // 'This is a test'
console.log(spinWords('This is another test')) // 'This is rehtona test'

