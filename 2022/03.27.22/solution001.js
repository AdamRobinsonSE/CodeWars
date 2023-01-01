// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


//PREP
//P: given month as 1-12
//R: return 1-3 as 1, 4-6 as 2, 7-9 as 3, 10-12 as 4
//E:

const quarterOf = (month) => {
    //condtional to check if month falls between 1-3, 4-6, 7-9, 10-12
    if (month <= 3){
        return 1
    }else if (month <= 6){
        return 2
    }
    else if (month <= 9){
        return 3
    }else {
        return 4
    }
};

quarterOf(3)
quarterOf(8)
quarterOf(11)