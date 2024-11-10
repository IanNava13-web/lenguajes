console.log("Funciones")

//Una funcion es un bloque de codigo reutilizable, generalmente con un nombre y un parentesis para realizar una determinada tarea

/*

  Tipos de funciones

    Función declarativa
    Función de expresión
    Función anonima
    Función flecha

*/

//DECLARATIVA
function suma() {
  let n1 = 12
  let n2 = 14
  console.log( n1+n2 )
}

suma()

/*Si se desea retornar un valor*/
function resta() {
  let n1 = 100
  let n2 = 40
  console.log("Se retorna un valor")
  return n1 - n2
}

console.log( resta() )
/*Parametrizable*/
function areaCirculo(r){
  let area = Math.PI * (r**2)
  return area
}

console.log(`El area del circulo de radio 20 es ${ areaCirculo(20) }`)

/*Con dos parametros*/
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log(sumTwoNumbers(10, 20));

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //llamada a la función
console.log(sumArrayValues(numbers));

//Funcion Con un numero Ilimitado de parametros
function elements() {
  console.log(arguments)   //arguments es un objeto de alcance tipo array que tiene los datos que se le pasen
  console.log(typeof arguments) //Objeto
}

elements(1,2,3,4,5,6,7,8,9,10)

function sumaDeValores(){
  let suma = 0
  for (let i = 0; i<=arguments.length-1; i++) {
    suma += arguments[i]
  }
  console.log(suma)
}

sumaDeValores(1,3,5,7,9,11,13,15,17,19,21)

// Accedemos a los argumentos del objeto con una funcion flecha
 // console.log(arguments), objeto de argumentos no encontrado en la función flecha
 // en su lugar, usamos un parámetro seguido de un operador de propagación (...)

const sumAllNums = (...args) => {
  console.log(args)
  console.log(...args)
  console.log(typeof args)
}

sumAllNums(1, 2, 3, 4)

// declaración
const sumAllNums2 = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums2(1, 2, 3, 4)) // 10
console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173

//en funciones declarativas se usa el objeto arguments, si es flecha, hay que desestructurar o propagar

//FUNCIONES ANONIMAS
//Es una funcion sin nombre, donde el valor se almacena en una variable
const anonima = function () {
  console.log("Esta es una funcion anonima, la cual no tiene un nombre de referencia")
}

anonima()

//FUNCIONES DE EXPRESION
/*
Las funciones de expresion son funciones anonimas, con el proposito de retornar un valor
*/
const valorAretornar = function (num) {
  let rest = num + num**2
  return rest
}

console.log(`El valor de 2 es: ${valorAretornar(2)}`)

//FUNCIONES AUTOINVOCADAS O AUTOREFERENCIAS
//Funciones anonimas que no necesitan ser llamadas para retornar un valor, se define y se invoca inmediatamente

console.log = Function.prototype.bind.call(console.log, console);
(function (nombre) {
  console.log("Hola, " + nombre);
})("Mundo");

(function (n) {
  console.log(n * n);
})(2);

let cuadrado = (function (n) {
  return n*2
})(5)

console.log(cuadrado) // O tambien console.log(cuadrado(5))

//FUNCIONES FLECHA
/*
Utiliza una flecha para declarar funciones en ves de function, teniendo leves diferencias
*/

const areaTriangulo = function (){ return arguments[0]*arguments[1]/2 }
console.log("area es igual a: ",areaTriangulo(5,10))

const areaRectangulo = (...args) => args[0]*args[1]
console.log("area es igual a: ",areaRectangulo(3,5))

const multiplo = (...args) => {
  console.log(typeof args)
  return args[0]*args[1] 
}
console.log("El multiplo es igual a: ",multiplo(3,9))


const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(...changeToUpperCase(countries));
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName("Jonh", "Cena"));

//FUNCIONES CON PARAMETRO POR DEFECTO
//A veces es necesario tener parametros designados dentro de las funciones
function sumandos(valor = [1,2,3,4,5,6]) {
  let suma = 0
  valor.forEach( e => {
    suma += e
  })
  return suma
}

console.log(typeof sumandos)
console.log(sumandos())
console.log(sumandos([1,3,5,7,9,11,13,15,17,19,21]))

//Con funcion flecha
const greetings = (name = "Peter") => {
  let message = name + ", welcome to 30 Days Of JavaScript!";
  return message;
};

console.log(greetings());
console.log(greetings("Asabeneh"));

console.log("---------------------------")

let celsius = prompt("Ingrese grados en celsius")
let cel = parseFloat(celsius)

const f = ( cel ) => {
  return ( cel * (9/5))+32
}

console.log("Grados en Fahrenheit: ", f(celsius))
console.log("Grados en Fahrenheit: ", f(cel))