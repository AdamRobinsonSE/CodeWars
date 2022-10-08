// Day 1 String Challenges Huntober

// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// COPY
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:

// COPY
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

function day1(str){ 
    for(let i = 0 ; i < str.length ; i++){
        if (str[i] === '0') {
            str = str.replace('0', 'O');
        } else if (str[i] === '0') {
            str = str.replace('0', 'O');
        } else if (str[i] === '1') {
            str = str.replace('1', 'I');
        } else if (str[i] === 'I') {
            str = str.replace('I', '1');
        } else if (str[i] === '2') {
            str = str.replace('2', 'Z');
        } else if (str[i] ==='Z') {
            str = str.replace('Z', '2');
        } else if (str[i] === '3') {
            str = str.replace('3', 'E');
        } else if (str[i] === 'E') {
            str = str.replace('E', '3');
        } else if (str[i] === '4') {
            str = str.replace('4', 'h');
        } else if (str[i] === 'h') {
            str = str.replace('h', '4');
        } else if (str[i] === '5') {
            str = str.replace('5', 'S');
        } else if (str[i] === 'S') {
            str = str.replace('S', '5');
        } else if (str[i] === '6') {
            str = str.replace('6', 'G');
        } else if (str[i] === 'G') {
            str = str.replace('G', '6');
        } else if (str[i] === '7') {
            str = str.replace('7', 'L');
        } else if (str[i] === 'L') {
            str = str.replace('L', '7');
        } else if (str[i] === '8') {
            str = str.replace('8', 'B');
        } else if (str[i] === 'B') {
            str = str.replace('B', '8');
        } else if (str[i] === '9') {
            str = str.replace('9', 'q');
        } else if (str[i] === 'q') {
            str = str.replace('q', '9');
        }
    }
    return str
}

console.log(day1("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." )) // "PRO-TIP #498: IT'S NICE TO SAY HELLO."