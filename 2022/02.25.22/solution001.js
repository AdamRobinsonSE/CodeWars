// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//PREP
//P: Two integers given
//R: return an array of all integers between them including the parameters
//E

function between(a, b) {
    //create empty array for result
    let result = []
    //loop 
    for (let i = a ; i <= b ; i++){
        result.push(i)
    }
    return result
};

between(1,4)
betweem(-2,2)