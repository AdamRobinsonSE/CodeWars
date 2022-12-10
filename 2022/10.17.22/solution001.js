// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

/**
 * param {number} x
 * return {boolean}
 */

// given an integer, could be positive or negative

// if the integer is a palindrome (same forward and back), return true, else false


var isPalindrome = function(x) {
    let reverseNum = String(x).split('').reverse().join('') // make x a string so we can split it, and reverse it, and join it back together
    return x === +reverseNum ? true : false // tenary turning the reverseNum back to a num checking if its equal to input
};

console.log(isPalindrome(121)) // true // 121 === 121
console.log(isPalindrome(-121)) // false // -121 ! == 121-
console.log(isPalindrome(10)) // false 10 !== 01