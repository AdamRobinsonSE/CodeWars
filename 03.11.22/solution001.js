// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//PREP
//P: Is the string always lowercase? uppercase? is it always a string? 
//R: What am I returning? the string if its an isogram? if its true or false?
//E:

function isogram(str){
    let value = true
    //lets turn the string to all lowercase
    let newArr = str.toLowerCase()
    //then split into an array
    .split('')
    //sort it so repeating elements can be compared 
    .sort()
    //map through the new array to check if any letter repeats
    newArr.map((letter,index,array) => {
        if (letter === array[index + 1]){
            value = false
        }
    })
    return value
}

isogram('moOse')
isogram('aba')
isogram('dermatoglyphics')