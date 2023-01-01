 // Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function mostCharacters(str){
    const map = {}

    for(const letters of str){
        if (map[letters]){
            map[letters]++
        } else {
            map[letters] = 1
        }
    }

    return Object.values(map).reduce((a,b) => map[a] > map[b] ? a : b)
}

console.log(mostCharacters('Hello World!')) // l