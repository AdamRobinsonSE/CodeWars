// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


//PREP
//P: given a string as a parameter
//R: return the words reversed, not the order of the words
//E:

function reverseWords(str) {
    return str.split('').reverse().join(' ').split(' ').reverse().join(' ')
};

reverseWords('apple') // 'elppa'
reverseWords('double spaced words') // 'elbuod decaps sdrow'