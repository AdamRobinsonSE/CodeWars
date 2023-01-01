// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//PREP
//Parameter: one string, contains a card and its suit symbol
//Return: the suit
//Examples:
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
//Pseudo: take the last character of the parameter, and say if its spades, diamonds, hearts, or clubs

function defineSuit(card) {
    const hearts = '♥' // holds hearts
    const diamonds = '♦' // holds diamonds
    const spades = '♠' // holds spades
    //comparison if the last character of card is equal to the variables
    if(card.slice(-1) === hearts){ 
        return 'hearts'
    }else if(card.slice(-1) === diamonds){
        return 'diamonds'
    }else if(card.slice(-1) === spades){
        return 'spades'
    }else {
        return 'clubs'
    }
};

console.log(defineSuit('Q♥')) // spades
console.log(defineSuit('9♦')) // diamonds
console.log(defineSuit('J♥')) // hearts
