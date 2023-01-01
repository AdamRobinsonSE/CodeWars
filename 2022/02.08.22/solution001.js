// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

//PREP
//P: Given two integers
//R: Return an array from the integer parameter up to the limit parameter. If the limit parameter is a multiple of integer, include it.
//E:

function findMultiples(integer, limit) {
    //set up a variable to push into
    let result = []
    //loop through our limits and push into result
    for (let i = integer ; i <= limit ; i+= integer){
        result.push(i)
    }
    //return result
    return result
};

findMultiples(5,25) // [5,10,15,20,25]
findMultiples(1,2) // [1,2]
findMultiples(5,7)  // [5]