//Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
//
//example
//(36,7) // 22
//(55,30) // 5
//(42,21) // 0
//(22,1) // 20
//(29,0) // 29

function fatherInfo(fatherAge,sonAge){
    return Math.abs(fatherAge - (sonAge * 2))
}

//Write a method, that will get an integer array as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array like this:
//If the number has an integer square root, take this, otherwise square the number.
//Example
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]
//Notes
//The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(arr){
    return arr.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt : Math.pow(e,2))
}


//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//For example: ["3:1", "2:2", "0:1", ...]
//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//if x > y: 3 points
//if x < y: 0 point
//if x = y: 1 point
//Notes:
//there are 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4
//example
//["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
//['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']
//['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']
//['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']
//['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']

function championshipPoints(arr){
    let points = 0
    arr.forEach(e => {
        if(e[0] > e[2]){
            points += 3
        }else if (e[0] === e[2]){
            points += 1
        }
    })
    return points
}

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//examples
//n = 0  ==> [1]        # [2^0]
//n = 1  ==> [1, 2]     # [2^0, 2^1]
//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powers(n){
    let result = []
    for (let i = 0 ; i <= n ; i++){
        result.push(Math.pow(2,i))
    }
    return result
}

//write a function that swaps the two elements in an array with let temp = arr[0]
//example
//[1,2] = [2,1]

function swap(arr){
    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
    return arr
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
    return arr.length - 1 === wolf ? `Pls go away and stop eating my sheep` : `Oi! Sheep Number ${arr.length - (wolf + 1)}! You are about to eaten by a wolf!`
}