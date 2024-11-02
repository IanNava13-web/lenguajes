console.log("Programacion orientada a objetos")

/*Si las variables fuera declaradas sin una referencia let, var o const, entonces se asume que son
variables globales*/

a = "JavaScript"; // declarar una variable sin let o const la hace disponible en el objeto window y esta se encuentra en cualquier lugar
b = 10; // es una variable de scope global y se encuentra en el objeto ventana
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accesibles
letsLearnScope()


c = 122
d = "aprendiendo JavaScript y Python"

function entidades() {
  console.log(c,d)
  if(true){
    let c = -100
    let d = "cambiando cadena"
    console.log(d,c)
  }
  console.log(c,d)
}

entidades()
console.log(c,d)
/*
var es una variable de alcance de funcion
let es una variable de bloque, por lo que no puede ser reasignada
*/

function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity) Uncaught ReferenceError: la gravedad no está definida
// solo esta definida dentro de la funcion

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

//let y var solo tienen alcance de bloque, no de funcion por lo que no se reconoceran en otro lado

/*
  QUE ES UN OBJETO
Los objetos tienen propiedades y metodos, cuyas propiedades tienen valores
por lo que un objeto es un par { clave : valor }, para crear un objeto se 
requiere de solo de {}
*/

const persona = {}
console.log(persona)
console.log(typeof persona)

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);

//Accediendo a los datos de un objeto
//Se puede utilizar [] o .

console.log( person.age )
console.log( person.city )

console.log( person["isMarried"] ) // Importante las comillas
// console.log( person[isMarried])
console.log( person["skills"][2] ) // Importante las comillas

/*
Creando un metodo de objeto
Funciones dentro de un objeto
*/

let carro = {
  color: "rojo",
  valor: 10000000,
  puertas: 4,
  ventanas: ["cuadrada", "circular"],
  getCaracteristicas: function () {
    return `${this.color} - ${this.valor} - ${this.puertas}`
  }
}
  // this es una palabra reservada

console.log( carro.color )
console.log( carro["color"] )
console.log( carro.getCaracteristicas() )
console.log( carro["getCaracteristicas"]() )

//Como un objeto es una estructura de datos mutable, se le podran agregar valores

carro.valor = 50000000
carro.pais = "Colombia"
carro.marca = "audi"
carro.puertas = 2
carro.ventanas.push("negras","polarizadas")

carro.getCaracteristicas = function () {
  let descripcion = `este carro tipo ${this.marca} tiene ${this.puertas} y es de ${this.pais}`
  return descripcion
}

console.log( carro.valor )
console.log( carro.pais )
console.log( carro.marca )
console.log( carro.puertas )
console.log( carro.ventanas )
console.log( carro.getCaracteristicas() )
console.log( carro["getCaracteristicas"]() )

/*
Manipulación de objetos
*/

console.log("-------------------------")

let casa = {
  propietarios: "Brahian Narvaez",
  direccion: "Erique segoviano",
  habitaciones: 7,
  habitantes: 3,
  dormitorios: ["habitacion1","habitacion2","habitacion3"]
}

console.log(casa)