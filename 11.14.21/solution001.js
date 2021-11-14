// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

//PREP
//Parameters: given a string
//Return: return an object with the count of each letter in a string
//Example:
// Test.assertDeepEquals(charFreq("I like cats"), {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1});
//Pseudo Code: create an empty object, and loop through the string, making each letter a key, its value of how many times it appears

function charFreq(message) {
    message = message.split('').sort()
    let result = {}
    message.forEach(e => {
        result[e] = (result[e] || 0) + 1
    })
    return result
};

console.log(charFreq('I like cats'))