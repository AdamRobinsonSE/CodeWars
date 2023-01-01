// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
	let arr = a.map(e => e <= limit)
	if(arr.includes(false)){
    return false
  }else {
    return true
  }
}
smallEnough([66, 101], 200) // true
smallEnough([1,2,3,4,5],4) // false