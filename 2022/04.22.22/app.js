//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//   7      6      5      4      3            2      1
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//Note: there will always be exactly one wolf in the array.
//Examples
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//Input: ["sheep", "sheep", "wolf"]
//Output: "Pls go away and stop eating my sheep"

function wolves(arr){
    let wolf = arr.indexOf('wolf')
    return wolf === arr.length - 1 ? 'Pls go away and stop eating my sheep'
    : `Oi Sheep number ${arr.length - (wolf + 1)}! You are about to eaten by a wolf!`
}

console.log(wolves(["sheep", "sheep", "sheep", "wolf", "sheep"]))
console.log(wolves(["sheep", "sheep", "wolf"]))


//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//For example:
//time = 3 ----> litres = 1
//time = 6.7---> litres = 3
//time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
}

//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//Task
//Given a year, return the century it is in.
//Examples
//1705 --> 18
//1900 --> 19
//1601 --> 17
//2000 --> 20

function century(year){
    return Math.ceil(year/100)
}

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//Examples(Operator, value1, value2) --> output
//('+', 4, 7) --> 11
//('-', 15, 18) --> -3
//('*', 5, 5) --> 25
//('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  // Code
  if( operation == "+") {
    return value1 + value2
  }
  if( operation == "-") {
    return value1 - value2
  }
  if( operation == "*") {
    return value1 * value2
  }
  if( operation == "/") {
    return value1 / value2
  }
}