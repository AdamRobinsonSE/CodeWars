// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//PREP
//P: Given a string, remove all exclamation marks from it
//R: Return it


function removeExclamationMarks(s) {
    //split into array, filter through each element that isnt a !, join back together
    return s.split('').filter(e => e !== '!').join('')
};

//E:

removeExclamationMarks('Hello World!')
removeExclamationMarks('5!')