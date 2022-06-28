// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// Input >> Output Examples
// nthSmallest({3,1,2} ,2) ==> return (2) 
// Explanation:
// Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// Explanation:
// Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

// nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
// Explanation:
// Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
// Explanation:
// Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*

//PREP
//P: Given an array of integers, and another integer as arguments
//R: Return the 'pos' argument smallest number. IE if 'pos' is 2, find the second smallest integer

function nthSmallest(arr, pos){
    let result = []
    let newSortedArr = arr.sort((a,b) => a - b)
    newSortedArr.forEach(e => {
        if(newSortedArr.indexOf(e) === pos - 1){
            result.push(e)
        }
    })
    return result[0]
};

//E:

console.log(nthSmallest([3,1,2], 2)) // 2
console.log(nthSmallest([15,20,7,10,4,3],3)) // 7
console.log(nthSmallest([-96 ,-97 ,6517 ,-970 ,74 ,79 ,703 ,-641 ,-3993 ,-6912 ,-2949 ,-3972 ,5760 ,7 ,-4 ,6081 ,4685 ,5598 ,-7 ,-3 ,-1 ,8622 ,-9 ,-82 ,-8 ,0 ,1 ,-47 ,-58 ,-582 ,-34 ,-7 ,4381 ,-535 ,-5777 ,1],18))
