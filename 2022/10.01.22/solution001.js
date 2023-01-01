// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

//PREP
//PARAMETERS: given a string of words

//RETURN: return a new string of just the first letters

//EXAMPLES
// "This Is A Test" ==> "TIAT"

//PSEUDO CODE
function makeString(s){
    let arr = s.split(' ') // splits s into an array at the spaces
    return arr.map((e) => e[0]).join('') // return the first character of each element, joined together
};

console.log(makeString('This Is A Test'))
