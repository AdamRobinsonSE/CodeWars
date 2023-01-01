// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

//P: given an array of integers
//R: return the sum of even indexes multiplied by the last index, 0 is even

function evenLast(numbers) {
    const even = numbers.filter((e,i) => i % 2 === 0) // get all even indexes
    const last = numbers[numbers.length - 1] // gets the last index 
    return even.reduce((acc,c) => acc + (c * last),0) // sums it all together
};

//E:
console.log(evenLast([2,3,4,5])) // 30