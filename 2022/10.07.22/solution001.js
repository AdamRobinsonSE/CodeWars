// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Parameters: given a string of characters

// Return: return an array of the characters, split into pairs, if its an odd amount place an _ paired with last character

// Examples
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Pseudo Code:

function solution(str){
    if (str === '') return [] 
    let result = []
    for(let i = 0 ; i < str.length ; i++){
        result.push(`${str[i] + (str[i + 1] || '_')}`)
    }
    return result
};

console.log(solution('abc')) // ['ab', 'c_']
console.log(solution('abcdef')) // ['ab', 'cd', 'ef']