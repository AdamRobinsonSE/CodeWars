// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//PREP
//P: you're always given a number between 0-9
//R: return the number as its english string (1 == 'One)
//E

function switchItUp(number){
    //switch statement
    switch (number) {
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return 'Three'
        case 4:
            return 'Four'    
        case 5:
            return 'Five'
        case 6:
            return 'Six'
        case 7:
            return 'Seven'
        case 8:
            return 'Eight'
        case 9:
            return 'Nine'
        case 0:
            return 'Zero'
    }    
};