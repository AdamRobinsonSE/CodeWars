// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

//P: Given an array of integers
//R: Return the number of consectutive integers when comparing pairs arr[0] arr[1] are a pair, and so on

function pairs(ar){
    //make the array an even number so pairing is easy
    if(ar.length % 2 === 1){
        ar.pop()
    }
    //split the array into pairs of arrays 
    const result = []
    for(let i = 0 ; i < ar.length ; i += 2){
        const chunk = ar.slice(i, i + 2)
        result.push(chunk)
    }
    //filter through and compare each value if its consectutive
    return result.filter((e,i) => (e[0] + 1) === e[1] || (e[0] - 1) === e[1]).length
};

//E:

console.log(pairs([1,2,5,8,-4,-3,7,6,5])) // 3
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])) // 2
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])) // 0

