// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1

//P: given two parameters, a string, and a another string 
//R: return the number of times the searchText parameter appears in the fullText parameter

function solution(fullText, searchText){
    let newArr = fullText.split(searchText).length
    return newArr - 1
}

//E:

console.log(solution('abcdeb', 'b')) // 2
console.log(solution('abc', 'b')) // 1
console.log(solution('abbc','bb')) // 1