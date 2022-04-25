//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//Task
//Implement a function named
//generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
//generateRange(1, 10, 3) // should return array of [1,4,7,10]
//Note
//min < max
//step > 0
//the range does not HAVE to include max (depending on the step)

function generateRange(min,max,step){
    let result = []
    for (let i = min ;i <= max ; i+= step){
        result.push(i)
    }
}

//Create a function to remove the first & last character of a string

function remove(str){
    return str.slice(1, string.length - 1)
}

//Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
//Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalize(str){
    return str[0].toUpperCase + str.slice(1)
}