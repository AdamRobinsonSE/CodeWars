// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//PREP
//P: Will it always be a number? Will it always be an integer? 
//R: Return these numbers
//E:

function evenOrOdd(a){
    //tenary operator, a % 2 checking for remainder,
    return a % 2 === 0 ? 'even' : 'odd'
}

evenOrOdd(1)
evenOrOdd(2)
evenOrOdd('3')
evenOrOdd('4')
evenOrOdd(true)

