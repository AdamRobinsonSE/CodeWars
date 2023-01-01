// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

//PREP
//P: You're given a string that is a name
//R: If the string is 'Zach', return 18, if its anything else, return 0
//E:

function howManyLightsabersDoYouOwn(name) {
    //ternary operator
    return name === 'Zach' ? 18 : 0
  };

howManyLightsabersDoYouOwn('Zach')
howManyLightsabersDoYouOwn('Adam')