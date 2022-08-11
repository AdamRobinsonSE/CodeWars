// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//P: given a string
//R: return the index of the vowel that is missing

//P:
function absentVowel(x){
    //array containg vowels
    const vowels = ['a','e','i','o','u']
    //new str to force to all lowercase
    const newStr = x.toLowerCase().split('')
    for(let i = 0 ; i < newStr.length ; i++){
        if(newStr.indexOf('a') === - 1){
            return 0
        }else if (newStr.indexOf('e') === -1){
            return 1
        }else if (newStr.indexOf('i') === -1){
            return 2
        }else if (newStr.indexOf('o') === -1){
            return 3
        }else if (newStr.indexOf('u') === -1){
            return 4
        }
    }
};

//E:

console.log(absentVowel("John Doe hs seven red pples under his bsket")) // 0
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles" )) // 3