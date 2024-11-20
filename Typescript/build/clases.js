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
