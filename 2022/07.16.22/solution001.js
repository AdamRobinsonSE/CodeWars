// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
    let str = 'aeiou';
    let count = 0;
    let arr = []
    for(let i = 0 ; i < s.length ; i++){
        if (str.includes(s[i])){
            count++
        }else {
            arr.push(count)
            count=0
        }
    }
    return Math.max(...arr)
};

console.log(solve('codewarriors')) // 2
console.log(solve('suoidea')) // 3