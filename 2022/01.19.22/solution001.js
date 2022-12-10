// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

//P: Given an array of non-negative integers 0-9
//R: Return the one number that is missing from the array

// function getMissingElement(superImportantArray){
//     let result = []
//     let test = [0,1,2,3,4,5,6,7,8,9]
//     let sortedArr = superImportantArray.sort((a,b) => a - b)
//     for (let i = 0 ; i < sortedArr.length ; i++){
//         if (test[i] !== sortedArr[i]){
//             result.push(test[i])
//         }
//     }
//     return result[0]
// };

function getMissingElement(superImportantArray){
    for(let i = 0 ; i <= superImportantArray.length ; i++){
        if (!superImportantArray.includes(i)){
            return i
        }
    }
};

//E:
console.log(getMissingElement([0,5,1,3,2,9,7,6,4]))
console.log(getMissingElement([9,2,4,5,7,0,8,6,1]))