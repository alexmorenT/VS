let num = Number(prompt("Introduce el número"))
let mensaje = document.getElementById("mensaje")
let numEntero = parseInt(num)
if ((num - numEntero) == 0) {
    mensaje.innerHTML = "El número " + num + " es un entero"
} else if ((num - numEntero) !== 0) {
    mensaje.innerHTML = "No es un número entero"
} else if (num == nul || isNaN(num)){
    mensaje.innerHTML = "No es un número entero"
} 


