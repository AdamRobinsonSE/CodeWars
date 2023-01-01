// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// function sum(array) {
//   // Use array.reduce() to find and return the
//   // sum of the values in array.
// }
// For example:

// var someNumbers = [1,2,3,4,5,6,7,8,9,10];

// sum(someNumbers); // should return 55

//PREP
//P: Given an array of numbers, return the sum of all the numbers.
//R: return the sum of all the numbers in the array

function sum(array) {
    return array.reduce((acc,c) => acc + c, 0)
};
  
//E:
console.log(sum([1,2,3,4,5,6,7,8,9,10])); // should return 55
console.log(sum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])); // should return 75