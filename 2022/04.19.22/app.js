//I have a cat and a dog.
//I got them at the same time as kitten/puppy. That was humanYears years ago.
//Return their respective ages now as [humanYears,catYears,dogYears]
//NOTES:
//humanYears >= 1
//humanYears are whole numbers only
//Cat Years
//15 cat years for first year
//+9 cat years for second year
//+4 cat years for each year after that
//Dog Years
//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that


function petYears(humanYears){
    let catYears = 0
    let dogYears = 0
    if (humanYears === 1){
        catYears = 15
        dogYears = 15
    }else if (humanYears === 2){
        catYears = 24
        dogYears = 24
    }else if (humanYears > 2){
        catYears = 24 + ((humanYears - 2) * 4)
        dogYears = 24 + ((humanYears - 2) * 5)
    }
}

//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//Task
//Implement a function named
//generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
//generateRange(1, 10, 3) // should return array of [1,4,7,10]
//Note
//min < max
//step > 0
//the range does not HAVE to include max (depending on the step)

function generateRange(min,max,step){
    let result = []
    for (let i = min ; i <= max ; i += step){
        result.push(i)
    }return result
}