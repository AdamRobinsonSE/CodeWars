// Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

//prep
//parameters: given an array of arrays

//return: retur the sum of the integers going diagnol, top left to bottom right

//examples

// array = [[1, 2],
//          [3, 4]]

// diagonal sum: 1 + 4 = 5
// array = [[5, 9, 1, 0],
//          [8, 7, 2, 3],
//          [1, 4, 1, 9],
//          [2, 3, 8, 2]]

// diagonal sum: 5 + 7 + 1 + 2 = 15

//pesuedo code
function diagonalSum(matrix){
    let result = [] // array to push into
    for(let i = 0 ; i < matrix.length ; i++){ //loop thru array pushing each value
        result.push(matrix[i][i])
    }
    return result.reduce((acc,c) => acc + c , 0) // sum it all together
};

console.log(diagonalSum([[5, 9, 1, 0],
    [8, 7, 2, 3],
    [1, 4, 1, 9],
    [2, 3, 8, 2]]))
