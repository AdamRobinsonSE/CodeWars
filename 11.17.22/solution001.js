// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    if (isNaN(num)) return 'NaN'


    let result = String(num).split('')
                            .map(num => {
                                return num % 2 !== 0 ? `-${num}-` : num
                            })

    return result.join('').split('-').filter(e => e !== '').join('-')
};

console.log(dashatize(274)) // 2-7-4
console.log(dashatize(6815)) // 68-1-5
