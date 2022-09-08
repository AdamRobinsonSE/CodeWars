// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

//PREP

//Parameters: given an array of integers

//Return: return the stanton measure

//Example:
//console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])) // is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
//console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1])) // is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

//Pseudo Code: 

function stantonMeasure(arr){
    // result holds the number of times the first element appears
    let result = [] 
    let firstNumber = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if (arr[i] === arr[0]){
            result.push(arr[i])
        }
    }
    
    //count holds the number of times each element appears
    let count = {}
    arr.forEach(e => {
        count[e] ? count[e]++ : count[e] = 1
    })
    
    //loop through the object, if the property is equal to the result.length, add that to stanton measure
    //important to note that object properties will be a string, so it has to be converted to a number
    let stantonMeasure = 0
    for(prop in count){
        if(+prop === result.length) {
            stantonMeasure += count[prop]
        }
    } 
    return stantonMeasure
};

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])) // is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1])) // is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.