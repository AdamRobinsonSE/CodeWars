//P: Given an array
//R: Return all the leaders of the array, which are the elements which are greater than the sum of all the elements to the right of it.

function arrayLeaders(arr){
    return arr.filter((e,i,a) => e > arr.slice(i+1).reduce((acc,c) => acc + c, 0))
}

//E:

console.log(arrayLeaders([1, 2, 3, 4, 0])); // [4]
console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17, 5]
console.log(arrayLeaders([5,2,-1])); // [5,2]