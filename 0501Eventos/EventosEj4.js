document.addEventListener("DOMContentLoaded", () => {

    let contadorResize = 0;
    let contadorBlur = 0;
    let contadorBefore = 0;

    window.addEventListener("load", () => {
        alert("Se va a abrir la página Eventos HTML");
    })

    window.addEventListener("resize", () => {
        contadorResize++;
        document.getElementById("redimensionado").innerHTML = contadorResize;
    });

    window.addEventListener("blur", () => {
        contadorBlur++;
        document.getElementById("foco").textContent = contadorBlur;
    });

    window.addEventListener("beforeunload", () => {
        event.preventDefault();

        contadorBefore++;
        document.getElementById("cerrar").textContent += contadorBefore;

    });

});


