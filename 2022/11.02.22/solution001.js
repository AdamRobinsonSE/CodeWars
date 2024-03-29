// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

function strCount(obj){
    let count = 0
    for (i in obj){
        if (typeof obj[i] === 'string') count++
        if (typeof obj[i] === 'object') count += strCount(obj[i])
    }
    return count
};

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth: [1,2,3]
    }))