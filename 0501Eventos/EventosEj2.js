
document.getElementById("boton").addEventListener("click", click);
document.getElementById("des").addEventListener("click", click2);

let contador = 0; 
document.getElementById("mensaje").textContent = "Has hecho " + contador + " clicks";

function click(e){
    contador++;
    document.getElementById("mensaje").textContent = "Has hecho " + contador + " clicks";

}

function click2(e){
    contador = 0; 
    document.getElementById("mensaje").textContent = "Has hecho " + contador + " clicks";
}


