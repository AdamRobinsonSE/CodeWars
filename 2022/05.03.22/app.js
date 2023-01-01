//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//
//For example, a multiplication table (string) for number == 5 looks like below:
//
//1 * 5 = 5
//2 * 5 = 10
//3 * 5 = 15
//4 * 5 = 20
//5 * 5 = 25
//6 * 5 = 30
//7 * 5 = 35
//8 * 5 = 40
//9 * 5 = 45
//10 * 5 = 50
//
//describe("Basic tests", () => {
//    it("Testing for fixed tests", () => {
//      assert.strictEqual(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
//      assert.strictEqual(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
//    });
//  })

function multiTable(number) {
    let table = ''
      for(let i = 1 ; i <= 10 ; i++){
      table += `${i} * ${number} = ${i * number}\n`
    }return table.slice(0,-1)
  }
  
 // Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
//
 // Function:
 // 
 // getNumberFromString(s)

 //describe("Basic tests", function() {
 //   it("should work as expected", function() {
 //     Test.assertSimilar(getNumberFromString("1"), 1);
 //     Test.assertSimilar(getNumberFromString("123"), 123);
 //     Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
 //   });
 // });

 function getNumberFromString(s) {
    let newArr = s.split('')
    return Number(newArr.filter(e => +e).join(''))
}