// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    // splits n into an array of numbers
    let arr = String(n).split('').map(e => + e)
    
    // gets the total of the array
    let sum = arr.reduce((acc,c) => acc + c, 0)
    
    // handles the logic if sum > 9, aka two digits 
    if (String(n).length > 1){
        return String(sum).split('')
                          .map(e => +e)
                          .reduce((acc,c) => acc + c, 0)
    } else {
        return sum
    }
};

console.log(digitalRoot(16)) // 7
console.log(digitalRoot(456)) // 6, 4 + 5 + 6 = 15, 1 + 5 = 6
console.log(digitalRoot(10)) // 1