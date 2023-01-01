// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//P: Given a string
//R: return a string replacing any vowel with an '!'



function replace(s){
    //set up an array of vowels
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    //turn string into an array
    return s.split('')
    //map through it to check if vowels includes the element
    .map((e,i) => vowels.includes(e) ? '!' : e)
    //join it back together
    .join('')
};

//E:
console.log(replace("Hi!")) // "H!!"
console.log(replace("!Hi! Hi!")) // "!H!! H!!"
console.log(replace("aeiou")) // "!!!!!"
console.log(replace("ABCDE")) // "!BCD!"