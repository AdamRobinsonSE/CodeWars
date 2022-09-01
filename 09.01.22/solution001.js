// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


//Prep:
//Parameter: given a string of words
//Return: return the string of words, removing duplicates, leaving only the first appearance of the word
//Examples:
//console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")) // "alpha beta gamma delta alpha beta gamma delta"


const removeConsecutiveDuplicates = s => {
    s = s.split(' ')
    return s.filter((e,i) => s[i] !== s[i + 1]).join(' ')
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")) // "alpha beta gamma delta alpha beta gamma delta"