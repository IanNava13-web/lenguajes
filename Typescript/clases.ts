//Las clases en TS requieren de un encapsulamiento ademas del tipado fuerte

class Rectangulo {
    public base:number;
    public altura:number;
    public area: number;

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


//TS agrega modificadores de visibilidad y tipos a las clases
class Persona {
    nombre: string //En javascript no se agregan estas anotaciones a los atributos y metodos
    numero: number

    constructor( name: string, numbers: number ){
      this.nombre = name
      this.numero = numbers
    }

    metodo1(){
        return this.nombre + ", " + this.numero
    }
}

let objPersona = new Persona("Placa",123456)
console.log(objPersona.metodo1())

//Encapsulamiento
class Carro {
    public color: string     //Cualquier miembro de la clase puede acceder , por defecto
    protected placa: string  //Pueden acceder tanto la clase como aquellos que son heredados
    private dueno: string    //Solo puede acceder al miembro la propia clase en si

    public constructor(color: string, placa: string, dueno: string){
        this.color = color
        this.placa = placa
        this.dueno = dueno
    }

    public getPlaca(): string {
        return this.placa
    }

    private getDueno1(): string {
        return this.dueno
    }
    public getDueno2(): string {
        return this.dueno
    }

    public datos(): string {
        return "color: "+this.color+", placa: "+this.placa+", dueno: "+this.dueno
    }
}

const objCarro = new Carro( "rojo", "chu11asd", "Jim" )
console.log( objCarro.color )
// console.log( objCarro.placa )  Muestra error ya es un dato protegido
// console.log( objCarro.dueno )  Muestra error ya es un dato privado

console.log( objCarro.getPlaca() )
// console.log( objCarro.getDueno1() ) Da error ya que la funcion es privada
console.log( objCarro.getDueno2() ) //Se puede acceder al dato
console.log( objCarro.datos() )

//Los parametros del constructor tambien pueden tener su modificador. Modificador de visibilidad
class Person {
  public constructor(private name: string) {}  // name es privado

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());


//Readonly tambien puede aplicarse a los miembros de la clase
class Mascota {
    public readonly nombre: string
    constructor(nombre:string){
        this.nombre = nombre // Esto da error ya que no se puede cambiar
    }

    public getNombre(): string{
        return this.nombre
    }
}

const objMascota = new Mascota("Latus")  //Apartir de aqui, el miembro no puede cambiar
console.log(objMascota.nombre)
console.log(objMascota.getNombre())


//Implements: Herencia => { implements se usa para definir los atributos y metodos que debe tener una clase }
interface Animal1 {
    raza: string
    getRaza(): string
}

class Perro1 implements Animal1{
    public constructor( public raza: string ){
        this.raza = raza
    }
    public getRaza(): string {
        return this.raza
    }
}

const objPerro = new Perro1("Boxer")
console.log(objPerro.getRaza())


//Extends: Herencia => { extends permite que las clases obtengan los att y met de otras clases, una sola a otras }
class Animal {
    constructor(public nombre: string) {
        console.log(`Animal creado: ${this.nombre}`);
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre: string, public raza: string) {
        super(nombre); // Llamada a los atributos y metodos de la clase superior
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
    override hacerSonido() { //override hace que el metodo de la clase hija se sobreescriba
        console.log("El perro ladra.");
    }
}

const miPerro2 = new Perro2();
miPerro2.hacerSonido(); // Salida: "El perro ladra."
