// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

//PREP
//P: Given a string

//R: return the length of words it has, do not include spaces, trim whitespace

//E:
// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1

//P: Going to trim the string, then split into an array, then do a .length as the return    

function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
  }

console.log(countWords("Hello, World!")) // returns 2
console.log(countWords("No results for search term `s`")) // returns 6
console.log(countWords(" Hello")) // returns 1
console.log(countWords("Hello")) // returns 1 as int
console.log(countWords(''))
console.log(countWords("  Hello Gomer  "))
console.log(countWords("Dear   Victoria, I love  to press   space button."))
console.log(countWords("﻿Hello﻿World "))