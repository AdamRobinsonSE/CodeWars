// Return the type of the sum of the two arguments

//PREP
//P: Given two arguments, a & b
//R: Return the type of sum it is

function typeOfSum(a, b) {
    return typeof (a + b)
};

//E: 
console.log(typeOfSum(21, 1)) // 'number'
console.log(typeOfSum('12','1')) // 'string
console.log(typeOfSum(1,'5')) // 'string