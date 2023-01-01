// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//P: given a number
//R: return the number without the 0s it ends with


function noBoringZeros(n){
    let result = []
    let newArr = String(n).split('')
    for (let i = 0 ; i < newArr.length ; i++){
        if (newArr[newArr.length - i] === '0'){
            delete newArr[newArr.length - i]
        }
    }
    return Number(newArr.join(''))
};

//E:

console.log(noBoringZeros(1450)) // 145
console.log(noBoringZeros(9600000)) // 96
console.log(noBoringZeros(-1050)) // -105
console.log(noBoringZeros(0)) // 0