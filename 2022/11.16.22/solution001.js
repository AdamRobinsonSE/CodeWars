// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

function revrot(str, sz) {
    // constant time if conditions aren't meant
    if (sz <= 0 || !str || sz > str.length) return ''

    // gets the string into chunks
    let arr = str.split('').map(e => +e)
    let chunks = []
    for(let i = 0 ; i < arr.length ; i+= sz){
        let chunk = arr.slice(i, i + sz)
        chunks.push(chunk)
    }

    // removes any array that is improper length
    let newChunks = chunks.filter(e => e.length === sz)

    newChunks.forEach(e => {
        // gets the sum of each chunk
        let sum = e.reduce((acc,c) => acc + Math.pow(c,3),0)

        // rotates the array 1 position to the left
        let rotatedArr = e
        let rotate = (e) => {
            let first = e.shift()
            rotatedArr.push(first)
        }
        return sum % 2 === 0 ? e.reverse() : rotate(e)
    })

    return [].concat(...newChunks).join('')
   
};

console.log(revrot("123456987654", 6)) // "234561876549", rotated 1 to left
console.log(revrot("123456779", 8)) // "23456771", rotated 1 to left