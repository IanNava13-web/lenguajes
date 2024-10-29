console.log("Arreglos")

//Formas de crear un array

const arreglo1 = Array()
const arreglo2 = new Array()
let arreglo3 = []

console.log(arreglo1)
console.log(arreglo2)
console.log(arreglo3)

arreglo3 = [
  "Ingresando valor",
  1345,
  1.21,
  {
    paises: ["Colombia","Mexico","Brasil"],
    frutas: ["Manzana","Mango"],
    objetos: {
      mesa : 1,
      silla : 4,
      plato: 4,
    },
  },
]

console.log(arreglo3)

//Creando arreglo de una cadena
let cadena = "Anita lava la tina"
console.log( cadena.split("") )
console.log( cadena.split(" ") )
console.log( cadena.split(" ").length )

//Elemento de un array
console.log(arreglo3[2])
console.log(arreglo3[ arreglo3.length - 1 ]) //Ultimo elemento

const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
]; // Lista de productos alimenticios

console.log(shoppingCart); // -> todo el carrito de compras en array
console.log(shoppingCart[0]); //  -> Milk
console.log(shoppingCart[7]); //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]); //  -> Sugar

arreglo3[1] = 0

console.log(arreglo3)

//MANIPULANDO ARREGLOS

const arr1 = new Array() //Crea un arreglo vacio
const arr2 = new Array(10) //Crea un arreglo de 10 espacios vacios
console.log(arr1)
console.log(arr2)

const arr3 = new Array(5).fill("hola") //Rellenando un arreglo con elemento repetido
console.log(arr3)

//Juntar dos cadenas
const arrA = ["1",2,"3",4,"5"]
const arrB = [6,"7",8,"9",10]

const newArr = arrA.concat(arrB)
console.log(newArr)

let numeros1 = newArr.map( i => +i )

let numeros2 = []
let j = 0
newArr.forEach( i => {
  numeros2[j] = +i;
  j++;
})

console.log(numeros1)
console.log(numeros2)

const fruits = ["banana", "orange", "mango", "lemon"]; // array de fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array de vegetables
const fruitsAndVegetables = fruits.concat(vegetables); // concatena los dos arrays

console.log(fruitsAndVegetables);

//PARA CONOCER EL ELEMENTO DE UN ARREGLO EN UNA POSICION SE UTILIZA LA PALABRA indexOf, SINO LO ENCUENTRA DEVUELVE UN -1

const lista = ["a","b","c","d","e"]
console.log( lista.indexOf("c") )
console.log( lista.indexOf(/d/) ) //A diferencia de search, indexOf no admite expresiones regulares

const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6

console.log("-------------------------------")

//Averiguar si es un arreglo o no
const lista2 = ["a","b","c"]
let texto2 = "preparacion"

console.log( Array.isArray(lista2) )
console.log( Array.isArray(texto2) )

console.log( "-----------------------------" )
//Convirtiendo una cadena en un string

let a = ["Anita","lava","la","tina"]

console.log( a.toString() ) //toString() los une agregando una coma como separador predeterminado
console.log( a.join(" ") )  //join() los une pero se le puede agregar un caracter de separacion
console.log( typeof a.toString() )
console.log( typeof a.join(" ") )

//Cortar elemento de un arreglo
let lista3 = [1,2,3,4,5,6,7,8,9,0]
console.log( lista3.slice() )
console.log( lista3.slice(1) )
console.log( lista3.slice(2,7) ) //Index inicial, ancho final


//Index inicial, numero a eliminar, cantidad a agregar
console.log( "---------------------------" )
console.log( lista3.splice() ) // Se asume el index 0 y se borra todo
console.log( lista3 )

lista3 = [1,2,3,4,5,6,7,8,9,0]
console.log( lista3.splice(3) ) //Index 3
console.log( lista3 )

lista3 = [1,2,3,4,5,6,7,8,9,0]
console.log( lista3.splice(2,4) ) //Index 2, 4 elementos a la izquierda
console.log( lista3 )

lista3 = [1,2,3,4,5,6,7,8,9,0]
lista3.splice(2,6,11,12,13,14) //Empieza del index 2, elimina 6 elementos desde esa posicion y los reemplaza con los demas numeros
console.log( lista3 )

//Agregando valores a un arreglo usando push
let fruit = ["banana", "orange", "mango", "lemon"];
fruit.push("zanahoria")
console.log(fruit); 

fruit.push("piña")
console.log(fruit); 

//Eliminando con pop el ultimo valor
fruit.pop()
fruit.pop()
console.log(fruit)

//Eliminado con shift desde el inicio y unshift como push agregando pero desde el principio
fruit.unshift("zanahoria")
console.log(fruit); 

fruit.unshift("piña")
console.log(fruit);

fruit.shift()
fruit.shift()
console.log(fruit)

//ORGANIZAR TEXTO E INVERTIRLO, CON SORT Y REVERSE
console.log("-------------------------------"); 
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); 
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

let listaNumeros = [1,3,4,2,3,1,6,8,6,3]

console.log(listaNumeros.sort())
console.log(listaNumeros)
console.log(listaNumeros.reverse())
console.log(listaNumeros)

listaNumeros.sort()
listaNumeros.splice(3,3)

console.log("-------------------------------")
let empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

let listaEmpresas = empresas.split(", ")
console.log(listaEmpresas)

let buscarEmpresa = prompt("Nombre de la empresa a buscar")
console.log(buscarEmpresa)

let nombre = "" //Esto en booleano es un false

for (var i = listaEmpresas.length - 1; i >= 0; i--) {
  if(listaEmpresas[i].toLowerCase() === buscarEmpresa.toLowerCase()){
    nombre = listaEmpresas[i]
    break 
  } 
}

(!nombre)? console.log("La empresa no existe") : console.log(`La empresa existe: ${nombre}`)

/*
  EL METODO DE FILTER() USA UNA FUNCION PARA BUSCAR UN ELEMENTO DE UN ARRAY, DEVOLVIENDO UN ARREGLO
  CON LOS ELEMENTOS A BUSCAR
*/

//Los corchetes en una expresion regular indican la cantidad de veces que se necesita de ese caracter(es)
//Usando una funcion flecha
let valor1 = listaEmpresas.filter( elemento => elemento.match(/o.*o/gi) ) //USANDO FILTER()
console.log(valor1)

let valor2 = listaEmpresas.find( (elemento) => elemento.match(/o.*o/gi) )
console.log(valor2)

/*
el punto indica cualquier caracter que se quiere buscar
el asterisco es un multiplicador, de uno o mas caracteres
ADEMAS TENER EN CUENTA QUE LOS ELEM
*/

let arraylove = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

console.log( "El texto es: "+arraylove.join(" ") )

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);
console.log(fullStack.sort()); //METODO PARA ORGANIZAR