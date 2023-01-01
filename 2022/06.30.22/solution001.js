// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

//PREP
//P: Given an array of strings, 
//R: return an array of numbers

function toNumberArray(stringarray){
    return stringarray.map(e => +e)
};

//E:

console.log(toNumberArray(["1", "2", "3"])); // [1, 2, 3]