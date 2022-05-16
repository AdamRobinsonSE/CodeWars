// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

//PREP
//P: Given a string of DNA, are they always letters? is it ever an empty array? Give the complimentary array
     // A -> T / Vice Versa, C -> G vice versa

     function DNAStrand(dna){
        //set up a new arr to push letters into
        let result = []
        //split the string into an array
        let arr = dna.split('')
        //loop through array and replace letters and push them into result
        for (let i = 0 ; i < arr.length ; i++){
            if (arr[i] === 'A'){
              result.push('T')
            }else if (arr[i] === 'T'){
              result.push('A')
            }else if (arr[i] === 'C'){
              result.push('G')
            }else if (arr[i] === 'G'){
              result.push('C')
            }
        }return result.join('')    
    };
    
    DNAStrand('AAAA')
    DNAStrand('ATTGC')
    DNAStrand('GTAT')