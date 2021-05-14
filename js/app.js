/* Bottone incrementa */

let btnIncrement = document.createElement("BUTTON");
let divButton = document.getElementById("buttons")
btnIncrement.setAttribute('content', 'test content');
btnIncrement.setAttribute('class', 'btn-add');
btnIncrement.textContent = 'incrementa +';
divButton.appendChild(btnIncrement).addEventListener("click", add);

/* Bottone decrementa */

let btnDecrease = document.createElement("BUTTON");
let divButton2 = document.getElementById("buttons")
btnDecrease.setAttribute('content', 'test content');
btnDecrease.setAttribute('class', 'btn-decrease');
btnDecrease.textContent = 'diminuisci -';
divButton.appendChild(btnDecrease).addEventListener("click", decrease);


let valueCounter = document.getElementById("count")
let count = 0
valueCounter.innerHTML = count
function add() {
    return document.getElementById("count").innerHTML = ++count
}
function decrease() {
    if (count > 0)
        return document.getElementById("count").innerHTML = --count
}

