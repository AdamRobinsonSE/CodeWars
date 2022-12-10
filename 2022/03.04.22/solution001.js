// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//PREP
//P: are we always given a string? is it always lower case or upper case?
//R: return true if its an isogram, false if it isn't
//E:

function isogram(str){
    let value = true
  let arr = str.toLowerCase().split('').sort()
  for (let i = 0 ; i < arr.length ; i++){
      if (arr[i] === arr[i + 1]){
          value = false
      }
  }return value
};


isogram('aba')
isogram('moOse')
isogram('Dermatoglyphics')