let palabra = prompt("Introduce una palabra o una frase: ")

let mensaje = document.getElementById("mensaje")
let text = ""

for (let index = 0; index < palabra.length; index++) {
    text += palabra[index] + "<br>"
}

mensaje.innerHTML = text