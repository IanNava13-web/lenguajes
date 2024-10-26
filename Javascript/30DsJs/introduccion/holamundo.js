console.log("Hola mundo");

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // número
console.log(typeof true ) // boolean
console.log(typeof null) // tipo de objeto
console.log(typeof undefined) // undefined

console.log("----------------------")

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // Verdadero

let js = "JavaScript"; // Esto es una tipo de datos primitivo
let py = "Python";

console.log(js == py); // Falso

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // Falso

function getName(){
	let nombre = "Brahian"
	return nombre
}

console.log(getName()); //Las funciones, las matrices y los objetos son datos no primitivos

//LOS TIPOS DE DATOS PRIMITIVOS NO SE PUEDEN COMPARAR

let numeros1 = [1, 19, 12]
let numeros2 = [1, 19, 12]

console.log(numeros1 == numeros2)

let usuarioUno = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let usuarioDos = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

console.log(usuarioUno == usuarioDos); // Falso

console.log(typeof numeros1)
console.log(typeof usuarioDos)

/*
LOS TIPOS DE DATOS NO PRIMITIVOS SE COMPARAN POR REFENCIA ES DECIR A QUE OBJETO
SE REFIEREN, NO POR VALOR A LOS QUE ESTAN ASIGNADOS*/

let n = [1, 2, 3];
let numbes = n;

console.log(n == numbes); // Verdadero

let userUno = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let userTwo = userUno;

console.log(userUno == userTwo); // Verdadero

/*OBJETOS MATEMATICOS*/

const PI = Math.PI; //OBJETO 

console.log(PI); // 3.141592653589793

// Redondeo al número más cercano
// si es superior a 0,5 hacia arriba si es inferior a 0,5 redondeo hacia abajo
console.log(Math.round(PI)); // 3 para redondear valores al número más cercano
console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 redondeando hacia abajo
console.log(Math.ceil(PI)); // 4 redondeando hacia arriba
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, devuelve el valor mínimo
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, devuelve el valor máximo

const randNum = Math.random(); // crea un número aleatorio entre 0 y 0,999999
console.log(randNum);

// Vamos a crear un número aleatorio entre 0 y 10
const num = Math.floor(Math.random() * 11); // crea un número aleatorio entre 0 y 10
console.log(num);
console.log(Math.abs(-10)); // 10 //Valor absoluto

//Raíz cuadrada
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); // 1.4142135623730951

// Poder o exponencia, base elevado a exponente
console.log(Math.pow(3, 2)); // 9
console.log(3**2)
console.log(Math.E); // 2.718

// Logaritmo
// Devuelve el logaritmo natural con base E de x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Devuelve el logaritmo natural de 2 y 10 respectivamente
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometría
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

//NUMEROS ALEATORIOS CON NUMERO ENTERO
let randomNum = Math.random(); //  0 a 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // esto da: min 0 y max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // esto da entre 0 y 10

//MANEJO DE CADENAS

// Declarar diferentes variables de diferentes tipos de datos
let espacio = " ";
let primerNombre = "Asabeneh";
let apellido = "Yetayeh";
let pais = "Finland";
let ciudad = "Helsinki";
let idioma = "JavaScript";
let trabajo = "teacher";
let edad = 250;

let nombreCompleto = primerNombre + espacio + apellido;
let datosPersonaUno =
  nombreCompleto + ". Yo tengo " + edad + ". Vivo en" + pais; // Adición de cadena ES5

console.log(datosPersonaUno);

//para salto de linea en una cadena se usa la barra inclinada
const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);

//Inyeccion de datos se puede utilizar las comillas invertidas ``

let valor = 24
console.log(`El valor asignado es ${valor}`)

console.log(`La suma de 2 y 3 es 5`); // escribiendo estáticamente los datos
let x = 2;
let y = 3;
console.log(`La suma de ${x} y ${y} es ${x+y}`); // inyectando los datos dinámicamente

//Se pueden hacer operaciones dentro de los corchetes
let m = 2;
let j = 3;
console.log(`${m} es mayor que ${j}: ${m > j}`);

/*
Metodos de cadena: Todo en js es un objeto, por lo tanto, tendra sus metodos de cadena
*/
let cadena = "Brahian narvaez"
console.log(cadena.length)
console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())
console.log(cadena.())

