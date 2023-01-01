//write a function sumOfDifferences(arr) that sums the differences between consecutive pairs in the array in descending order. If the array is empty or the array has only one element the result should be 0
//example
//[2,1,10] // (10- 2) = (2-1) = 8 + 1 = 9

function sumOfDifferences(arr){
    return arr.sort((a,b) => b -a)
    .map((e,i) => e - arr[i + 1] || 0)
    .reduce((acc,c) => acc + c, 0)
}

console.log(sumOfDifferences([2,1,10]))

////Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
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
    : `Oi! Sheep number ${arr.length - (wolf + 1)} You are about to be eaten by a wolf!`
}

console.log(wolves(["sheep", "sheep", "sheep", "wolf", "sheep"]))


//Write a function that returns a string in which firstname is swapped with last name.
//nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    return str.split(' ')
    .reverse()
    .join(' ')
  }

console.log(nameShuffler('adam robinson'))

//Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
//Please use the following function names:
//addition = add
//multiply = multiply
//division = divide (both integer and float divisions are accepted)
//modulus = mod
//exponential = exponent
//subtraction = subt
//Note: All math operations will be: a (operation) b

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return a - b
}

//Given an array of 4 integers
//[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
//For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
//Use the slope formula to find the slope of a line given the coordinates of two points on the line. The slope formula is m=(y2-y1)/(x2-x1), or the change in the y values over the change in the x values. The coordinates of the first point represent x1 and y1. The coordinates of the second points are x2, y2.

function slope(points){
    let b = (points[2] - points[0])
    let a = (points[3] - points[1])
    let result = String(a / b)
    if (b === 0) {
        return 'undefined'
    } else {
        return result
    }
}

//Create a function that takes a number as an argument and returns a grade based on that number.
//Score	Grade
//Anything greater than 1 or less than 0.6	"F"
//0.9 or greater	"A"
//0.8 or greater	"B"
//0.7 or greater	"C"
//0.6 or greater	"D"
//Examples:
//
//grader(0)   should be "F"
//grader(1.1) should be "F"
//grader(0.9) should be "A"
//grader(0.8) should be "B"
//grader(0.7) should be "C"
//grader(0.6) should be "D"

function grader(score) {
    if (score > 1 || score < .6){
        return 'F'
    }else if(score >= .9){
        return 'A'
    }else if(score >= .8){
        return 'B'
    }else if (score >= .7){
        return 'C'
    }else if (score >= .6){
        return 'D'
    }
  }