//write a function that swaps the two elements in an array with let temp = arr[0]

function swapTwoElements(arr){
    let temp = arr[0] // sets a variable called temp to the first element in arr
    arr[0] = arr[1] // sets the first element in arr to be the same as the second element
    arr[1] = temp // the second element now becomes the first element, because we assigned temp to equal it
    return arr // return the arr
}

console.log