// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

//PREP
//P: Given a string, and a number
//R: Return the string with the number of exclamation marks removed, left to right

function remove(s,n){
   for(let i = 0 ; i < n ; i++){
    s = s.replace("!", "")
   }
   return s 
};

//E:

console.log(remove('Hi!',1)) // 'Hi'
console.log(remove('!!!Hi !!Hi!',5)) // 'Hi Hi!'