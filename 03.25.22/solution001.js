// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

//PREP
//P: Given 2 angles, find the 3rd of a triangle. Are they always numbers? Are they always positive?
//R: Return them



function otherAngle(a, b) {
    //triangle angles must always equal 180, simple subtraction equation 
    return 180 - (a + b)
  }


//E:

otherAngle(30,60)
otherAngle(60,60)
otherAngle(43,78)