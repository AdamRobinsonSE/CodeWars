// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//PREP
//Parameters: Two strings - each containing at least 2 letters, no numbers, lowercase, no special characters at start or end
//Return: Boolean
//Examples:
// Test.assertEquals(feast("great blue heron", "garlic naan"), true)
// Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)
//Pseudo: get the start and end letters of the beast's name, and the start and end letters of dish name, if both these match, return true, if not, false

function feast(beast, dish) {
    const beastFirstLetter = beast[0] // holds first letter of beast
    const beastLastLetter = beast[beast.length - 1] // holds last letter of beast
    const dishFirstLetter = dish[0] // holds first letter of dish
    const dishLastLetter = dish[dish.length - 1] // holds last letter of dish
    //if/else to compare the letters
    if(beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter){
        return true
    }else {
        return false
    }
};

console.log(feast("great blue heron", "garlic naan")) // true
console.log(feast("chickadee", "chocolate cake")) // true
console.log(feast("brown bear", "bear claw")) // false