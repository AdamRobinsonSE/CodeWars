//write a function that swaps the two elements in an array with let temp = arr[0]

function swapTwoElements(arr){
    let temp = arr[0] // sets a variable called temp to the first element in arr
    arr[0] = arr[1] // sets the first element in arr to be the same as the second element
    arr[1] = temp // the second element now becomes the first element, because we assigned temp to equal it
    return arr // return the arr
}

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//Example:
//
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
//None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
   return arr.filter((e,i,a) => i % 2 === 0) // this says if an index is even, remove it
}


//Finish the uefaEuro2016() function so it return string just like in the examples below:
//
//uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
//uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
//uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
    if (scores[0] > scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }else if (scores[0] < scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }else if (scores[0] === scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
};

//Description:
//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//
//Examples
//Input: [1, 5.2, 4, 0, -1]
//Output: 9.2
//
//Input: []
//Output: 0
//
//Input: [-2.398]
//Output: -2.398
//
//Assumptions
//You can assume that you are only given numbers.
//You cannot assume the size of the array.
//You can assume that you do get an array and if the array is empty, return 0.
//What We're Testing
//We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
//Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//
//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//
//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//   7      6      5      4      3            2      1
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//
//Note: there will always be exactly one wolf in the array.
//
//Examples
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//
//Input: ["sheep", "sheep", "wolf"]
//Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
    let wolf = queue.indexOf('wolf')
    return wolf === queue.length - 1 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length - (wolf + 1)}! You are about to be eaten by a wolf!`
  }

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))