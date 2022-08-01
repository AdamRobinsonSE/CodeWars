//PALINDROME!!!

//This is how I normally try to do all my problems to learn. 
    //what parmeters am I given? what are the test/edge cases?
    //what am I returning? 
    //pseudo code first, then type the actual code
    //examples/edge cases to test what they should be

//Parameters: Given a string 
//Return: Return a boolean, true or false, if the string is a palindrome. Make it case insensitive, keep spaces, eliminate other characters

//Pseudo Code
function palindrome(string){
    //variable to remove all characters I don't want
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    //variable taking original string and putting it to lowercase, split into array, filter through it to remove characters, reverse array, join back together
    const newStr = string.toLowerCase().split('').filter(e => alphabet.includes(e)).join('');
    //variable of the reverse of the string, same as newStr variable + reverse
    const reverseStr = string.toLowerCase().split('').filter(e => alphabet.includes(e)).reverse().join('');
    //tenary operator comparing the new strings
    return newStr === reverseStr ? true : false;
};

//Examples & Testing edge cases - is it case sensitive? case insensitive? spaces? what if the string contains a number?
console.log(palindrome('RaCeCar')) // true
console.log(palindrome('eRic boggs')) // false
console.log(palindrome('kayak')) // true
console.log(palindrome('adam robinson')) // false
console.log(palindrome('go\'lang intervew was hard')) // false
console.log(palindrome('RaceCa9r')) // true