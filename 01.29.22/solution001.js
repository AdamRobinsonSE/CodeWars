// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

//P: Given an array of integers, positive or negative, and number as arguments
//R: Return an array of the number of elements the number argument specifies


//P:
function take(arr, n) {
    //slice from 0 to n
    return arr.slice(0,n)
};

//E:

console.log(take([0,1,2,3,4,5,8,13],3)) // [0,1,2]