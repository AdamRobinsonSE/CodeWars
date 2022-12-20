// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
   
    newStr = s.split(" ");

    return Math.min(...newStr.map(e => e.length))

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3