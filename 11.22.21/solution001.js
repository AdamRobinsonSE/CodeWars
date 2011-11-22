// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    const newStr = str.split('')
    let result = []
    for(let i = 0 ; i < newStr.length ; i++){
        if(newStr[i] === '-' || newStr[i] === '_'){
            result.push(newStr[i + 1].toUpperCase())
            newStr[i+1] = ''
        }else {
            result.push(newStr[i])
        }
    }  
    result.filter((e,i) => e !== '')
    return result.join('')
}   

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"