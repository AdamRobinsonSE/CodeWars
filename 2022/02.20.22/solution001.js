// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//PREP
//P: Given an array of values, always numbers
//R: return an array of the values that are even in the order they're given
//E:

function noOdds( values ){
    return values.filter(e => e % 2 === 0)
};

noOdds([0,1])
noOdds([0,1,2,3,4])