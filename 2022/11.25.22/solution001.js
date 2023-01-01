// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    let numbers = '0123456789'
    let arr = str.split('').filter(e => !numbers.includes(e))
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === arr[i].toUpperCase() && i === 0){
            result.push(arr[i].toLowerCase())
        } else if (arr[i] === arr[i].toUpperCase() && i !== 0){
            result.push('-')
            result.push(arr[i].toLowerCase())
        } else {
            result.push(arr[i])
        }
    }
    return result.join('')
}
    
    

console.log(kebabize('myCamelCasedString')) // 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')) // 'my-camel-has-humps'