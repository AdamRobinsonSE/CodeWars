//You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold = 0;
//
//describe("Push an object into array", function(){
//  it ("should has a value", function(){
//    assert.isNotEmpty(items, 'The array is still empty')
//  });
//  it ("should has only one value", function(){
//    assert.lengthOf(items, 1, 'The array contains too many values')
//  });
//  it ("should has the correct value", function(){
//    assert.deepEqual(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')
//  });
//});

//items = []
//items.push {a: "b", c: "d"}
// BECOMES

let items = []
items.push({a: 'b', c: 'd'})

//Given the triangle of consecutive odd numbers:
//
//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
//...
//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
//1 -->  1
//2 --> 3 + 5 = 8

//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
//
//describe("Basic tests", () => {
//  it("Testing for fixed tests", () => {
//    assert.strictEqual(rowSumOddNumbers(1), 1);
//    assert.strictEqual(rowSumOddNumbers(42), 74088);
//  });
//});

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}

//Return the number (count) of vowels in the given string.
//
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
//The input string will only consist of lower case letters and/or spaces.

//const {assert} = require("chai");
//
//describe("Vowels Count Tests",function(){
//  it("should return 5 for 'abracadabra'",function(){
//    assert.strictEqual(getCount("abracadabra"), 5) ;
//  });
//});

function getCount(str) {
    let arr = str.split('') // splits str into an array
    let vowels = ['a','e','i','o','u'] // sets the test case
    let vowelsCount = arr.filter(e => vowels.includes(e)).length // filters through the arr and grabs all letters that equal vowels
    return vowelsCount
}

function arrayDiff(a, b) {
    let result = []
    for (let c = 0 ; c < a.length ; c++){
      for(let d = 0 ; d < b.length ; d++){
        if ((a[c] !== b[d]) || b[d] === null){
          result.push(a[c])
        }
      }
    }
    return result
  }
  
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//It should remove all values from list a, which are present in list b keeping their order.
//
//arrayDiff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:
//
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
//
//describe("Basic tests", () => {
//  it("Should pass Basic tests", () => {
//    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
//    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
//    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
//    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
//    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
//    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
//  });
//});


function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
  }
