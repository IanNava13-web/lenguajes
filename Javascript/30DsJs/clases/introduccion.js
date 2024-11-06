console.log("Clases y objetos")

/*
Una clase es una plantilla, en la cual se crean objetos
Define atributos y comportamientos(metodos) de los objetos
Los objetos representan a las clases
La creacion de un objeto a partir de una clase se llama instancia

Un singleton es un objeto literal (instancia unica) pero con las clases
se crean multiples objetos instanciados de una clase
Las clases se definen como el estilo CamelCase
*/

class NombreClase {
}

//Instanciar significa crear un objeto
class Carro {
}

let carro1 = new Carro()

//Constructor: Se utiliza para inicializar las propiedades de un objeto, si no se agrega se crea automaticamente de forma vacia
class Persona {
  constructor(fname,lname){
    console.log(this) // this para adjuntar los parámetros del constructor con la clase.
    this.fname = fname
    this.lname = lname
  }
}

let person1 = new Persona("Asrael","linares")
let person2 = new Persona("Pedro","Pedro pedro pe")
let person3 = new Persona("John","Connor")
console.log(person1)
console.log(person2)
console.log(person3)

//El constructor tiene valores por defecto

class Casa {
  constructor(
      direccion = "cr n 123",
      numCuartos = 4,
      habitantes = 0,
    ){
      this.direccion = direccion
      this.numCuartos = numCuartos
      this.habitantes = habitantes
  }
}
let casa1 = new Casa()
let casa2 = new Casa("cr n - m 345",3,2)
console.log(casa1)
console.log(casa2)

//Metodos: Son funciones de js con las que el objeto puede manipular
class Home {
  constructor(
      direccion = "cr n 123",
      numCuartos = 4,
      habitantes = 0,
    ){
      this.direccion = direccion
      this.numCuartos = numCuartos
      this.habitantes = habitantes
  }

  getDescripcionHome(){
    const descripcion = this.direccion + ", " + this.numCuartos + ", " + this.habitantes
    return descripcion
  }
}
let home1 = new Home()

console.log(home1)
console.log(home1.getDescripcionHome())

/*
Propiedades con valor inicial
Es necesario que se tengan atributos con valor inicial sin estar nombradas como parametros en 
la funcion constructor
*/

class Mascota {
  constructor(nombre, altura, raza, color){
    this.nombre = nombre
    this.altura = altura
    this.raza = raza
    this.color = color
    this.codigoCollar = [123,345]
    this.dueno = "abcdefg"
  }

  getDescripcionMascota(){
    const descripcion = this.nombre + ", " + this.altura + ", " + this.raza + ", " + this.color + ", " + this.codigoCollar + ", " + this.dueno
    return descripcion
  }
}

const mascota1 = new Mascota("Kai",14,"cocker","dorado")

console.log(mascota1)
console.log(mascota1.getDescripcionMascota())
console.log(mascota1.nombre)
console.log(mascota1.codigoCollar)
console.log(mascota1.dueno)

//SETTER Y GETTER

//La palabra reservada get nos permite crear una funcion y acceder a los atributos sin necesidad de acceder a la valor directamente
//Los set modifican el valor de alguna propiedad, donde se aplica alguna logica

class Auto {
  constructor(tipo,altura){
    this.tipo = tipo
    this.altura = altura
    this.color = []
    this.placa = "abcd-321"
    this.kilometros = 0
  }

  getDescripcionAuto(){
    return this.tipo + ", " + this.altura + ", " + this.color + ", " + this.placa + ", " + this.kilometros
  }

  get getTipo(){
    return this.tipo
  }

  get getAltura(){
    return this.altura
  }

  get getColor(){
    return this.color
  }

  get getPlaca(){
    return this.placa
  }

  set setColor(color){
    this.color.push(color)
  }

  set setPlaca(placa){
    this.placa = placa
  }

  set setKilometros(km){
    this.kilometros = km
  }
}

const auto1 = new Auto("bus",5)
console.log(auto1)
console.log(auto1.altura) //Accediendo al atributo directamente
console.log(auto1.getDescripcionAuto())
console.log(auto1.getAltura)

console.log( auto1.getColor )
auto1.setColor = "Blanco"
auto1.setColor = "Rojo"
auto1.setColor = "Gris"
console.log( auto1.getColor )

/*Los metodos regulares y los getters son diferentes
importante el modo estricto*/

/*
Metodos estaticos: Son funciones que se llaman dentro de la misma clase y no por una instancia
Person.staticFunction() por ejemple Date.now
*/

/*
Herencia
Una clase puede acceder a todas los atributos y metodos de otra clase llamada padre con la palabra extends
*/

class Autobus extends Auto {
  getMessage(){
    return "Este es el mensaje de la clase hija"
  }
}

const autobus1 = new Autobus("Autobus hijo",10)

console.log(autobus1.getAltura)
console.log(autobus1.getDescripcionAuto())
autobus1.setColor = "Negro"
autobus1.setColor = "Amarillo"
console.log(autobus1.getColor)
console.log(autobus1.getMessage())

/*Para trabajar con los metodos de la clase padre en la clase hija, es decir personalizarlos en la clase hija
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Sonido de animal");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Llama al constructor de la clase Animal
        this.breed = breed;
    }

    makeSound() {
        super.makeSound(); // Llama al método makeSound() de Animal
        console.log("Ladrido");
    }
}

const myDog = new Dog("Firulais", "Pastor Alemán");
console.log(myDog.name); // Firulais
console.log(myDog.breed); // Pastor Alemán
myDog.makeSound();
// Salida:
// Sonido de animal
// Ladrido
