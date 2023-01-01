// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

//PREP
//P: Given an array of strings. Will they always be strings? will they need to be split?
//R: Return the array with the correct line numbers with a colon
//E

var number = function(array){
    //set up a new arr to push to
    let result = []
    //loop through the arr and add in the number and colon with temperal literal
    for (let i = 1 ; i <= array.length ; i++){
      result.push(`${i}: ${array[i - 1]}`)
    }
    //return result
    return result
  };
  
  number(['a','b','c'])