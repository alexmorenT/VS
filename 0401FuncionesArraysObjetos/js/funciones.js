// Ejercicio 1 

function numeroParoImpar(numero) {
    if (numero % 2 == 0) {
        return "<strong>par</strong>"
    } else {
        return "<strong>impar</strong>"
    }
}

// Ejercicio 2

function precioIva(precio, iva) {
    let txt = ""
    if (isNaN(precio) || precio == null || precio == undefined || iva == undefined || isNaN(iva) || iva == null) {
        txt = "Ha ocurrido un error"
    } else {
        precio = parseFloat(precio)
        iva = parseFloat(iva)

        txt = "Precio sin iva: " + "<strong>" + precio + "</strong>" + "<br>"
        txt += "IVA: " + "<strong>" + iva + "%" + "</strong>" + "<br>"
        let res = precio + (precio * iva) / 100
        txt += "Precio con IVA: " + "<strong>" + res.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }) + "</strong>"
    }
    return txt
}

// Ejercicio 3

function diasAnyo(mes, anyo) {

    if (mes > 12 || mes < 1 || anyo < 1) {
        return "La fecha " + mes + "/" + anyo + " tiene " + "<strong>" + 0 + "</strong>" + " días"
    } else {
        let dia = new Date(anyo, mes, 0).getDate()

        return "La fecha " + mes + "/" + anyo + " tiene " + "<strong>" + dia.toLocaleString() + "</strong>" + " días"
    }
}

// Ejercicio 4

function numAleatorio(x, y) {

    x = Number(x)
    y = Number(y)
    let random = Math.floor(Math.random() * (y - x + 1)) + x

    return random
}

// Ejercicio 6 

function palindromo(frase) {

    let fraseTrim = frase.trim().toLowerCase().replace(/\s+/g, '');
    let arr = fraseTrim.split('');
    let arrR = [...arr].reverse();
    let igual = arr.every((valor, i) => valor === arrR[i]);

    return igual;

}

// Ejercicio 7 

function fechaFormateada(fecha) {

    document.getElementById("mensaje").innerHTML += "Fecha de hoy: " + "<strong>" + fecha.toLocaleDateString() + "</strong>" + "<br>"

}

function diaSemana(fecha) {

    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

    document.getElementById("mensaje").innerHTML += "Día de la semana: " + "<strong>" + diasSemana[fecha.getDay()] + "</strong>" + "<br>"
}

function mes(fecha) {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octube", "Noviembre", "Diciembre"]
    document.getElementById("mensaje").innerHTML += "Mes: " + "<strong>" + meses[fecha.getMonth()] + "</strong>" + "<br>"
}

// Ejercicio 8

function cifrar(palabra) {
    let abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let abecedarioR = [...abecedario].reverse()

    let p = palabra.trim().toLowerCase()
    let nuevaP = ""

    for (let index = 0; index < p.length; index++) {
        if (abecedario.includes(p.charAt(index))) {
            nuevaP += abecedarioR[abecedario.indexOf(p.charAt(index))].toUpperCase()
        }
    }

    document.getElementById("mensaje").innerHTML = "Su palabra cifrada es: " + "<strong>" + nuevaP + "</strong>"



}