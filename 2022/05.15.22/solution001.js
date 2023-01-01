//PREP
//P: Given a string, determine if its an isogram (no repeating letters consecutive and non), ignore letter casing
//R: return if is true or false
//E:

function isIsogram(str){
    let value = true; // used so if the array is empty
    str.toLowerCase().split('').sort().map((letter, index, array) => { //lowercase first before its an array, split to array, sort it, map through it
      if (letter === array[index + 1]) value = false;
    });
    return value;
  }

isIsogram('isogram') // true
isIsogram('') // true
isIsogram('aba') // false
isIsogram('moOse') // true