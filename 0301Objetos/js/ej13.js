let palabra = prompt("Introduce una palabra")

let mensaje = document.getElementById("mensaje")

let text = ""

text += "Palabra: " + palabra + "<br>"

function tieneVocales(palabra) {
    const vocales = "aáeéiíoóuú"
    let cantidadVocales = 0
    for(const letra of palabra){
        if (vocales.includes(letra.toLowerCase())){
            cantidadVocales++
        }
    }
    return cantidadVocales
}



function fugarVocales(palabra, reemplazo = "_") {
  return palabra.replace(/[aáeéiíoóuúAÁEÉIÍOÓUÚ]/g, reemplazo);
}

function consonanteMayus(palabra){
    let resultado = ""
    for(let letra of palabra){
        if ("bcdfghjklmnpqrstvwxyz".includes(letra.toLowerCase())){
            resultado += letra.toUpperCase();
        }
    }
    return resultado;
}


function primerUltimaMinus(palabra){
   let primera = palabra.charAt(0) 
   let ultima = palabra.charAt(palabra.length-1)
    return primera.toLowerCase() + ultima.toLowerCase()
}

function letrasenPares(palabra){
    let pares = ""
    for (let index = 1; index < palabra.length; index+=2) {
        pares += palabra[index]
    }
    return pares
}

function esPalindromo (palabra){

    let reves = ""
    for (let index = palabra.length-1; index >= 0; index--) {
        reves += palabra[index]
    }
    if (reves.toLowerCase() == palabra.toLowerCase()){
        return "Sí"
    } else {
        return "No"
    }
}


function palabraenDos(palabra){
        let mitad = 0

     if (palabra.length % 2 == 0){
            mitad = palabra.length / 2
        } else {
            mitad = Math.floor(palabra.length/2) + 1
        }

        let parte1 = palabra.slice(0, mitad)
        let parte2 = palabra.slice(mitad)

        return parte1 + " - " + parte2
}

text += "a) Número de vocales: " + tieneVocales(palabra) + "<br>"
text += "b) Fuga de vocales: " + fugarVocales(palabra) + "<br>"
text += "c) Consonante en mayúsculas: " + consonanteMayus(palabra) + "<br>"
text += "d) Primera y última letra en minúscula: " + primerUltimaMinus(palabra) + "<br>"
text += "e) Letras en posiciones pares: " + letrasenPares(palabra) + "<br>"
text += "f) Es palíndromo: " + esPalindromo(palabra) + "<br>"
text += "g) Palabra en dos: " + palabraenDos(palabra) + "<br>"
mensaje.innerHTML = text