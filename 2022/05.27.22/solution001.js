// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//PREP
//P: given an array of numbers
//R: return an array with only the even numbers
//E:

function getEvenNumbers(numbersArray){
    //filter through, use mod to check if its even
    return numbersArray.filter(e => e % 2 === 0)
  }

getEvenNumbers([2,4,5,6]) // [2,4,6]
getEvenNumbers([1,2,3,4,5,6,7,8]) // [2,4,6,8]