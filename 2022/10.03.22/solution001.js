// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

//PREP
//parameters: given two strings and a letter

//return: return a new string, thats a combo of both, merged at the point where the given leter first appears in each word, with the diving letter in middle

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

//pseudo code

function stringMerge(string1, string2, letter){
    let str1Index = string1.indexOf(letter) 
    let str2Index = string2.indexOf(letter)
    let result = `${string1.slice(0,str1Index)}${string2.slice(str2Index)}`
    return result
};

console.log(stringMerge("person","here", "e")) // "pere"
