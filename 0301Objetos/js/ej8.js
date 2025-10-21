let a = prompt("Introduce la longitud del cateto 1: ")
let b = prompt("Introduce la longitud del cateto 2: ")

let c = (Math.pow(a, 2) + Math.pow(b, 2))

let mensaje = document.getElementById("mensaje")

mensaje.innerHTML = "La hipotenusa es: " + c

