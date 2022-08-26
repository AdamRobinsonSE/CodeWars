// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

//PREP
//Parameter: given two strings, could be upper or lower case mix, different lengths.

//Return: true if equal, false if not equal

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

//Pseudo Code: 
//1. If the string is null, contains something else other than a letter, treat the whole string as empty
//2. Make all strings uppercase 
//3: loop through each string and if it includes a non-letter character set it equal to an emptry string
//4: split the string into an array and map over it to get character code, and add it all togther
//5: compare the values of s1 & s2

function compare(s1, s2) {
    if (s1 === null) { // if s1 === null sets it to ''
        s1 = ''
    };

    if (s2 === null){ // if s2 === null sets it to ''
        s2 = ''
    };

    s1 = s1.toUpperCase(); // puts s1 to uppercase
    s2 = s2.toUpperCase(); // puts s2 to uppercase 
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // alphabet to check if s1 or s2 has something other than a letter

    for(let i = 0 ; i < s1.length ; i++){ // if s1 contains an invalid character, it now becomes an emptry string
        if (!alphabet.includes(s1[i])) {
            s1 = ''
            continue;
        }
    };

    for(let i = 0 ; i < s2.length ; i++){ // if s2 contains an invalid character, it now becomes an emptry string
        if (!alphabet.includes(s2[i])) {
            s2 = ''
            continue;
        }
    };

    let s1Value = s1.split('').map((e,i) => s1.charCodeAt(i)).reduce((acc,c) => acc + c, 0); // value of s1 ASCII character codes
    let s2Value = s2.split('').map((e,i) => s2.charCodeAt(i)).reduce((acc,c) => acc + c, 0); // value of s2 ASCII character codes
    
    return s1Value === s2Value ? true : false // ternary operator to check if they're equal

};

console.log(compare("AD", "BC")) // equal
console.log(compare("AD", "DD")) // not equal
console.log(compare("gf", "FG")) // equal
console.log(compare("zz1", "")) // equal (both considered empty)
console.log(compare("ZzZz", "ffPFF")) // equal
console.log(compare("kl", "lz" )) // equal
console.log(compare(null, "" )) // equal