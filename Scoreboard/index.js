let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")
let totalHome = 0
let totalAway = 0


function incrementHome() {
    totalHome += 1
    scoreHome.textContent = totalHome
}
function decrementHome() {
    totalHome -= 1
    scoreHome.textContent = totalHome
}
function incrementAway() {
    totalAway += 1
    scoreAway.textContent = totalAway
}
function decrementAway() {
    totalAway -= 1
    scoreAway.textContent = totalAway
}
function resetAll() {
    totalHome = 0
    totalAway = 0
    scoreAway.textContent = totalAway
    scoreHome.textContent = totalHome
}