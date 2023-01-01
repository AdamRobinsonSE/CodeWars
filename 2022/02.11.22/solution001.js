// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//PREP
//P: given a string, remove any words that are duplicates
//R: return the answer as a string
//E:

function removeDuplicateWords (s) {
    let result = [] // set up result to push elements into
    let newArr = s.split(' ') // split the string into an array
    newArr.forEach(e => {   // loop through each element and if result doesn't already have it, push it into it
        if(!result.includes(e)){
            result.push(e)
        }
    })
    return result.join('') // join it all back together as a string
};

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')