// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//PREP
//P: given a string that may or may contain a '#'
//R: return the string without the '#' and anything after it
//E:

function removeUrlAnchor(url){
    let newArr = url.split('#') // turn url into an array
    return newArr.slice(0,1).join('') // slice it from index 0 to start of index 1, join it back together a string
};

removeUrlAnchor('www.codewars.com#about')
removeUrlAnchor('www.codewars.com/katas/?page=1#about')
removeUrlAnchor('www.codewars.com/katas/')