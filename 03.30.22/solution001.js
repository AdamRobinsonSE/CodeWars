// *** No Loops Allowed ***
// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
// Looking for more, loop-restrained fun? Check out the other kata in the series:

//PREP
//P: Given an array, and a value of x, check if the provided array contains the value. X can be either a string or number
//R: Return either true or false
//E:

function checkForValue(arr,x){
    //tenary operator
    return arr.includes(x)
};

checkForValue([1,2,3],2)
checkForValue([1,2,3],5)
checkForValue([1,2,3],'5')