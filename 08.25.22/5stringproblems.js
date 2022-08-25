// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//PREP
//Parameter: one string, contains a card and its suit symbol
//Return: the suit
//Examples:
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
//Pseudo: take the last character of the parameter, and say if its spades, diamonds, hearts, or clubs

function defineSuit(card) {
    const hearts = '♥' // holds hearts
    const diamonds = '♦' // holds diamonds
    const spades = '♠' // holds spades
    //comparison if the last character of card is equal to the variables
    if(card.slice(-1) === hearts){ 
        return 'hearts'
    }else if(card.slice(-1) === diamonds){
        return 'diamonds'
    }else if(card.slice(-1) === spades){
        return 'spades'
    }else {
        return 'clubs'
    }
};

console.log(defineSuit('Q♥')) // spades
console.log(defineSuit('9♦')) // diamonds
console.log(defineSuit('J♥')) // hearts


// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

// Please also try Simple remove duplicates

//PREP
//Parameters: given two strings
//Return: a new string of a & b concatenated with unique values
//Examples
// console.log(solve("xyab","xzca")) // "ybzc"
// console.log(solve("xyabb","xzca")) // "ybbzc"
// console.log(solve("abcd","xyz")) // "abcdxyz"
//Peseudo: Find the characters that are not common in each string

function solve(a,b){
    let result = ''
    for(let i = 0 ; i < a.length ; i++){
        if(!b.includes(a[i])){
            result += a[i]
        }
    }
    for(let i = 0 ; i < b.length ; i++){
        if (!a.includes([b[i]])){
            result += b[i]
        }
    }
    return result
};

console.log(solve("xyab","xzca")) // "ybzc"
console.log(solve("xyabb","xzca")) // "ybbzc"
console.log(solve("abcd","xyz")) // "abcdxyz"


// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1

//P: given two parameters, a string, and a another string 
//R: return the number of times the searchText parameter appears in the fullText parameter
//Examples: 
// console.log(solution('abcdeb', 'b')) // 2
// console.log(solution('abc', 'b')) // 1
// console.log(solution('abbc','bb')) // 1
//Pesedo: Find the length of a new array that contains the searchTexts

function solution(fullText, searchText){
    let newArr = fullText.split(searchText).length
    return newArr - 1
}

console.log(solution('abcdeb', 'b')) // 2
console.log(solution('abc', 'b')) // 1
console.log(solution('abbc','bb')) // 1

// It's your birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (candles). Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.

// As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

// When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles, the carpet will catch fire.

// You will work out the number of candles that will fall from the provided lowercase string (debris). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.

// For example:

// "abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
// If the carpet catches fire, return "Fire!", if not, return "That was close!".

// Notes

// if there are no candles to begin with, the carpet cannot catch fire;
// as this is not reality, you may have more candles falling from the cake than the total...

function cake(x, y){
    if(x < 1) return 'That was close!'
    let result = []
    for(let i = 0 ; i < y.length ; i++){
        result.push((y.charCodeAt(i)))
    }
    let total = result.reduce((acc,c) => acc + c, 0)
    if (total > x){
        return 'Fire!'
    } else if ( total > .7 * x) {
        return 'Fire'
    } else {
        return 'That was close!'
    }
};

console.log(cake(900,'abcdef')) // 'That was close!'
console.log(cake(56, 'ifkhchlhfd')) // 'Fire!'
console.log(cake(256,'aaaaaddddr')) // 'Fire!
console.log(cake(981, 'yawxskqfma')) // 'Fire!'

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//PREP
//Parameters: Two strings - each containing at least 2 letters, no numbers, lowercase, no special characters at start or end
//Return: Boolean
//Examples:
// Test.assertEquals(feast("great blue heron", "garlic naan"), true)
// Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)
//Pseudo: get the start and end letters of the beast's name, and the start and end letters of dish name, if both these match, return true, if not, false

function feast(beast, dish) {
    const beastFirstLetter = beast[0] // holds first letter of beast
    const beastLastLetter = beast[beast.length - 1] // holds last letter of beast
    const dishFirstLetter = dish[0] // holds first letter of dish
    const dishLastLetter = dish[dish.length - 1] // holds last letter of dish
    //if/else to compare
    if(beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter){
        return true
    }else {
        return false
    }
};

console.log(feast("great blue heron", "garlic naan")) // true
console.log(feast("chickadee", "chocolate cake")) // true
console.log(feast("brown bear", "bear claw")) // false