//Los abstract son clases o metodos incompletos o de manera conceptual y deben ser implementados por clases derivadas
//Pero no se pueden instanciar

abstract class Animal {
    
    constructor(public nombre: string) {}

    abstract hacerSonido(): void; // Método abstracto sin implementación

    moverse(): void { // Método normal con implementación
        console.log(`${this.nombre} se está moviendo.`);
    }
}

class Perro extends Animal {
    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}

// const animal = new Animal("Genérico"); // Error: No se puede instanciar una clase abstracta

const perro = new Perro("Firulais");
perro.hacerSonido(); // Salida: "Firulais dice: ¡Guau!"
perro.moverse();     // Salida: "Firulais se está moviendo."

const gato = new Gato("Michi");
gato.hacerSonido(); // Salida: "Michi dice: ¡Miau!"
