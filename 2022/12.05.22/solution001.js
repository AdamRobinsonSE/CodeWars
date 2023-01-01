// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0

function sumOfABeach(beach) {
    // words to check
    let words = ['sand', 'water', 'fish', 'sun']
    // case sensitive fix
    beach = beach.toLowerCase()
    // count to increase
    let count = 0
    for(let i = 0 ; i < words.length ; i++){
        while(beach.includes(words[i])){
            // replace will replace the first occurence of the word
            beach = beach.replace(words[i], '')
            count++
        }
    }
    return count
};

console.log(sumOfABeach("WAtErSlIde")) // 1
console.log(sumOfABeach('GolDeNSanDyWateRyBeaChSuNN')) // 3
console.log(sumOfABeach('sunsunsunsun')) // 4

