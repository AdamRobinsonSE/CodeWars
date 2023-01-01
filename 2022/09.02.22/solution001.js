// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

//PREP
//Parameters: given a string of integers

//Returns: the string with all the 9s removed that are between 7s

//Examples:
// console.log(sevenAte9("79712312")); //"7712312"
// console.log(sevenAte9('79797')); // "777"

//pseduocode - loop through the string, if the current character is a 7, the next is a 9, and the next is a 7, remove the 9

function sevenAte9(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === '7' && str[i + 1] === '9' && str[i + 2] === '7'){
            str = str.slice(0, i + 1) + str.slice(i + 2);
        }
    }
    return str;
}

console.log(sevenAte9("79712312")); // "7712312"
console.log(sevenAte9('79797')); // "777"
console.log(sevenAte9('165561786121789797')) // '16556178612178977'
console.log(sevenAte9('79712345797'))