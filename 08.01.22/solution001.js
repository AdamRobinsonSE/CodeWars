//PALINDROME!!!

//Parameters: Given a string -- is it case sensitive? case insensitive? spaces? what is the string contains a number?
//Return: Return a boolean, true or false, if the string is a palindrome. Make it case insensitive, keep spaces, eliminate other characters

//Pseudo Code
function palindrome(string){
    //variable to remove all characters I don't want
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
    //variable taking original string and putting it to lowercase, split into array, reverse array, join back together
    const newStr = string.toLowerCase().split('').filter(e => alphabet.includes(e)).join('')
    //variable of the reverse of the string
    const reverseStr = string.toLowerCase().split('').filter(e => alphabet.includes(e)).reverse().join('')
    //tenary operator comparing the new strings
    return newStr === reverseStr ? true : false
}

//Examples & Testing edge cases
console.log(palindrome('RaCeCar')) // true
console.log(palindrome('eRic boggs')) // false
console.log(palindrome('kayak')) // true
console.log(palindrome('adam robinson')) // false
console.log(palindrome('go\'lang intervew was hard')) // false
console.log(palindrome('RaceCa9r')) // true