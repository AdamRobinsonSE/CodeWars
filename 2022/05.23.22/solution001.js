// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

//PREP
//P: Make a Ball class
//R: has a parameter of ballType, but a default of regular if not provided
//E:

class Ball { // class creation
    constructor(ballType = 'regular'){ //parameter of ballType with a default of regular if not provided
        this.ballType = ballType
    }
}

let ball1 = new Ball
let ball2 = new Ball('super')