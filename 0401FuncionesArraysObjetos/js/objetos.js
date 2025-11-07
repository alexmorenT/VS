
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

document.getElementById("nombre").textContent = "Titular de la cuenta: " + Cuenta.nombreTitular()

document.getElementById("saldo").textContent = Cuenta.infoSaldo()

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
        return ` <tr>
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
    this.direccion = direccion;
    this.anyo = anyo;
    this.concesionario = concesionario;

    this.mostrarDatos = function () {
        return ` <tr>
        <td>${this.marca}</td>
        <td>${this.modelo}</td>
        <td>${this.direccion}</td>
        <td>${this.anyo}</td>
        <td>${this.Concesionario.nombre}</td>
        </tr>`

    }
}

const conce = []
let con1 = new Concesionario("TercerMundo", "C/Salsipuedes 123", "Venezuela", "9155555", "Miguelito")
let con2 = new Concesionario("Majadahonda", "C/Pereza 19", "Majadahonda", "", "")
conce.push(con1)
conce.push(con2)

const coches = []
let c1 = new Coches("Seat", "Toledo", "1999", con1) 
let c2 = new Coches("Ferrari", "Sadmasomd", "2010", con2)
let c3 = new Coches("BMW", "Z4", "2010", con1)
coches.push(c1)
coches.push(c2)
coches.push(c3)

let tablaConcesionario = `<table border="1">
        <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Teléfono</th>
            <th>Responsable</th>
        </tr>`;

// for (let index = 0; index < conce.length; index++) {
//     tablaConcesionario += conce[index].mostrarDatos();
// }
tablaConcesionario += " </table>";
tablaConcesionario += " Hola";


