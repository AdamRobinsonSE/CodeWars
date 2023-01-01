// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

//P: Given an array of names
//R: Return the same array of names, with just their first letter capitalized

function capMe(names) {
    return names.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase())
};

//E:

console.log(capMe(['jo', 'nelson', 'jurie'])) // ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) // ['Karly, 'Daniel', 'Kelsey']