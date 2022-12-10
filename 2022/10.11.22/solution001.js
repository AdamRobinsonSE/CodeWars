// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Paramters: given a string

// Return: return a new string in weird case, even character index items to uppercase, odd to lower case, each word starts over as a 0 index

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// Pseudo Code
function toWeirdCase(string){
    return string.split(' ').map(word => {  // split split to eliminate spaces
        return word.split('').map((letter,index) => { // split string into individual letters
            return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase() // if index is even, letter to upper case, if not, lower
        }).join('') // join letters together in array
    }).join(' ') // join letters together as a string
};

console.log(toWeirdCase('String'))
console.log(toWeirdCase('Weird string case'))