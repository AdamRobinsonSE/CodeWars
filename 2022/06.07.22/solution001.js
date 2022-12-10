// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

//PREP
//P: Given an object
//R: return two arrays, one with the keys, one with the values

function keysAndValues(data){
    let keys = Object.keys(data)
    let values = Object.values(data)
    return [keys,values]
};

//E:

console.log(keysAndValues({a: 1, b: 2, c: 3})) // ['a','b','c'][1,2,3]