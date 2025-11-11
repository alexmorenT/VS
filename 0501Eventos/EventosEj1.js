
document.addEventListener("click", click);
document.addEventListener("wheel", wheel);
document.addEventListener("contextmenu", menu);

function menu(){
    console.log("Has abierto el menú contextual");
}


function click(e){

    let boton = "";
    switch (e.button) {
        case 0:
            boton = "izquierdo";
            break;
        case 1:
            boton = "central";
            break;
        case 2: 
            boton = "derecho";
        default:
            break;
    }

    console.log("click con el botón " + boton + " en las coordenadas: X: " + e.screenX + " Y: " + e.screenY);
}

function wheel(e){
    console.log("Ha movido la rueda del ratón");
}

