// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned
// Useful link: Sequence

// Be sure to check out my Arithmetic sequence Kata first ;)
// Don't forget about the indexing pitfall ;)

//given three inputs, first = the starting number, c = the constant number we're adding to first, and l = how long to run the sequence for

let seqlist = function(first,c,l){
    let result = []
    for (let i = first ; i < l ; i += c) {
        result.push(i)
    }
    return result
};

console.log(seqlist(0,1,20))
console.log(seqlist(0,2,40))