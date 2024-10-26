console.log("Bienvenido a javascript externo");


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
console.log(cadena.substr(8,4)) // substraer indice inicial y cantidad

let string = "JavaScript";
console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

console.log(cadena.split());
console.log(cadena.split("")); // La cadena la convierte o la divide en elementos de un vector
console.log(cadena.split(" "));

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(",")); // Dividir en cualquier matriz en coma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

let popular = "    abecedario    ";
console.log(popular) //Eliminar elementos iniciales y finales
console.log(popular.trim(" "))

let frase = "anita lava la tina"
console.log(frase.includes("Anita")) //Encontrar elementos en una cadena
console.log(frase.includes("anita"))
console.log(frase.replace("lava", "limpia")) // Buscar la frase, reemplazarla por otra
console.log(typeof frase.replace("lava", "limpia"))
console.log(frase) // Buscar la frase, reemplazarla por otra
console.log(frase.charAt(6))

let ultimo = frase.length - 1
console.log(frase.charCodeAt(ultimo)) //Codigo ASCII
console.log(frase.indexOf("lava")) // Devuelve el primer valor donde se encuentra el indice
console.log(frase.indexOf("tina"))
console.log(frase.indexOf("rocia")) //Como no lo encuentra manda un -1
console.log(typeof frase.indexOf("lava"))

let frase2 = "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(frase2.lastIndexOf("love")); // 67 : Busca la ultima de la cadena y muestra su posicion
console.log(frase2.lastIndexOf("you")); // 63
console.log(frase2.lastIndexOf("JavaScript")); // 38

let valor2 = "30"
console.log(valor2.concat("dias","para","diciembre")) // Concatenar

console.log(frase.startsWith("anita")) //Si empieza o termina una frase
console.log(frase.startsWith("tina"))
console.log(frase.endsWith("anita"))
console.log(frase.endsWith("tina"))

console.log(frase.search("lava")) //Busca la primera coincidencia y devuelve su indice
console.log(frase.search(/Anita/gi)) //gi significa que busca en toda la cadena y la i no importa si es minusculas o mayusculas

//EXPRESIONES REGULARES: Son una serie de caracteres que definen un patrón de busqueda, siendo un objeto
let variable = "Texto A Buscar"
let regex = /buscar/gi
console.log(typeof regex)
console.log(variable.match(regex)) //El match devuelve una matriz con los resultados

let variable2 = "Texto, bien texto, para texto, con texto"
let regex2 = /texto/gi //Busqueda global sin distingir entre mayusculas ni minusculas
console.log(variable2.match(regex2))

let txt = "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

console.log(frase.match(/a/)) //Se detiene en el primer ejemplo
console.log(frase.match(/a/g))

let repetir = "texto"
console.log(repetir.repeat(4))
console.log("------------------------------------------------")

// Diferentes tipos de datos javascript

let sujeto = 'Asabeneh' // cadena
let predicado = 'Yetayeh'   // cadena
let finlandia = 'Finlandia'    // cadena
let cyti = 'Helsinki'    // cadena
let age = 250             // numero, no es mi edad real, no te preocupes
let work                    // indefinido, porque no se asignó un valor

console.log(typeof 'Asabeneh')  // cadena
console.log(typeof sujeto)   // cadena
console.log(typeof 10)          // numbero
console.log(typeof 3.14)        // numbero
console.log(typeof true)        // booleano
console.log(typeof false)       // booleano
console.log(typeof NaN)         // numbero
console.log(typeof work)         // indefinido
console.log(typeof undefined)   // indefinido
console.log(typeof null)        // objeto

//Conversion de datos
let nume = "45"
let nume2 = "45.1664"
let num_entero1 = parseInt(nume)
let num_entero2 = Number(nume)
let num_entero3 = +nume
let num_entero4 = parseFloat(nume2) //Flotante
console.log(typeof nume1)
console.log(typeof num_entero1)
console.log(typeof num_entero2)
console.log(typeof num_entero3)
console.log(typeof num_entero4)

console.log( parseInt( num_entero4 ) )













