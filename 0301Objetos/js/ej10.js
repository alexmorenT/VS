let mensaje = document.getElementById("mensaje")

let text = ""

text += "<strong>PROPIEDADES DEL OBJETO NUMBER</strong>" + "<br>"
text += "Propiedad MAX_VALUE: " + Number.MAX_VALUE + "<br>"
text += "Propiedad MIN_VALUE: " + Number.MIN_VALUE + "<br>"
text += "Propiedad MAX_SAFE_INTEGER: " + Number.MAX_SAFE_INTEGER + "<br>"
text += "Propiedad NaN: " + Number.NaN + "<br>"
text += "Propiedad POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY + "<br>"
text += "Propiedad NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY + "<br>"

text += "<br>"
text += "<br>"
text += "<br>"


let pi = Math.PI
text += "<strong>FUNCIONES Y MÉTODOS</strong>" + "<br>"
text += "Número PI: " + pi + "<br>"
text += "¿Es un número finito?: " + Number.isFinite(pi) + "<br>"
text += "¿Es un valor entero?: " + Number.isInteger(pi) + "<br>"
text += "¿Es un valor entero seguro?: " + Number.isSafeInteger(pi) + "<br>"
text += "Notación exponencial: " + pi.toExponential() + "<br>"
text += "Notación exponencial con 4 decimales: " + pi.toExponential(4) + "<br>"
text += "Redondea a 4 decimales: " + pi.toFixed(4) + "<br>"
text += "Número con 4 cifras (entre parte entera y parte decimal): " + pi.toPrecision(4) + "<br>"
text += "PI por un 1 millón y redondear a dos decimales. Formato de punto para miles y coma para decimales: " + (pi * 1000000).toLocaleString("es-ES") + "<br>"
text += "PI por un 1 millón y redondear a dos decimales. Formato de coma para miles y punto para decimales: " + (pi * 1000000).toLocaleString("en-US") + "<br>"
text += "PI con formato moneda en español: " + Number(pi.toFixed(2)).toLocaleString("es-ES", {style:'currency', currency:'EUR', maximumFractionDigits: 2}) + "<br>"
mensaje.innerHTML = text