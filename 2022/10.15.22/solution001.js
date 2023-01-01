// given a string consisting of lowercase only letters

// if it contains every letter of the alphabet at least once, return true, otherwise false

// example
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

 var checkIfPangram = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz' // alphabet to check
    let arr = sentence.toLowerCase().split('').filter(e => alphabet.includes(e)).join('') // sanitizing the string
    return alphabet.split('').every(e => arr.includes(e))
 };

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) // true
console.log(checkIfPangram('testing this for pangram status')) // false
console.log(checkIfPangram('leetcode'))