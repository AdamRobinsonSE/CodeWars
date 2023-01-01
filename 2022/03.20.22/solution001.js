//PREP
//P:Given an array of scores to matchups as strings that looks like 'x:y'
    // x > y = 3 pts
    // x < y = 0 pts
    // x = y = 1 pt
//R: Return the total number of points scored for the season
//E:


function points2(games){
    let total = 0
    games.map(e => {
        if (e[0] === e[2]){
            total += 1
        }else if (e[0] > e[2]){
            total += 3
        }
    })
    return total
}

totalPoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])
totalPoints(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])
totalPoints(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])
totalPoints(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])
totalPoints(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])