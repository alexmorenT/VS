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

    if (mes > 12 || mes < 1 || anyo < 1 ){
        return "La fecha " + mes + "/" + anyo + " tiene " + "<strong>" + 0 + "</strong>" + " días"
    } else {
        let dia = new Date(anyo, mes, 0).getDate()

        return "La fecha " + mes + "/" + anyo + " tiene " + "<strong>" + dia.toLocaleString() + "</strong>" + " días"
    }
}

// Ejercicio 4

function numAleatorio(x, y){
    
        x = Number(x)
        y = Number(y)
        let random = Math.floor(Math.random() * (y - x + 1)) + x

        return "Número aleatorio entre " + x + " y " + y + ": " + "<strong>" + random + "</strong>"  
}