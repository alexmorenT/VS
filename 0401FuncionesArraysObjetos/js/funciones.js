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

}