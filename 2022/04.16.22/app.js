//write a function sumOfDifferences(arr) that sums the differences between consecutive pairs in the array in descending order. If the array is empty or the array has only one element the result should be 0
//example
//[2,1,10] // (10- 2) = (2-1) = 8 + 1 = 9

function sumOfDifferences(arr){
    return arr.sort((a,b) => b - a)
    .map((e,i) => e - arr[i + 1] || 0)
    .reduce((acc,c) => acc + c, 0)
}