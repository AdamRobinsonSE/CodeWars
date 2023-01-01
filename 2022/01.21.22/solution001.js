// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//P: Given two numbers as parameters
//R: return health - damage, if the quotiont is below 0 return 0

function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage
};

//E: 

console.log(combat(100,5)) // 95
console.log(combat(50,10)) // 40
console.log(combat(20,30)) // 0
