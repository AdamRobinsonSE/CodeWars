// write a function that swaps the two elements in an array with let temp = arr[0]

// example
// [1,2] = [2,1]

//PREP
//P: Will the array always contain numbers? Will it only contain two numbers? 
//R: Am I returning the new array? All the arrays?
//E:

function swap(arr){
    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
    return arr
}

swap([1,2])