// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//PREP
//P: Given an array
//R: Return the usm of the odd numbers in the array after cubing the initial integers, if any elements are not numbers, return undefined

function cubeOdd(arr) {
    const undefinedArr = arr.filter(e => typeof e !== 'number')
    const cubedArr = arr.filter(e => e % 2 !== 0).reduce((acc,c) => acc + Math.pow(c,3),0)
    if (undefinedArr.length !== 0){
        return undefined
    }else {
        return cubedArr
    }
};

//E:

console.log(cubeOdd([1,2,3,4])) // 28
console.log(cubeOdd([-3,-2,-2,3])) // 0
console.log(cubeOdd(['a',12,9,'z',42]))