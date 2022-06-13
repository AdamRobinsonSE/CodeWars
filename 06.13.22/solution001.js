// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    // gives the charCode as string
    const total1 = x.split('').map((e,i) => x.charCodeAt(i)).join('') 
    // gives the charCode as string replacing the '7' with '1'
    const total2 = total1.split('').map(e => e === '7' ? '1' : e).join('') 
    //splits the totals into numbers to reduce through, and subtract from each other
    return total1.split('').map(Number).reduce((acc,c) => acc + c, 0) - total2.split('').map(Number).reduce((acc,c) => acc + c, 0)
};

console.log(calc('abcdef'))
// console.log(calc('ifkhchlhfd'))

