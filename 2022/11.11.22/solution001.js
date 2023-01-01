// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// parameters: given a string

// return : first letter must be its ASCII code, second letter must be switched with last letter, treat each word as a new instance
var encryptThis = function(text) {
    // constant time, easy solution if we are ever given a input of 1 character
    if (text.length === 1) return String(text.charCodeAt(0))

    let result = []
    let arr = text.split(' ')
    for(let i = 0 ; i < arr.length ; i++) {
        // ASCII Code for first letter
        charCode = String(arr[i].charCodeAt(0))
        // stores second letter 
        secondLetter = arr[i][1]
        // stores last letter 
        lastLetter = arr[i][arr[i].length - 1]
        //stores the middle of the word
        middle = arr[i].slice(2, arr[i].length - 1)
        
        if (arr[i].length === 1) {
            result.push(charCode)
        } else if (arr[i].length === 2) {
            result.push(`${charCode}${secondLetter}`)
        } else {
            result.push(`${charCode}${lastLetter}${middle}${secondLetter}`)
        }
    }

    return result.join(' ')
}

console.log(encryptThis('A')) // 65
console.log(encryptThis("A wise old owl lived in an oak")) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"