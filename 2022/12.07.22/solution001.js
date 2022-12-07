// Task
// In this task, you need to restore a string from a list of its copies.

// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"


// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"

function assembleString(array){
    if (!array) return ''

    let x = array[0].split('')

    let result = array.map(e => {
        for(let i = 0 ; i < e.length ; i++){
            if (x[i] === '*' && e[i] !== '*'){
                x[i] = e[i]
            }
        }
    })

    let answer = x.map(letter => {
        if (letter === '*'){
            letter = '#'
            return letter
        } else {
            return letter
        }
    })

    return answer.join('')
}

console.log(assembleString([
    "a*cde",
    "*bcde",
    "abc*e"
  ]))

console.log(assembleString([
    "a*c**",
    "**cd*",
    "a*cd*"
  ]))

  