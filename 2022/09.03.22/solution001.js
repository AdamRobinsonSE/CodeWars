// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

//PREP:
//Parameters: given a string

//Return: return the solution, also as a string

//Examples:
// console.log(calculate("1plus2plus3plus4")) // 10
// console.log(calculate("1plus2plus3minus4")) // 2

//Pseudo: replace the plus,minus,add,multiply with their correct symbols, and do the equation

function calculate(str) {
    let newStr = str.split('plus').join(' ').split('minus').join(' -').split(' ')
    return String(newStr.reduce((acc,c) => acc + +c, 0))
};

console.log(calculate("1plus2plus3plus4")) // 10
console.log(calculate("1plus2plus3minus4")) // 2