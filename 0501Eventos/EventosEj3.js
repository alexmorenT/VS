document.addEventListener("DOMContentLoaded", () => {

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
document.addEventListener("keypress", keypress);
document.getElementById("boton").addEventListener("click", muestraMensaje);


let text= "";

function keydown(e){
    console.log("Evento: keydown / Tecla: " + e.key);
    
}

function keyup(e){
    console.log("Evento: keyup / Tecla: " + e.key);

}

function keypress(e){
    console.log("Evento: keypress / Tecla: " + e.key + " / Código: " + e.code);
    text += e.key;
}



function muestraMensaje(e){
document.getElementById("mensaje").textContent = text;
}
})


