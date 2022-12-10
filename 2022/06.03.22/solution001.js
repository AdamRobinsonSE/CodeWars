// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

//P: Given an array, in a random order, of integers
//R: return 'yes, ascending' || 'yes, descending' || 'no depending on the array

function isSortedAndHow(array) {
    const ascending = array.filter((e,i,a) => e > a[i + 1]).length == 0
    const descending = array.filter((e,i,a) => e < a[i + 1]).length == 0
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
};

//E:

console.log(isSortedAndHow([1,2])) // yes, ascending
console.log(isSortedAndHow([15,7,3,-8])) // yes, descending
console.log(isSortedAndHow([4,2,30])) // no