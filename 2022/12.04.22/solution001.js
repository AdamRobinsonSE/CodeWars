// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

function dup(s) {
    // map through each string in the array
    return s.map(word => {
        // split each word into individual letters
        return word.split('').filter((letter,i,arr) => {
            // filter through and remove letters that equal the letter next to it
            return letter !== arr[i + 1]
        }).join('')
    })
};

console.log(dup(["kelless","keenness"])) // ["keles","kenes"]