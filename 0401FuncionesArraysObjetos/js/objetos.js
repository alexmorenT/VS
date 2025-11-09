
// Ejercicio 1

let Cuenta = {
    nombre: "Alexander",
    apellido1: "Moreno",
    apellido2: "Troconis",
    saldo: 0,
    nombreTitular: function () { return this.nombre + " " + this.apellido1 + " " + this.apellido2 },
    ingresar: function (cantidad) { return this.saldo += cantidad },
    retirar: function (cantidad) {
        if (cantidad > this.saldo) {
            return this.saldo
        } else {
            return this.saldo -= cantidad
        }
    },
    infoSaldo: function () { return "Su saldo actual es de: " + this.saldo + " €" }
}



function ingresarDinero(Cuenta) {
    let cantidad = parseFloat(prompt("Ingresa la cantidad que quieres ingresar: "))
    Cuenta.ingresar(cantidad)
    document.getElementById("saldo").textContent = Cuenta.infoSaldo()
}

function sacarDinero(Cuenta) {
    let cantidad = parseFloat(prompt("Ingresa la cantidad que quieres retirar: "))
    Cuenta.retirar(cantidad)
    if (Cuenta.saldo < cantidad) {
        alert("SALDO INSUFICIENTE. Su saldo actual es de: " + Cuenta.saldo)
    }
    document.getElementById("saldo").textContent = Cuenta.infoSaldo()
}

// Ejercicio 2

let codigo = 1

function Concesionario(nombre, direccion, ciudad, telefono, responsable) {
    this.codigo = codigo;
    codigo++;
    this.nombre = nombre;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.responsable = responsable;

    this.mostrarDatos = function () {
        return `<tr>
        <td>${this.codigo}</td>
        <td>${this.nombre}</td>
        <td>${this.direccion}</td>
        <td>${this.ciudad}</td>
        <td>${this.telefono}</td>
        <td>${this.responsable}</td>
    </tr>`

    }
}

function Coches(marca, modelo, anyo, concesionario) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.concesionario = concesionario;

    this.mostrarDatos = function () {
        return `<tr>
        <td>${this.marca}</td>
        <td>${this.modelo}</td>
        <td>${this.anyo}</td>
        <td>${this.concesionario.nombre}</td>
        </tr>`

    }
}

const conce = []
let con1 = new Concesionario("Alcalá", "C/Salsipuedes 123", "Madrid", "9155555", "Miguelito")
let con2 = new Concesionario("Majadahonda", "C/Pereza 19", "Majadahonda", "", "")
conce.push(con1)
conce.push(con2)

const coches = []
let c1 = new Coches("Seat", "Toledo", "1999", con1) 
let c2 = new Coches("Ferrari", "Paganni", "2010", con2)
let c3 = new Coches("BMW", "Z4", "2010", con1)
coches.push(c1)
coches.push(c2)
coches.push(c3)

 let tablaConcesionario = `<h2>Concesionarios</h2>
            <table border="1" cellpadding="5">
        <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Teléfono</th>
            <th>Responsable</th>
        </tr>`;

 for (let index = 0; index < conce.length; index++) {
    tablaConcesionario += conce[index].mostrarDatos();
}



tablaConcesionario += " </table>";

 let tablaCoches = `<h2>Coches</h2>
            <table border="1" cellpadding="5">
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Concesionario</th>
        </tr>`;
 for (let index = 0; index < coches.length; index++) {
    tablaCoches += coches[index].mostrarDatos();
}

tablaCoches += " </table>";


// Ejercicio 3

const alumnos = [
    {
        nombre: "José",
        edad: 20,
        nota: 2
    },
    {
        nombre: "Alex",
        edad: 24,
        nota: 5
    },
    {
        nombre: "Victor",
        edad: 20,
        nota: 7.2
    },
    {
        nombre: "Fernando",
        edad: 27,
        nota: 10
    },
    {
        nombre: "Laura",
        edad: 25,
        nota: 10
    },
    {
        nombre: "Elia",
        edad: 20,
        nota: 3.5
    }
]

let aprobados = ""

for (let index = 0; index < alumnos.length; index++) {
    if (alumnos[index].nota >= 5){
        if(aprobados !== ""){
            aprobados += ", "
        }
        aprobados += alumnos[index].nombre
    }
}

let nombres = ""

for (let index = 0; index < alumnos.length; index++) {
    if(nombres !== ""){
            nombres += ", "
        }
        nombres += alumnos[index].nombre
}

let media = 0

for (let index = 0; index < alumnos.length; index++) {
        media += alumnos[index].nota
}
     media = media / alumnos.length 

      




