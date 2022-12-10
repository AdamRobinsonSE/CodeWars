//PREP
//P: given a string of words
//R: Return the length of the longest word in the string
//E:

function findLongest(str){
    let longest = 0
    let newArr = str.split(' ')
    for(let i = 0 ; i < newArr.length ; i++){
        if (newArr[i].length > longest){
            longest = newArr[i].length
        }
    }
    return longest
}

findLongest('take me to tinseltown with you') // 10
findLongest('sausage chops') // 7