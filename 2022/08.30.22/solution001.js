// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

//PREP:
//Parameters: an array of strings that are integers

//Returns: a string that replaces the integers with the letters in reverse order (a = 26, z = 1 etc.) and replaces the '!' and '?' with '27' and '28' and '29 respectively.

//Examples
// assert.strictEqual(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
// assert.strictEqual(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
// assert.strictEqual(switcher(['4', '24']), 'wc'); 

//Pseduo 

function switcher(x){
    const alphabetSwitch = ' ?!abcdefghijklmnopqrstuvwxyz#'.split('').reverse() // gives an array of letters that matches the indexes required
    let newArr = x.map(e => +e) // all the strings in parameter are now an integer
    let result = [] // empty array to push too
    for(let i = 0 ; i < newArr.length ; i++){
        for(let j = 0 ; j < alphabetSwitch.length ; j++){
            if(alphabetSwitch.indexOf(alphabetSwitch[j]) === newArr[i]){
                result.push(alphabetSwitch[j])
            }
        }
    }
    return result.join('')
};

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])) // 'codewars'