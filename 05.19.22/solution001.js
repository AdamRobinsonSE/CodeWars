// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//PREP
//P: Taking in a non-negative integer 
//R: Return it in descending order
//E:

function descendingOrder(n){
    //turn n into a string so we can turn it into an array
    let arr = String(n)
    //split it, sort it, join it back together as a number
    return Number(arr.split('').sort((a,b) => b - a).join(''))
};

descendingOrder(0)
descendingOrder(1)
descendingOrder(15)
descendingOrder(1021)