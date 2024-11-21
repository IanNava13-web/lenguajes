"use strict";
//Las clases en TS requieren de un encapsulamiento ademas del tipado fuerte
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
let clase = new Rectangulo(2, 3);
console.log(clase.calcularArea());
//TS agrega modificadores de visibilidad y tipos a las clases
class Persona {
    constructor(name, numbers) {
        this.nombre = name;
        this.numero = numbers;
    }
    metodo1() {
        return this.nombre + ", " + this.numero;
    }
}
let objPersona = new Persona("Placa", 123456);
console.log(objPersona.metodo1());
//Encapsulamiento
class Carro {
    constructor(color, placa, dueno) {
        this.color = color;
        this.placa = placa;
        this.dueno = dueno;
    }
    getPlaca() {
        return this.placa;
    }
    getDueno1() {
        return this.dueno;
    }
    getDueno2() {
        return this.dueno;
    }
    datos() {
        return "color: " + this.color + ", placa: " + this.placa + ", dueno: " + this.dueno;
    }
}
const objCarro = new Carro("rojo", "chu11asd", "Jim");
console.log(objCarro.color);
// console.log( objCarro.placa )  Muestra error ya es un dato protegido
// console.log( objCarro.dueno )  Muestra error ya es un dato privado
console.log(objCarro.getPlaca());
// console.log( objCarro.getDueno1() ) Da error ya que la funcion es privada
console.log(objCarro.getDueno2()); //Se puede acceder al dato
console.log(objCarro.datos());
//Los parametros del constructor tambien pueden tener su modificador. Modificador de visibilidad
class Person {
    constructor(name) {
        this.name = name;
    } // name es privado
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());
//Readonly tambien puede aplicarse a los miembros de la clase
class Mascota {
    constructor(nombre) {
        this.nombre = nombre; // Esto da error ya que no se puede cambiar
    }
    getNombre() {
        return this.nombre;
    }
}
const objMascota = new Mascota("Latus"); //Apartir de aqui, el miembro no puede cambiar
console.log(objMascota.nombre);
console.log(objMascota.getNombre());
class Perro1 {
    constructor(raza) {
        this.raza = raza;
        this.raza = raza;
    }
    getRaza() {
        return this.raza;
    }
}
const objPerro = new Perro1("Boxer");
console.log(objPerro.getRaza());
//Extends: Herencia => { extends permite que las clases obtengan los att y met de otras clases, una sola a otras }
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
        console.log(`Animal creado: ${this.nombre}`);
    }
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llamada a los atributos y metodos de la clase superior
        this.raza = raza;
        console.log(`Es un ${this.raza}`);
    }
    hacerSonido() {
        super.hacerSonido(); // Llamada al método de la clase base
        console.log(`${this.nombre} ladra.`);
    }
}
const miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido();
//Si se quiere evitar el uso de metodos de una clase superior se usa la palabra override
class Animal2 {
    hacerSonido() {
        console.log("El animal hace un sonido.");
    }
}
class Perro2 extends Animal2 {
    hacerSonido() {
        console.log("El perro ladra.");
    }
}
const miPerro2 = new Perro2();
miPerro2.hacerSonido(); // Salida: "El perro ladra."
