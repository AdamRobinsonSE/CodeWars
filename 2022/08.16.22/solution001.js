// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


function encrypt(text, n) {
    if(!text || n <= 0) return text // if the string is empty or n isn't positive, return text
    while (n--){ // a while loop that brings n to 0
        let result = ''; // sets result to '' at start each time
        for(let i = 1 ; i < text.length ; i += 2){ // for loop that that grabs all odd index elements and adds it to result
            result += text[i]
        }
        for(let i = 0; i < text.length ; i += 2){ // for loop that grabs all even index elements and adds it to result
            result += text[i]
        }
        text = result // text is now the new result
    }
    return text // returns final interation of the text
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
}

console.log(encrypt("012345", 1)); // "135024"
console.log(encrypt("012345", 2)); // "135024" -> "304152"
console.log(encrypt("012345", 3)); // "135024" -> "304152" -> "012345"

console.log(decrypt("This is a test!", 0)); // "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)); // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)) //  "This is a test!"