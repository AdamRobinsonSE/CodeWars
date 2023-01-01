// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

//Parameters: given a string, could be uppercase or lowercase
//Return: return the sum of all the characters as in integer (ASCII)

//Rseudo code:
function uniTotal (string) {
    return string.split('').reduce((acc, c) => acc + c.charCodeAt(), 0)
};

//Examples:

console.log(uniTotal('')) // 0
console.log(uniTotal('a')) // 97
console.log(uniTotal('aaa')) // 291