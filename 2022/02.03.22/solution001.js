// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

//PREP
//P: given an array of values
//R: return the smallest number that can be made, with no repeats
//E:

function minValue(values){
    //create a sortedArr from least to greatest
    let sortedArr = values.sort((a,b) => a- b)
    //filter to eliminate duplicates, return it joined as a number
    return +sortedArr.filter((e,i) => e !== sortedArr[i + 1]).join('')
};

minValue([1,3,1]) // 13
minValue([4,7,5,7]) // 457