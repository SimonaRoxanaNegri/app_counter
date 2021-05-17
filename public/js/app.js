/* Bottone incrementa */

let btnIncrement = document.createElement("BUTTON");
let divButton = document.getElementById("buttons")
btnIncrement.setAttribute('content', 'test content');
btnIncrement.setAttribute('class', 'btn-custom');
btnIncrement.textContent = 'incrementa';
divButton.appendChild(btnIncrement).addEventListener("click", add);

/* Bottone decrementa */

let btnDecrease = document.createElement("BUTTON")
let divButton2 = document.getElementById("buttons")
btnDecrease.setAttribute('content', 'test content')
btnDecrease.setAttribute('class', 'btn-custom')
btnDecrease.textContent = 'diminuisci'
divButton2.appendChild(btnDecrease).addEventListener("click", decrease)

/* Bottone reset */

let btnReset = document.createElement("BUTTON")
let divButton3 = document.getElementById("buttons")
btnReset.setAttribute('content', 'test content')
btnReset.setAttribute('class', 'btn-custom')
btnReset.textContent = 'reset'
divButton3.appendChild(btnReset).addEventListener("click", reset)


let count = 0
let valueCounter = document.getElementById("count")
valueCounter.innerHTML = count

let fade = document.getElementById("spaceman-fade")

function add() {
    document.getElementById("count").innerHTML = ++count
    let currentBottom = parseInt(document.getElementById("spaceman").style.bottom) || 0
    document.getElementById("spaceman").style.bottom = currentBottom + 150 + "px"
    fade.classList.toggle("fade")

}

/* ALERT */

let divAlert = document.createElement("div")
let alertCustom = document.getElementById("alert")
alertCustom.appendChild(divAlert).addEventListener("click", decrease)

function decrease() {
    if (count > 0) {
        document.getElementById("count").innerHTML = --count
        let currentBottom = parseInt(document.getElementById("spaceman").style.bottom) || 0
        document.getElementById("spaceman").style.bottom = currentBottom + -150 + "px"
        fade.classList.toggle("fade")
    }
    else {
        document.getElementById("alert").innerHTML = `<div class="alert alert-custom alert-dismissible show alert-custom" role="alert">
        <strong>Attenzione!</strong> Sotto lo zero non è consentito andare.
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }

}
function reset() {
    count = 0
    document.getElementById("count").innerHTML = count
    document.getElementById("spaceman").style.bottom = 0 + "px"
}
