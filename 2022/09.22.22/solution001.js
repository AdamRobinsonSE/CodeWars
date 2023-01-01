// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11
// Do not expect any negative or invalid inputs.

//PREP
//parameters: given an array of integers, and an integer

//return: return how many elements can be added up and stay less than the integer (hd)


function save(sizes, hd) {
    //gets total size, and if its <= hd, just return the length of array
    let totalSize = sizes.reduce((acc,c) => acc + c, 0)
    if (totalSize <= hd) return sizes.length

    //for loop to increment the sum one value at a time, and if it is <= hd then continue the loop
    let sum = 0
    let count = 0
    for(let i = 0 ; i < sizes.length ; i++){
        sum += sizes[i]
        count += 1
        if(sum > hd){
            return count - 1
        }
    }
};

//examples
console.log(save([4, 4, 4, 3, 3], 12)) // 3
console.log(save([4, 4, 4, 3, 3], 11)) // 2
console.log(save([4, 8, 15, 16, 23, 42], 108))