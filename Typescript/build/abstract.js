"use strict";
//Los abstract son clases o metodos incompletos o de manera conceptual y deben ser implementados por clases derivadas
//Pero no se pueden instanciar
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    moverse() {
        console.log(`${this.nombre} se está moviendo.`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}
// const animal = new Animal("Genérico"); // Error: No se puede instanciar una clase abstracta
const perro = new Perro("Firulais");
perro.hacerSonido(); // Salida: "Firulais dice: ¡Guau!"
perro.moverse(); // Salida: "Firulais se está moviendo."
const gato = new Gato("Michi");
gato.hacerSonido(); // Salida: "Michi dice: ¡Miau!"
