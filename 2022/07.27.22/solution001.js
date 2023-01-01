// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//P: given a string
//R: return an integer of the number of times a letter or number is repeated, regardless of case
//P:
function duplicateCount(text){
    //declare result variable
    let result = []
    //set newArr to be lowercase and split into an array
    let newArr = text.toLowerCase().split('').sort()
    //for loopto see if values match
    for(let i=0 ; i < newArr.length ;i++){
        if (newArr[i] === newArr[i + 1] && !result.includes(newArr[i])){
            result.push(newArr[i])
        }
    }
    return result.length
}

//E:

console.log(duplicateCount('abcde')) // 0
console.log(duplicateCount('aabbcde')) // 2
console.log(duplicateCount('aabBcde')) // 2
console.log(duplicateCount('Indivisibility')) // 1
console.log(duplicateCount('Indivisibilities')) // 2