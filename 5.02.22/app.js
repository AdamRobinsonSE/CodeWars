//You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:
//
//Weekday Month Day, time e.g., Friday May 2, 7pm
//
//You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
//
//Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.
//
//Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

//describe("Tests", () => {
//    it("test", () => {
//  Test.assertEquals(shortenToDate("Friday May 2, 9am"), "Friday May 2");
//  Test.assertEquals(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
//  Test.assertEquals(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
//    });
//  });
  
function shortenToDate(longDate) {
	return longDate.split(' ').slice(0, 3).join(' ').replace(',','')
}

//Create a function that takes a string and an integer (n).
//
//The function should return a string that repeats the input string n number of times.
//
//If anything other than a string is passed in you should return "Not a string"
//
//Example
//"Hi", 2 --> "HiHi"
//1234, 5 --> "Not a string"

//describe("Tests", () => {
//    it("test", () => {
//  Test.assertEquals(repeatIt("*",3), "***", 'Returned unexpected value')
//  Test.assertEquals(repeatIt("Hello",11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello", 'Returned unexpected value')
//    });
//  });

var repeatIt = function(str, n) {
    let newStr = ''
    if(typeof(str) !== 'string'){
      return "Not a string"
    }else{
      for (let i = 0 ; i < n ; i++){
        newStr += str
    }return newStr
    }
};

//Template Strings
//Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
//Task
//Your task is to return the correct string using the Template String Feature.
//Input
//Two Strings, no validation is needed.
//Output
//You must output a string containing the two strings with the word ```' are '```
//Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

//describe("Tests", () => {
//    it("test", () => {
//  Test.assertEquals(TempleStrings("Animals","Good"), 'Animals are Good')
//  
//    });
//  });

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }