// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!

//PREP
//P: Given an array of integers
//R: Return the difference between the largest and smallest integer, if list length is 0 || 1, return 0

function maxDiff(list) {
    const sortedArr = list.sort((a,b) => b - a)
    if(sortedArr.length === 0 || sortedArr.length === 1){
        return 0
    }else {
        return sortedArr[0] - sortedArr[sortedArr.length - 1]
    }
};

//E:

console.log(maxDiff([1,2,3,4])) // 3
console.log(maxDiff([1,2,3,-4])) // 7