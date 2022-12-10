//Create a function to remove the first & last character of a string

const removeFAndL = str => {
    return str.slice(1, str.length - 1)
}

//write a function that swaps the two elements in an array with let temp = arr[0]
//example
//[1,2] = [2,1]

const swap = arr => {
    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
    return arr
}

//Create a function that takes in a string with mutliple spaces. Return the string with no spaces

const removeSpaces = str => {
    return str.split('')
    .map((e) => e !== ' ')
    .join('')
}

//Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string

const removeVowels = str => {
    let result = []
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0 ; i < str.length ; i++){
        if (!vowels.includes[str[i]]){
            result.push(str[i])
        }
    }return result.join()
}