//Your task is to sum the differences between consecutive pairs in the array in descending order.
//For example:
//sumOfDifferences([2, 1, 10])
//Returns 9
//Descending order: [10, 2, 1]
//Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr){
    arr.sort((a,b) => b - a) // sorts the array in descending order
    let newArr = arr.map((a,i) => a - arr[i + 1] || 0) // creates newArr that subtracts consecutive numbers
    return newArr.reduce((a,b) => a + b, 0) // returns the sum of the newArr
}

//Description:
//Complete the solution so that it reverses all of the words within the string passed in.
//Example:
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWrods(str){
    return str.split(' ').reverse().join(' ') // first turns the str into an array, then reverses the array, then joins it all back together
}

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string){
    let vowels = ['a','e','i','o', 'u']
    
    let result = [];
  
    for (let i = 0 ; i < string.length ; i++){
        if (!vowels.includes(string[i])){
            result.push(string[i])
        }
    }return result.join('')
};

console.log(shortcut('hello'))

//Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.
//Examples:
//rps('scissors','paper') // Player 1 won!
//rps('scissors','rock') // Player 2 won!
//rps('paper','paper') // Draw!

function rps(p1,p2){
    if (p1 == p2){
    return 'Draw!';
    }
    
   if (p1 == 'rock' && p2 == 'scissors'){ 
     return 'Player 1 won!'
   }
   else if (p1 == 'scissors' && p2 == 'paper'){ 
     return 'Player 1 won!'
   }
   else if (p1 == 'paper' && p2 == 'rock'){ 
     return 'Player 1 won!'
   }
   else {
     return 'Player 2 won!';
   }
}

//Description
//We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

function stringToNumber(str){
  return Number(str) // parseInt(str) || +str
}

//Description:
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//Create a function which translates a given DNA string into RNA.
//For example:
//"GCAT"  =>  "GCAU"
//The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna){
  return dna.split('')
  .map(e => e === 'T' ? 'U' : e)
  .join('')
}