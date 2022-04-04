//Your task is to sum the differences between consecutive pairs in the array in descending order.
//For example:
//sumOfDifferences([2, 1, 10])
//Returns 9
//Descending order: [10, 2, 1]
//Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr){
    arr.sort((a,b) => b - a) // sorts the array in descending order
    let newArr = arr.map((a,i) => a - arr[i + 1] || 0) // creates newArr that subtracts consecutive numbers
    return newArr.reduce((a,b) => a + b, 0) // returns the sum of the newArr
}

//Description:
//Complete the solution so that it reverses all of the words within the string passed in.
//Example:
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWrods(str){
    return str.split(' ').reverse().join(' ') // first turns the str into an array, then reverses the array, then joins it all back together
}

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string){
    let vowels = ['a','e','i','o', 'u']
    
    let result = [];
  
    for (let i = 0 ; i < string.length ; i++){
        if (!vowels.includes(string[i])){
            result.push(string[i])
        }
    }return result.join('')
};

console.log(shortcut('hello'))