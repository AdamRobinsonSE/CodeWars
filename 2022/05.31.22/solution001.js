// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

//P: given a string containing 'n' and '_', 'n' presents bumps, '_' represents flat
//R: If there are more than 15 '_' return 'Car Dead', else 'Woohoo!'

//P:
function bump(x){
    //split x into an arr, filter through, and give length of '_'
    let roadArrBumps = x.split('').filter(e => e === 'n').length
    //ternary to see if its greater than or equal to 15
    return roadArrBumps > 15 ? 'Car Dead' : 'Woohoo!'
}

//E:

console.log(bump('n')) // 'Woohoo!'
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn')) // 'Car Dead'
console.log(bump('______n___n_')) // 'Woohoo!'