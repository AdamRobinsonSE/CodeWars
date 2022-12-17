// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    // array of vowels
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    // set the string to lowerCase so the vowels array will always work
    return string = string.split('')
                          .map(e => vowels.includes(e) ? e.toUpperCase() : e)
                          .join('')
};

console.log(swap('Hello World!'))