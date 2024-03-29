// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

//P: Given strings, which have a numeric value
//R: Return 'Right side wins!' || 'Left side wins! || 'Let's fight again!' based on the weights of the letters

function alphabetWar(fight){
    //make arrays for left and right side letters
    const left = fight.split('').filter(e => e === 'w' || e === 'p' || e === 'b' || e === 's')
    const right = fight.split('').filter(e => e === 'm' || e === 'q' || e === 'd' || e === 'z')
    //add up the values of the left and right arrays
    const leftValues = left.map(e => e === 'w' ? 4 : e === 'p' ? 3 : e === 'b' ? 2 : e === 's' ? 1 : e).reduce((acc,c) => acc + c, 0)
    const rightValues = right.map(e => e === 'm' ? 4 : e === 'q' ? 3 : e === 'd' ? 2 : e === 'z' ? 1 : e).reduce((acc,c) => acc + c, 0)
    //compare to see who wins
    return leftValues > rightValues ? 'Left side wins!' : rightValues > leftValues ? 'Right side wins!' : 'Let\'s fight again!' 
};

//E:

console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!