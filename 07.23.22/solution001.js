// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//P: given a string of words
//R: return the word that has the highest value

function high(x){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
  }

//E: 
console.log(high('man i need a taxi up to ubud')) // taxi
console.log(high('what time are we climbing up the volcano')) // volcano