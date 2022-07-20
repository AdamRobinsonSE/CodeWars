// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

//P: given two parameters, a string, and a number
//R: an array of strings of equal length
var splitInParts = function(s, partLength){
    let newArr = []
    for(let i = 0 ; i < s.length ; i+=partLength){
        const chunk = s.slice(i, i + partLength)
        newArr.push(chunk)
    }
    return newArr.join(' ')
};

//E:
console.log(splitInParts('supercalifragilisticexpialidocious', 3));
console.log(splitInParts('HelloKata', 2));