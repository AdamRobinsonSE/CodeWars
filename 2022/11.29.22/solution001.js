// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

// Happy coding! :)

function longestRepetition(str) {
    let longestRepChar = ''
    let longestRepCount = 0

    let currRepChar = ''
    let currRepCount = 0

    let arr = str.split('')

    arr.forEach(letter => {
        if (currRepChar === letter) {
            currRepCount++
        } else {
            currRepChar = letter
            currRepCount = 1
        }

        if (currRepCount > longestRepCount) {
            longestRepCount = currRepCount
            longestRepChar = currRepChar
        }
    }) 

    return [longestRepChar, longestRepCount]
}
console.log(longestRepetition("aaaabb")) // ['a', 4]
console.log(longestRepetition("bbbaaabaaaa")) // ["a",4] 