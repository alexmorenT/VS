
let claveCorrecta = "manzana"

let respuesta = document.getElementById("mensaje")
let clave 

do {
   clave = prompt ("Ingrese la clave: ")
} while (clave !== claveCorrecta && clave !== null)


if (clave == claveCorrecta){
    respuesta.innerHTML = "BIEN; ACERTASTE" 
    respuesta.style.color = "green"
} else if (clave == null){
    respuesta.innerHTML = "NO lo has conseguido, has cancelado el reto"
    respuesta.style.color = "red"
}
