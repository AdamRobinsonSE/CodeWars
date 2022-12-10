// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//PREP
//P: Single word, string, and its going to contain capital letters in the string
//R: Going to return the index of the capital letters, 'HeLLo' = [0,2,3]
//E:

var capitals = function (word) {
    //array for result
    let result = []
    //split word into an array
	let newArr = word.split('')
    //filter 
    newArr.filter((letter, i) => {
        if (letter === letter.toUpperCase()){
            result.push(i)
        }
    })
    return result
};

capitals('CodEWaRs')