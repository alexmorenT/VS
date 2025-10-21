
let mensaje = document.getElementById("mensaje")
let frase = "la ruta NOS aporto otro paso natural"
let text = ""

function cuentaPalabras(frase) {
    let numPalabras = 0

    let ar = frase.split(" ")

    for (let index = 0; index < ar.length; index++) {
        numPalabras++
    }

    return numPalabras
}

function primeraMayus(frase) {

    let fraseNueva = frase.toLowerCase()
    return fraseNueva.replace(fraseNueva.charAt(0), fraseNueva.charAt(0).toUpperCase())

}

function primeraUltimaP(frase) {
    let ar = frase.split(" ")

    let primera = ""
    let segunda = ""

    for (let index = 0; index < ar.length; index++) {
        primera = ar[0]
        segunda = ar[ar.length - 1]
    }

    return "" + primera + " " + segunda
}

function ahorcado(frase, reemplazp = "_") {
    let ar = frase.split(" ")

    let primera = ""
    let ultima = ""

    for (let index = 0; index < ar.length; index++) {
        primera = ar[0]
        ultima = ar[ar.length - 1]
    }
}

function esPalindromo(frase) {
    let frase1 = frase.replace(/\s+/g, "")
    let reves = ""
    for (let index = frase1.length - 1; index >= 0; index--) {
        reves += frase1[index]
    }
    if (reves.toLowerCase() == frase1.toLowerCase()) {
        return "Sí"
    } else {
        return "No"
    }
}

text += "Frase: " + frase + "<br><br><br>"
text += "a) Número de palabras: " + cuentaPalabras(frase) + "<br>"
text += "b) Primera letra en mayúsculas, resto minúsculas: " + primeraMayus(frase) + "<br>"
text += "c) Primera y última palabra: " + primeraUltimaP(frase) + "<br>"
text += "d) Ahorcado: " + "<br>"
text += "e) Palíndromo: " + esPalindromo(frase) + "<br>"
mensaje.innerHTML = text