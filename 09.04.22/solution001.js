// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)

//PREP:
//Parameters: given a string, contains different cases, spaces, symbols

//Return: return count of each letter appearance, as asterisks, as a string,separated by commas ignoring anything that isn't a letter and case

//Example
//console.log(getStrings('Bankkok')) // "b:*,a:*,n:*,g:*,k:**,o:*"
//console.log(getStrings('Las Vegas')) // "l:*,a:**,s:**,v:*,e:*,g:*"

function getStrings(city){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    city = city.toLowerCase().split('').filter(e => alphabet.includes(e))
    let str = ''
    let count = {}
    for(let i = 0 ; i < city.length ; i++){
        if(!count[city[i]]){
            count[city[i]] = '*'
        }else {
            count[city[i]] += '*'
        }
    }
    for(letter in count){
        str += `${letter}:${count[letter]},`
    }
    return str.slice(0,-1)
};

console.log(getStrings('Bangkok')) // "b:*,a:*,n:*,g:*,k:**,o:*"
console.log(getStrings('Las Vegas')) // "l:*,a:**,s:**,v:*,e:*,g:*"
