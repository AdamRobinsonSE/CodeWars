// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//PREP
//P: given a string name, could contain random casing
//R: return 'Hello "Name"!'
//E:

var greet = function(name) {
    //variable to correct any name
    const correctedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
    //template literal to return message
    return `Hello ${correctedName}!`
};

console.log(greet('riley'))
console.log(greet('aDaM'))