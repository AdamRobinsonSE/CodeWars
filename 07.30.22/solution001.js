// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

//P: given a string
//R: return the string with a space between each letter

function spacify(str) {
    return str.split('').join(' ')
};

//E

console.log(spacify('hello world')) // h e l l o  w o r l d
console.log(spacify('12345')) // 1 2 3 4 5  