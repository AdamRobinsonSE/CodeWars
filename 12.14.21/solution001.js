// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//P: Given a string containing any number of the letters 'a', 'b', 'c'
//R: Return the string switching any instance of a and b

function switcheroo(x){
    //make sure all letters are lowercase 
    return x.toLowerCase()
    //split it into an array
    .split('')
    //map 
    .map((e,i,a) => e === 'a' ? 'b' : e === 'b' ? 'a' : 'c')
    //join it back together
    .join('')
};

//E:

console.log(switcheroo('acb')) // 'bca'
console.log(switcheroo('aabacbaa')) // 'bbabcabb'

