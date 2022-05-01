//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
//addLength('apple ban') => ["apple 5", "ban 3"]
//addLength('you will win') => ["you 3", "will 4", "win 3"]
//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
//
//Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    return str.split(' ')
    .map(e => `${e} ${e.length}`)
  }

//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.//
//Example:
//
//sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
//This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}