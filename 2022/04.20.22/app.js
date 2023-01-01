//Create a function to remove the first & last character of a string

function removeFirstAndLast(str){
    return str.slice(1, str.length - 1)
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

function generate(min,max,step){
    let result = []
    for (let i = min; i <= max ; i += step){
        result.push(i)
    }return result
}

//Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
//Write a function that given a floor in the american system returns the floor in the european system.
//With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//Basements (negatives) stay the same as the universal level.
//More information here
//Examples
//1  =>  0 
//0  =>  0
//5  =>  4
//15  =>  13
//-3  =>  -3

function getRealFloor(n){
    if (n <= 0){
        return n
    }else if (n <= 13){
        return n - 1
    }else if (n > 13){
        return n - 2
    }
}

//Make a function that returns the value multiplied by 50 and icnreased by 6. If the value entered is a string it should return "Error"

function problem(x){
    return x === +x ? x * 50 + 6 : x !== +x ? 'Error' : ''
}