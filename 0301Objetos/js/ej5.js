let anyo = parseInt(prompt("Introduce el año"))
let mensaje = document.getElementById("mensaje")

if ((anyo % 4 === 0 && anyo % 100 !== 0) || anyo % 400 === 0) {
    mensaje.innerHTML = "Es un año bisiesto"
} else {
    mensaje.innerHTML = "No es un año bisiesto"
}