let num = parseFloat(prompt("Introduce un número decimal: "))
let dec = parseInt(prompt("Introduce el número de decimales al que se quiere redondear: "))

let parrafo = document.getElementById("mensaje")

let resultado = Math.round(num * 10 ** dec) / 10 ** dec

parrafo.innerHTML = "Número redondeado: " + resultado


