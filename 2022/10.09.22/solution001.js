// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let arr = string.split('')
    return arr.map(letter => {
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
            return ' ' + letter
        } else {
            return letter
        }
    }).join('')
}

console.log(solution('camelCasing'))
