// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

//PREP
//Parameters: given an array of strings

//Return: return a new array, but replacing any rotten fruit with the same fruit in lowercase

//Examples:
// console.log(removeRotten(["apple","banana","kiwi","melone","orange"])) // ["apple","banana","kiwi","melone","orange"]
// console.log(removeRotten("rottenApple","banana","rottenKiwi","melone","orange")) // ["apple","banana","kiwi","melone","orange"]
// console.log(removeRotten([])) // []
 
//fast way of doing it
function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase()) : []
}

console.log(removeRotten(["apple","banana","kiwi","melone","orange"])) // ["apple","banana","kiwi","melone","orange"]
console.log(removeRotten(["rottenApple","banana","rottenKiwi","melone","orange"])) // ["apple","banana","kiwi","melone","orange"]
console.log(removeRotten([])) // []
console.log(removeRotten(null))

//exceptionally long way of doing it
function removeRotten(bagOfFruits){
    if (bagOfFruits === null || bagOfFruits === undefined || bagOfFruits === []) return []

    const rottenFruits = bagOfFruits.filter(e => e.slice(0,6) === 'rotten') // places all rotten fruits in an array
    .join('').split('rotten') // puts it all together and splits it at 'rotten'
    .map(e => e.toLowerCase()).filter(e => e !== '') // puts everything to lowercase and filters out anything not supposed to be there
    
    let results = []

    for(let i = 0 ; i < bagOfFruits.length ; i++){
        if(bagOfFruits[i].slice(0,6) === 'rotten'){
            results.push(rottenFruits.shift())
        }else {
            results.push(bagOfFruits[i])
        }
    }
    
    return results
};

console.log(removeRotten(["apple","banana","kiwi","melone","orange"])) // ["apple","banana","kiwi","melone","orange"]
console.log(removeRotten(["rottenApple","banana","rottenKiwi","melone","orange"])) // ["apple","banana","kiwi","melone","orange"]
console.log(removeRotten([])) // []
console.log(removeRotten(null))