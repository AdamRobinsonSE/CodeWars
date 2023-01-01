// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

//PREP
//Parameter: given a string that contains grouping of numbers

//Return: return the largest grouping as a number

//Examples:
// Test.assertEquals(solve('gh12cdy695m1'),695);
// Test.assertEquals(solve('2ti9iei7qhr5'),9);
// Test.assertEquals(solve('vih61w8oohj5'),61);
// Test.assertEquals(solve('f7g42g16hcu5'),42);
// Test.assertEquals(solve('lu1j8qbbb85'),85);

//Pseudo: go through the string, find the largest number pairing, and return it
function solve(s){
    s = s.split('').map(e => +e).join('').split(NaN).filter(e => e !== '').map(e => +e)
    return Math.max(...s)
};

console.log(solve('gh12cdy695m1')) // 695