// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

function cutIt(arr){
    let lengths = arr.map(e => e.length)
    let shortestLength = Math.min(...lengths)
    
    return arr.map(e => e.slice(0,shortestLength))
};

console.log(cutIt(["ab","cde","fgh"])) // ["ab","cd","fg"]
console.log(cutIt(["abc","defgh","ijklmn"])) // ["abc","def","ijk"]