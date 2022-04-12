//Create a function that abbreviates a name into something like this
//
//Adam Robinson // A.R

function abbreviates(str){
    return str.split(' ').map(e => e[0].toUpperCase()).join('.')
}

//write a function sumOfDifferences(arr) that sums the differences between consecutive pairs in the array in descending order. If the array is empty or the array has only one element the result should be 0

//example
//[2,1,10] // (10- 2) = (2-1) = 8 + 1 = 9

function sumOfDifferences(arr){
    return arr.sort((a,b) => b - a)
    .map((e,i) => e - arr[i + 1] || 0)
    .reduce((acc,c) => acc + c, 0)
}


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
    return wolf === arr.length - 1 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${arr.length - (wolf + 1)} You are about to be eaten by a wolf!`
}

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//examples
//n = 0  ==> [1]        # [2^0]
//n = 1  ==> [1, 2]     # [2^0, 2^1]
//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    let result = []
    for (let i = 0 ; i <= n ; i++){
      result.push(Math.pow(2,i))
    }return result
  }
  
  console.log(powersOfTwo(5))