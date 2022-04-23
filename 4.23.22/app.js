//Create a function with two arguments that will return an array of the first(n) multiples of (x).
//example
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10]

function multiples (n,x) {
    let result = []
    for (let i = 1 ; i < x ; i++){
        result.push(n * i)
    }
}