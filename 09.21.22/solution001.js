// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

//PREP
//paramteres: given an array, and an integer (an index)

//return the index of the smallest integer that is larger than the element at the provided index (i), or -1 if it does not exist 


function leastLarger(a,i) {
    i = a[i]
    let newArr = a.filter(e => e > i)
    let smallestVal = Math.min(...newArr)
    return a.findIndex(e => e === smallestVal)
};

//examples
console.log(leastLarger([4, 1, 3, 5, 6], 0)) // 3
console.log(leastLarger([4, 1, 3, 5, 6], 4)) // -1
console.log(leastLarger([1, 3, 5, 2, 4], 0)) 