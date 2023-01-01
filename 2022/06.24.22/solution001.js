// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(arr){
    const nums = arr.filter(e => typeof e === 'number').reduce((acc,c) => acc + c, 0)
    const strings = arr.filter(e => typeof e === 'string').map(e => +e).reduce((acc,c) => acc + c, 0)
    return nums - strings
};

console.log(divCon([9,3,'7','3'])) // (9 + 3) - (7 + 3)