// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//Parameters: given an array of numbers, odds and evens
//Return: a sorted array, with odds in ascending order and evens in their original order
//Edge Cases: if the array is empty, return an empty array
//pseudocode:

function sortArray(array) {
    //set up an array of just odd numbers
    const odd = array.filter(e => e % 2 !== 0).sort((a,b) => a - b)
    //set up emptry array to push answers to
    let result = []
    //loop through array, and if even push, if not, push odd.shift()
    for(let i=0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            result.push(array[i])
        }else {
            result.push(odd.shift())
        }
    }
    return result
};

//Examples:
console.log(sortArray([7, 1])); // [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]