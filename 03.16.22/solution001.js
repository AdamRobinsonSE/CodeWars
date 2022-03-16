// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//PREP
//P: Given variable s = km per hour, convert it to cm per second rounded down to the integer
//R: return it
//E:

function cockroachSpeed(s) {
    return Math.floor(s * 27.7778) // use mathfloor to round down to nearest integer
}

cockroachSpeed(1.08)
cockroachSpeed(1.09)