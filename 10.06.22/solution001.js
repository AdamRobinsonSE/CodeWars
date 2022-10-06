// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Parameters: given a string of words

// Return: return a boolean pending if its a pangram or not (contains every letter of alphabet at least once)

// Longer Way
function isPangram(string){
    let newStr = string.toLowerCase() // puts string to lowerCase without changing the parameter
    let alphabet = 'abcdefghijklmnopqrstuvwxyz' // alphabet to compare to
    let newArr = newStr.split('').filter(e => alphabet.includes(e)) // filter out anything that isn't a letter
    let result = [] // push to new array
    for(let i = 0 ; i < newArr.length ; i++){ // loop through and if result doesn't have the letter already, push it in
        if(!result.includes(newArr[i])){
            result.push(newArr[i])
        }
    }
    return result.length >= 26 ? true : false // as long as result.length >= 26 its true
};

// Shorter way
function isPangram2(string){
    let newStr = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return alphabet.split('').every(letter => newStr.includes(letter))
}

// Examples:
console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("This is not a pangram.")) // false