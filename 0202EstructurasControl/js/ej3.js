let dia = prompt("Indica el día de la semana: ")

let text = document.getElementById("dia")

switch (dia.toLowerCase()) {
    case "lunes":
        text.innerHTML = "El día " + dia + " SÍ hay clases de DWEC"
        break;
    case "martes":
        text.innerHTML = "El día " + dia + " SÍ hay clases de DWEC"
        break;
    case "miercoles":
        text.innerHTML = "El día " + dia + " NO hay clases de DWEC"
        break;
    case "jueves":
        text.innerHTML = "El día " + dia + " NO hay clases de DWEC"
        break;
    case "viernes":
        text.innerHTML = "El día " + dia + " SÍ hay clases de DWEC"
        break;
    case "sabado":
        text.innerHTML = "El día " + dia + " NO hay clases de DWEC"
        break;
    case "domingo":
        text.innerHTML = "El día " + dia + " NO hay clases de DWEC"
        break;
    default:
        text.innerHTML = "No es un día de la semana"
        break;
}