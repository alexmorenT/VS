let num = Number(prompt("Introduce un número decimal: "))
let dec = parseInt(prompt("Introduce el número de decimales al que se quiere redondear: "))
let mensaje = document.getElementById("mensaje")

let resultado = Number(num.toFixed(dec))
mensaje.innerHTML = "Número redondeado: " + resultado.toLocaleString("es-ES")

if (num == null || num == undefined || isNaN (num)){
    mensaje.innerHTML = "No se ha podido realizar la operación"
}

