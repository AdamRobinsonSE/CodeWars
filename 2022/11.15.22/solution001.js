// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let count = {}    
    arr.forEach(e => {
        count[e] ? count[e]++ : count[e] = 1
    })

    let maxCount = Math.max(...Object.values(count))
    
    let result = 0
    for(prop in count){
        if (count[prop] === maxCount && prop > result){
            result = +prop
        }
    }
    
    return result
}


console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])) // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) // 3