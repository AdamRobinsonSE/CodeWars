// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

//P: We're given an array
//R: Return true if the array contains golds, false if not
function checkTheBucket(bucket){
    let arr = []
    let newArr = bucket.filter(e => e.includes('g') || e.includes('G'))
    for(let i = 0 ; i < newArr.length ; i++) {
        arr.push(newArr[i].toLowerCase())
    }
    return arr.join('').split(' ').join('') === 'gold' ? true : false
};

//E: 
    //what if the gold has a capital letter? what if it contains a space? handle this as well
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]))
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]))
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "Gold"]))
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "go ld"]))
