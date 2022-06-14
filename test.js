let player1Time = 100
let player2Time = 107

function getFastestRacetime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

//let fastetsRace = getFastestRacetime()

// console.log(fastetsRace)

function totalRaceTime() {
   return player1Time + player2Time
}
let total = totalRaceTime()

console.log(total)