// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//P: given a string containing letters and numbers
//R: return the just the numbers, as a numb

var FilterString = function(value) {
    return value.split('').filter(e => e >= '0' && e <= '9').map(e => +e).join('')
};

//E:
console.log(FilterString('123')) // 123
console.log(FilterString('a1b2c3')) // 123
console.log(FilterString('aa1bb2cc3dd')) // 123