//Las clases en TS requieren de un encapsulamiento ademas del tipado fuerte

class Rectangulo {
    public base:number;
    public altura:number;

    constructor(base:number,altura:number) {
        this.base   = base;
        this.altura = altura;
    }

    calcularArea():number{
        return this.base*this.altura;
    }
}

let clase:Rectangulo = new Rectangulo(2,3);
console.log(clase.calcularArea());