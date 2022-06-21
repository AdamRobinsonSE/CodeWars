// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

// PREP
// P: Given an array of elements
// R Return an object that counts the number of each unique element present

function count(array){
    const sortedArr = array.sort((a,b) => a - b)
    const count = {}
    sortedArr.forEach(e => {
        count[e] = (count[e] || 0) + 1
    })
    return count
};

//E:

console.log(count(['james','james','john'])) // {'james': 2, 'john': 1}
console.log(count(['a','a','b','b','b'])) // {'a': 2, 'b': 3}

