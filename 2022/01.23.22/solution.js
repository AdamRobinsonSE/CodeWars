// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

//PREP
//P: Given an array, containing arrays
//R: Return the array flattened

var flatten = function (array){
    return [].concat(...array)
};

//E:

console.log(flatten([1,2,3]))
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]))
console.log(flatten([[[1,2,3]]]))