// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

// add the value "codewars" to the websites array 1,000 times

var websites = []

function test (str,num) {
  for(let i = 0 ; i < num ; i++) {
    websites.push(str)
  }
  return websites
};

test('codewars',1000)

console.log(test('codewars',1000))