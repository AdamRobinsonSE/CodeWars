// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(string) {
    if (string.length < 2 || string.length > 100) return 'invalid string';

    string = string.split('')
    .filter((e,i) => i % 2 !== 0)

    return string
};

console.log(evenChars('abcdefghijklm')) // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars('a')) // invalid string
console.log(evenChars(';;;--'))