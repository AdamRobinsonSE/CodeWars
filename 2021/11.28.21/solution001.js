// Given a string, write a function to rotate the string x places

function rotate(str, numOfChar = 0){
    const n = numOfChar % str.length
    const part1 = str.slice(0,n)
    const part2 = str.slice(n)
    return `${part2}${part1}`
}

console.log(rotate('adam',1)) // dama