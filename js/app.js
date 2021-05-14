
document.getElementById("add").addEventListener("click", add)
document.getElementById("decrease").addEventListener("click", decrease)
//valore del count 
let count = 0

function add() {
    return document.getElementById("count").innerHTML = count++
}
function decrease() {
    return document.getElementById("count").innerHTML = --count
}

