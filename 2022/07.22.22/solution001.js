// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

//whtat is given
// function spam(number){
//     //TODO: Not returning the expected value.
//     return "hue" * number;
//   }


//fixed
//P: given a number
//R: return hue repeated by that number 

function spam (number){
    //repeat method
    return 'hue'.repeat(number)
};

//E:
console.log(spam(14))

