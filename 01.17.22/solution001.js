// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

//P: given an array of elements
//R: return the array as one string, seperated by commas

function printArray(array){
    return array.join(',')
};

//e:

console.log(printArray('[h','e','l','l','o')) // 'h,e,l,l,o'