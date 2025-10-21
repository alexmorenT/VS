let nota = Number (prompt("Introduce una nota comprendida entre 0 y 10"))

let resultado = document.getElementById("notas")

if (nota >= 0 && nota <= 4.99){
    resultado.innerHTML = "SUSPENSO"
} else if (nota >= 5 && nota <= 6.99) {
    resultado.innerHTML = "APROBADO"
}  else if (nota >= 7 && nota <= 8.99) {
    resultado.innerHTML = "NOTABLE"
} else if (nota >=9 && nota <= 10){
    resultado.innerHTML = "SOBRESALIENTE"
} else {
    resultado.innerHTML = "Nota errónea"
}