// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(str) {
    let result = []
    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] === '#') {
            result.pop()
        } else {
            result.push(str[i])
        }
    }
    return result.join('')
};

console.log(cleanString("abc#d##c" )) // 'ac'
console.log(cleanString("abc##d######" )) // ''