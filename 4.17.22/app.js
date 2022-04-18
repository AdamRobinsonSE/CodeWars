//write a function sumOfDifferences(arr) that sums the differences between consecutive pairs in the array in descending order. If the array is empty or the array has only one element the result should be 0
//example
//[2,1,10] // (10- 2) = (2-1) = 8 + 1 = 9

function sumOfDifferences(arr){
    return arr.sort((a,b) => b - a)
    .map((e,i) => e - arr[i + 1] || 0)
    .reduce((acc,c) => acc + c, 0)
}

//write a function that swaps the two elements in an array with let temp = arr[0]
//example
//[1,2] = [2,1]

function swap(arr){
    let temp = arr[0]
    arr[1] === arr[0]
    arr[0] === temp
    return arr
}

console.log(swap([1,2]))

//Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string

function removeVowels(str){
    let vowels = ['a','e','i','o','u']
    let result = []
    for (let i = 0 ; i < str.length ; i++){
        if(!vowels.includes(str[i])){
            result.push(str[i])
        }
    }return result.join('')
}

console.log(removeVowels('hello'))


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
    return wolf === arr.length - 1 ? 'Pls go away and stop eating my sheep' :
    `Oi! Sheep number ${arr.length - (wolf + 1)}! You are about to be eaten by a wolf!`
}

//Write a program that takes in an array of birds, and filters out any that are geese

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((e,i) => e !== geese.includes(e))
  };

////Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//examples
//n = 0  ==> [1]        # [2^0]
//n = 1  ==> [1, 2]     # [2^0, 2^1]
//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function listOfPowers(n){
    let result = []
    for (let i = 1 ; i <= n ; i++){
        result.push(Math.pow(2,i))
    }
}

