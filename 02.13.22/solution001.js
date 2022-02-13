// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

//PREP

//P: given normal price (whole integer), duty free discount(integer), and cost of holiday (integer)
//R: return integer (rounded down), of how many bottles you need to buy to make up for the vacation
//E:

function dutyFree(normPrice, discount, hol){
    //variable to hold the price with discount
    let price = normPrice * (discount * .01)
    //formula to find how many bottles you need to make up the cost of holiday
    let result = hol / price
    //returning and rounding down the result
    return Math.floor(result)
};