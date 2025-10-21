let p = document.getElementById("mensaje")
let texto = "";

let fecha = new Date()

let diasemana = fecha.getDay()
let aa = ""

let mes = fecha.getMonth()
let bb = ""

switch (mes) {
    case 0:
        bb = " enero "
        break;
    case 1:
        bb = " febrero "
        break;
    case 2:
        bb = " marzo "
        break;
    case 3:
        bb = " abril "
        break;
    case 4:
        bb = " mayo "
        break;
    case 5:
        bb = " junio "
        break;
    case 6:
        bb = " julio "
        break;
    case 7:
        bb = " agosto "
        break;
    case 8:
        bb = " septiembre "
        break;
    case 9:
        bb = " octubre "
        break;
    case 10:
        bb = " noviembre "
        break;
    case 11:
        bb = " dciembre "
        break;
    default:
        break;
}


switch (diasemana) {
    case 0:
        aa = "Domingo, "
        break;
    case 1:
        aa = "Lunes, "
        break;
    case 2:
        aa = "Martes, "
        break;
    case 3:
        aa = "Miercoles, "
        break;
    case 4:
        aa = "Jueves, "
        break;
    case 5:
        aa = "Viernes, "
        break;
    case 6:
        aa = "Sábado, "
        break;
    default:
        break;
}


let fecha1 = new Date(1990, 0, 6)

let diasemana1 = fecha1.getDay()
let aa1 = ""

let mes1 = fecha1.getMonth()
let bb1 = ""

switch (mes1) {
    case 0:
        bb1 = " enero "
        break;
    case 1:
        bb1 = " febrero "
        break;
    case 2:
        bb1 = " marzo "
        break;
    case 3:
        bb1 = " abril "
        break;
    case 4:
        bb1 = " mayo "
        break;
    case 5:
        bb1 = " junio "
        break;
    case 6:
        bb1 = " julio "
        break;
    case 7:
        bb1 = " agosto "
        break;
    case 8:
        bb1 = " septiembre "
        break;
    case 9:
        bb1 = " octubre "
        break;
    case 10:
        bb1 = " noviembre "
        break;
    case 11:
        bb1 = " dciembre "
        break;
    default:
        break;
}


switch (diasemana1) {
    case 0:
        aa1 = "Domingo, "
        break;
    case 1:
        aa1 = "Lunes, "
        break;
    case 2:
        aa1 = "Martes, "
        break;
    case 3:
        aa1 = "Miercoles, "
        break;
    case 4:
        aa1 = "Jueves, "
        break;
    case 5:
        aa1 = "Viernes, "
        break;
    case 6:
        aa1 = "Sábado, "
        break;
    default:
        break;
}

texto += "Hoy es: " + fecha.toLocaleDateString() + "<br>"
texto += "Hoy es: " + aa + fecha.getDate() + " de " + bb + " de " + fecha.getFullYear() + "<br><br>"



texto += "<strong>" + "Fecha 6 de enero de 1990:" + "</strong><br>"

texto += "Formato 1: " + fecha1.toLocaleDateString() + "<br>"
texto += "Formato 2: " + aa1 + fecha1.getDate() + " de " + bb1 + " de " + fecha1.getFullYear()



p.innerHTML = texto 