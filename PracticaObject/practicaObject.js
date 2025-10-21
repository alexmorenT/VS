// Primera manera para declarar un objeto

function Animal(nombre, tipo) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.hablar = function () {
    console.log(nombre + " está hablando");
  };
}

let perro = new Animal("Thor", "perro");

perro.hablar();

// Segunda manera

let persona = {
  nombre: "Alexander",
  edad: 25,

  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

persona.saludar();

// Tercer manera

let coche = new Object();

coche.marca = "Ferrari";
coche.modelo = "V8";
coche.describe = function () {
  console.log("Soy un " + this.marca + " modelo: " + this.modelo);
};

coche.describe();

// la manera más moderna (con Clases)

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Soy " + this.nombre + " con la siguiente edad: " + this.edad);
  }
}

let victor = new Persona("Victor", 19);
victor.saludar();
