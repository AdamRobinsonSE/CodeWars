//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//
//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//
//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//
//Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

//E: 

//Make a function that takes in two arguments (salary & bonus), bonus will be a boolean, if its true multiply the salary by 10, return the value with a prefix of "£" using "\u00A3"

function bonusTime(salary, bonus){
    return bonus === true ? `\u00A3${salary * 10}` : `\u00A3${salary}`
}

console.log(bonusTime(1000, true))