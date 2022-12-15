// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr, targetNum){
    // array to push answer to
    let result = []
    // obj to hold numbers
    let nums = {}
    // looping through every # in our array
    for(const num1 of arr){
        // 4 - each integer in the array is now equal to num2
        const num2 = targetNum - num1
        // if the integer exists in the nums object then we know we can push the pair
        if(nums[num2]){
            result.push([num1,num2])
        }else{
            // if the integer doesn't exist already we set it equal to 1
            nums[num1] = 1
        }
    }

    return result
}

console.log(twoSum([1, 2, 2, 3, 4], 4)) // [[2, 2], [3, 1]]