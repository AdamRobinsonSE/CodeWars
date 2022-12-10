// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

//PREP
//P: given a string
//R: return all # except last 4 characters, as long as it is > 4 characters
//E:

function maskify(cc) {
	let newArr = cc.split('') // split into an array
 	for (let i = 0 ; i < newArr.length - 4 ; i++){ // loop through the array 
    newArr[i] = '#' // replace all values up to the last 4 with '#'
  }
  return newArr.join('') // join it all back together
}

maskify('12345678')
maskify('hellobob')