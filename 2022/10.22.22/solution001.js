// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

function alternate(n, firstValue, secondValue){
    let result = []
    for (let i = 0 ; i < n ; i++) {
        result.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return result
};

console.log(alternate(5, true, false )) // [true, false, true, false, true]
console.log(alternate(10, "blue", "red" )) // ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
console.log(alternate(0, "one", "two")) // []