// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be a valid integer number.
// X will be either a number or a string. Both are valid.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Alan Partridge II - Apple Turnover", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
//     assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 
//   })
// });

function apple(x){
	return +Math.pow(x,2) > 1000 ? 'It\s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//     assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//     assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
//     })
//   })

function disemvowel(str) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    return str.split('').filter(e => !vowels.includes(e)).join('')
  }
  
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('example tests', function() {
//   it('should return correct text', function() {
//     assert.strictEqual(likes([]), 'no one likes this');
//     assert.strictEqual(likes(['Peter']), 'Peter likes this');
//     assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//   });
// });

function likes(names){
    if (names.length === 0){
      return 'no one likes this'
    }else if(names.length === 1){
      return `${names[0]} likes this`
    }else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else if(names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Example tests", () => {
//   it("Test 1", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
//   it("Test 2", () => {
//     assert.strictEqual(highAndLow("1 2 3"), "3 1");
//   });
// });

function highAndLow(numbers){
	let arr = numbers.split(' ').sort((a,b) => a-b)
  return `${arr[arr.length -1]} ${arr[0]}`
}

//Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
//
//Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
//
//describe("Basic tests",() =>{
//    Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
//    Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
//    Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
//    Test.assertSimilar(whoIsPaying("Me"),["Me"]);
//    Test.assertSimilar(whoIsPaying(""), [""]);
//    Test.assertSimilar(whoIsPaying("I"), ["I"]);
//    });

function whoIsPaying(name){
    return name.length > 2 ? [name, (name[0] + name[1])] : [name]
  }