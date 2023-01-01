// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

//PREP:
//Parameters: given a string, it must become case insensitive
//Return: boolean, true if each character in the string appears the same amount of times
//Examples
// Test.assertEquals(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
// Test.assertEquals(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
// Test.assertEquals(validateWord("abc123"),true, "The word was: \"abc123\" \n");
// Test.assertEquals(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
// Test.assertEquals(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
// Test.assertEquals(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");

function validateWord(s){
    let count = {};
    s = s.toLowerCase().split('')
    s.forEach(e => {
        count[e] ? count[e]++ : count[e] = 1
    })
    return Math.max(...Object.values(count)) === Math.min(...Object.values(count)) ? true : false
}

console.log(validateWord('abcabc')) // true
console.log(validateWord('abcabcd')) // false
console.log(validateWord('123abc')) // true