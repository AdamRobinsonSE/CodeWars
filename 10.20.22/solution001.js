// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
// ------

// given an array of numbers, always integers, never empty

// return the average rounded down to nearest integer

function getAverage(arr){
    const total = arr.reduce((acc,c) => acc + c, 0) // total scores
    return Math.floor(total / arr.length) // getting average rounded down
};

//Examples
console.log(getAverage([2,2,2,2])) // 2
console.log(getAverage([1,2,3,4,5,])) // 3
console.log(getAverage([1,1,1,1,1,1,1,2])) // 1