//P: given an integer, and an array
//R: return the top n elements from the array

function largest(n,xs){
    //puts the array in ascending order
    const sortedArr = xs.sort((a,b) => a - b)
    //slice the sortedArr to return n values
    if (n === 0){
        return []
    }else {
        return sortedArr.slice(-n)
    }
};

//E: 

console.log(largest(2, [10,9,8,7,6,5,4,3,2,1])) // [9,10]
console.log(largest(3, [5,1,5,2,3,1,2,3,5])) // [5,5,5]
console.log(largest(7, [9,1,50,22,3,13,2,63,5])) // [3, 5, 9, 13, 22, 50, 63]