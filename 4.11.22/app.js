//Create a function that takes in a string with mutliple spaces. Return the string with no spaces

function removeSpaces(str){
    return str.split('').filter(e => e !== ' ').join('')
}

console.log(removeSpaces('he ll o wor ld'))

//Create an object calculator with three methods
//read() // prompts for two values and saves them as object properties
//sum() // returns the sum of the saved values
//mul() // returns the product of the saved values

let calculator = {
    read(){
        this.a = +prompt('n1')
        this.b = +prompt('n2')
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
}

//Write a program that takes in an array of 'good' and 'bad' ideas. If it has 1 or 2 'good' ideas return 'Publish!', if its 3 or more 'good' ideas return 'I smell a series!'. If there is no good ideas return 'Fail!'

function goodOrBadIdeas(arr){
    let count = arr.filter(e === 'good').length
    return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail'
}

//Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string

function removeVowels(str){
    let result = [];
    let vowels = ['a','e','i','o','u']
    for (let i = 0 ; i < str.length ; i++){
        if (!vowels.includes(str[i])){
            result.push(str[i])
        }
    }
    return result.join('')
}

//Write a program that squares the numbers in an array, and sums it all together

function squareAndSum(arr){
    return arr.reduce((acc,c) => acc + (Math.pow(c,2)))
}

//Write a program that takes in a number and converts that number to a reversed array of digits

function reverseNumberToArray(n){
    return String(n)
    .split('')
    .reverse()
}
