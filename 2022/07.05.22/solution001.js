// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     //split string into an array
//     return s.toLowerCase().split('')
//     //map through and repeat the element by its index + 1
//     .map((e,i,a) => e[0].repeat(i + 1))

//     .map((e,i,a) => e[0].toUpperCase() + e.slice(1)).join('-')
// };

function accum(s){
    return s.split('').map((e,i,a) => e.toUpperCase()+ e.toLowerCase().repeat(i))
}
    

console.log(accum('abcd')) // 'A-Bb-Ccc-Dddd