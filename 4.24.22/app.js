//Create a method all which takes two params, and returns true if the function in the params returns true for every element in the sequence
//example
//all((1,2,3,4,5), greater_than_9) -> false

function test(a,b){
    return a.every(b)
}