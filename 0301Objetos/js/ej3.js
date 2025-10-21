

let texto = document.getElementById("mensaje")

let fecha = prompt("Introduce la fecha con formato DD/MM/AAAA")
let diaActual = new Date()



if (diaActual.toLocaleDateString() == fecha) {
    texto.innerHTML = "SI es la misma fecha"
} else {
    texto.innerHTML = "NO es la misma fecha"
}

