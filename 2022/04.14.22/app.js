//Create a function with two arguments that will return an array of the first(n) multiples of (x)
//example
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,5,8,10]

function multiples (a,b) {
    let result = []
    for (let i = 1 ; i <= b ; i ++){
        result.push(a * i)
    }
}

//Create a method all which takes two params, and returns true if the function in the params returns true for every element in the sequence
//example
//all((1,2,3,4,5), greater_than_9) -> false

function checkIfTrue(a,b){
    return a.every(b)
}

//Description:
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function inLove(flower1,flower2){
    return flower1 % 2 !== flower2 % 2 ? 'in love' : 'not in love'
}

////Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
//Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function fix(str){
    return str[0].toUpperCase() + str.slice(1)
}

//Code a nested for loop to find matching numbers from two different arrays

let arr1 = [1,2,3]
let arr2 = [2,3,4]
let result = []

for (a = 0 ; a < arr1.length ; a++){
    for (b = 0 ; b < arr2.length ; b++){
        if (arr1[a] === arr2[b]){
            result.push(arr2[b])
        }
    }
}

//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!
//Note:
//Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let classAvg = classPoints.reduce((acc,c) => acc + c, 0) / classPoints.length
    return yourPoints > classAvg ? true : false
  }
  
