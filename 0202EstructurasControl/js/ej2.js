

let arr = new Array();
let numMayor = 0;


for (let index = 0; index < 3; index++) {

    let num = Number(prompt("Ingrese un número"))
    arr.push(num)
    if (num > numMayor){
        numMayor = num;
    }
}



let h = document.getElementById("numeros")

h.innerHTML = "El número mayor de " + arr[0] + ", " + arr[1]    
                        + " y " + arr[2] + " es: " + numMayor;



