// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// Given a string that could contain many instances of "Fire", will it always be one instance? case sensitive?

// Return the string replacing any instance of "Fire" with "~~"

function fireFight(s){
    // splits the string by spaces
    let arr = s.split(' ')
    // maps over the array and using a tenary operator to replace any instace of 'Fire' with '~~'
    return arr.map(e => e === 'Fire' ? '~~' : e).join(' ')
};

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast")) // "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"

console.log(fireFight("Mast Deck Engine Water Fire")) // "Mast Deck Engine Water ~~"

console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain")) // "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"