// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

//P: given a name as a string
//R: return the first 3 or 4 characters of the string as a nickname. if the third letter is a vowel, return 4 letters, otherwise 3

function nicknameGenerator(name){
    const vowels = ['A','E', 'I', 'O', 'U','a', 'e', 'i', 'o', 'u']
    let newArr = name.split('')
    if(newArr.length <= 3){
        return 'Error: Name too short'
    }
    else if (vowels.includes(newArr[2])){
        return newArr.slice(0,4).join('')
    }else {
        return newArr.slice(0,3).join('')
    }
};

//E: 
console.log(nicknameGenerator('Jimmy')) // Jim
console.log(nicknameGenerator('Douglas')) // Doug