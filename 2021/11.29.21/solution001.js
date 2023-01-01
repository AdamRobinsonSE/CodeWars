// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isogram(str){
    let lowerCaseStr = str.toLowerCase()
    let newArr = str.toLowerCase().split('')    
    let testCase = [...new Set(newArr)].join('')
    return testCase === lowerCaseStr ? true : false
};

console.log(isogram('moOse')) // false
console.log(isogram('aba')) // false
console.log(isogram('Dermatoglyphics')) // true

