// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//P: given a string
//R: return true if it contains same amount of xs and os, case insensitive

function XO(str) {
    let x = ''
    let o = ''
    let newArr = str.toLowerCase().split('')
    for(let i = 0 ; i < newArr.length ; i++){
        if (newArr[i] === 'x'){
            x += newArr[i]
        }else if (newArr[i] === 'o'){
            o += newArr[i]
        }
    }
    if (!x.includes('x') && !o.includes('o')){
        return true
    }else if (x.length === o.length) {
        return true
    }else {
        return false
    }
};

//E:

console.log(XO('ooxx')) // true
console.log(XO ('xooxx')) // false
console.log(XO('XoOx')) // true
console.log(XO('asdklj')) // true