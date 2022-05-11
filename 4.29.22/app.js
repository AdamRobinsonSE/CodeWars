//At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    let result = []
    let newArr = ages.sort((a,b) => b-a)
    let oldest = newArr[0]
    let youngest = newArr[newArr.length - 1]
    result.push(youngest,oldest, (oldest - youngest))
    return result
}

differenceInAges([82, 15, 6, 38, 35])

//Find the mean (average) of a list of numbers in an array.
//Information
//To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
//For an example list of 1, 3, 5, 7
//1. Add all of the numbers
//1+3+5+7 = 16
//2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
//16/4 = 4
//3. The mean (or average) of this list is 4

var findAverage = function (nums) {
    let total = nums.reduce((acc,c) => acc + c, 0);
    return total / nums.length
};

//The wide-mouth frog is particularly interested in the eating habits of other creatures.
//He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
//When he meets the alligator, it then makes a tiny mouth.
//Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
    if (animal.toLowerCase() === alligator){
        return 'small'
    }else {
        return 'wide'
    }
};

//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//
//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//
//Example (Input --> Output)
//
//"Hello World" --> "World Hello"
//"Hi There." --> "There. Hi"
//Happy coding!

function reverse(string){
    return string.split(' ').reverse().join(' ')
};
