let mensaje = document.getElementById("mensaje")
let dia = parseInt(prompt("Introduce tu dia de nacimiento: "))
let mes = parseInt(prompt("Introduce tu mes de nacimiento: "))
let anyo = parseInt(prompt("Introduce tu año de nacimiento: "))
let texto = ""

let diahoy = new Date()

texto += "Fecha de hoy: " + diahoy.toLocaleDateString() + "<br>"
texto += "Fecha de nacimiento: " + dia + "/" + mes + "/" + anyo + "<br>"

// faltan las condiciones de del día y mes !!!

let edad = diahoy.getFullYear() - anyo
let aunNoCumple = diahoy.getMonth() + 1

if (aunNoCumple < mes) {
    edad = edad - 1
} else {
    edad = edad
}

texto += "Tu edad es: " + edad


mensaje.innerHTML = texto