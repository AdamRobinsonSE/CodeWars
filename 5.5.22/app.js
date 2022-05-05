//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//Example
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge.
//Don't forget the space after the closing parentheses!

//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
//
//describe("Create Phone Number", () => {
//  it("Fixed tests", () => {
//    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
//    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//  });
//});

function createPhoneNumber(arr){
    let areaCode = arr.slice(0,3).join('')
    let firstThree = arr.slice(3, -4).join('')
    let lastFour = arr.slice(6).join('')
    return `(${areaCode}) ${firstThree}-${lastFour}`
  }

////Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

//const { assert } = require("chai")
//
//describe("Basic tests", () => {
//  
//  it("squareDigits(3212) should equal 9414", () => {
//    assert.strictEqual(squareDigits(3212), 9414);
//  });
//
//  it("squareDigits(2112) should equal 4114", () => {
//    assert.strictEqual(squareDigits(2112), 4114);
//  });
//
//  it("squareDigits(0) should equal 0", () => {
//    assert.strictEqual(squareDigits(0), 0);
//  });
//})

function squareDigits(num){
    let arr = String(num).split('')
    return +arr.map(e => Math.pow(e,2)).join('')
  }