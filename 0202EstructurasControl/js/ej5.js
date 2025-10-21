
let mensaje = document.getElementById("mensaje")

let dni;
do {
    dni = prompt ("Ingrese los números de su dni : ")
    if (dni === null){
        break;
    }
    dni = Number (dni)

    if (dni < 0 || dni > 99999999 || isNaN(dni)){
    alert("Ha introducido un número incorrecto")
    dni = null
}
} while (dni === null)

    if (dni !== null){
        alert("DNI válido")
    } else if (dni === 0){
        alert("Debes introducir un número válido")
    } else {
        alert("Has cancelado")
    }

    let letra = dni%23

    switch (letra) {
        case 0:
            mensaje.innerHTML = "La letra de tu dni es.. T"
            break;
        case 1:
            mensaje.innerHTML = "La letra de tu dni es.. R"
            break;
        case 2:
            mensaje.innerHTML = "La letra de tu dni es.. W"
            break;
        case 3:
            mensaje.innerHTML = "La letra de tu dni es.. A"
            break;
        case 4:
            mensaje.innerHTML = "La letra de tu dni es.. G"
            break;
        case 5:
            mensaje.innerHTML = "La letra de tu dni es.. M"
            break;
        case 6:
            mensaje.innerHTML = "La letra de tu dni es.. Y"
            break;
        case 7:
            mensaje.innerHTML = "La letra de tu dni es.. F"
            break;
        case 8:
            mensaje.innerHTML = "La letra de tu dni es.. P"
            break;
        case 9:
            mensaje.innerHTML = "La letra de tu dni es.. D"
            break;
        case 10:
            mensaje.innerHTML = "La letra de tu dni es.. X"
            break;
        case 11:
            mensaje.innerHTML = "La letra de tu dni es.. B"
            break;
        case 12:
            mensaje.innerHTML = "La letra de tu dni es.. N"
            break;
        case 13:
            mensaje.innerHTML = "La letra de tu dni es.. J"
            break;
        case 14:
            mensaje.innerHTML = "La letra de tu dni es.. Z"
            break;
        case 15:
            mensaje.innerHTML = "La letra de tu dni es.. S"
            break;
        case 16:
            mensaje.innerHTML = "La letra de tu dni es.. Q"
            break;
        case 17:
            mensaje.innerHTML = "La letra de tu dni es.. V"
            break;
        case 18:
            mensaje.innerHTML = "La letra de tu dni es.. H"
            break;
        case 19:
            mensaje.innerHTML = "La letra de tu dni es.. L"
            break;
        case 20:
            mensaje.innerHTML = "La letra de tu dni es.. C"
            break;
        case 21:
            mensaje.innerHTML = "La letra de tu dni es.. K"
            break;
        case 22:
            mensaje.innerHTML = "La letra de tu dni es.. E"
            break;
        
        default:
            break;
    }




