console.log("Orden superior")

/*
Las funciones de orden superior son funciones que toman 
- como parametro otras funciones
- devuelve otra funcion como respuesta
*/

//Funciones que toman una funciones: Estas funciones que son pasadas a otras se llaman callbacks

function callback(n) {          // const callback = (n) => {       //  const callback = (n) => n + n**3
  const l = n + n**3            //    return n + n**3
  return l                      // }
}

function sumaCubica( callback, n ) { //Esta es la funcion de orden superior
  return callback( n+1 )*3
}

let valor = sumaCubica( callback, 4 )

console.log("El x = 4 en la funcion f(x) = 3( (x+1)+(x+1)^3 ) es :", valor)

//Con una funcion flecha

const callback2 = (n) =>  n + 2*n

function sumaDoble( callback, n ) {
  return callback2( n )*2
}

let valor2 = sumaDoble( callback2, 2 )

console.log("El resultado es: ", valor2)

//Para retornar una funcion

const ordenSuperior = (n) => {
  const ordenInferior1 = (m) => {
    const ordenInferior2 = (l) => {
      return n + m + l
    }
    return ordenInferior2
  }
  return ordenInferior1
}

console.log( ordenSuperior(2)(4)(6) ) //Mandar elementos cada funcion interior

//Usando la funcion callback con un map o un forEach

const numeros = [1,3,5,7,9,11,15,18,21]

const mutiplicar = (arr) => {
  let mult = [];
  const cb = function (elm) {
    return elm*2
  }
  mult = arr.map( (i) => cb(i) )
  return mult
}

console.log( mutiplicar(numeros) )

//Con un forEach
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

/*
Programacion funcional
Con javascript ES6, existen nuevas funciones que utilizan la programacion funcional
que utiliza el callback, con funciones de orden superior
*/

//forEach: utiliza un callback, anonima para iterar, solo funciona con arrays

let arreglo = [1,2,3,4,5,6,7,8,9,10]

arreglo.forEach( function (element, index, arr) {
  console.log(element, index, arr) //arr hace referencia al arreglo en si
})

// arreglo.forEach( (item,index) => {
//   function intervalo() {
//     console.log(item) //lo ejecuta todos los items de manera inmediata
//   }
//   setTimeout(intervalo,index*2000) //se espera un tiempo de 2000ms por el index del arreglo -- FUNCION ASINCRONA
// })

//map: devuelve un arreglo utilizando una funcion callback, mapeando el arreglo

let nuevoArreglo = arreglo.map( function (elm,index,arre) {
  return elm * 4
} )
console.log(nuevoArreglo)

let nuevoArreglo2 = arreglo.map( (elm) => elm**2)
console.log(nuevoArreglo2)

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries.map((country) => country.toUpperCase());//Metodo para modificar
console.log(countriesToUpperCase);

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
); //slice mantiene, splice corta e ingresa
console.log(countriesFirstThreeLetters)

//filter: Es un filtro, se usa para cumplir las condiciones de cierta funcion.Metodo de busqueda
const paisesFiltro = countries.filter( (item) => {
  return item.includes('ia')//si cumple esta condicion 
})
console.log(paisesFiltro)

const paisesFiltro2 = countries.filter( (item) => item.endsWith("land") )
console.log(paisesFiltro2)

//reduce: Toma un callback con dos parametros acumular(total o respuesta), actual valor, valor inicial y retorna un valor unico
let array = [12,22,45,12,10,1,2,2,40]
const callback3 = (total, item, index, arreglo) => { //requiere de 4 valores: el valor a entregar, item del array, indice, el arreglo en si
  return total + item
} 
//console.log no va con un return

let sumaDatos = array.reduce(callback3, 100) //reduce requiere de una funcion callback(anonima) y un valor inicial del valor a entregar y si no hay valor inicial, se asume como 0
console.log( sumaDatos )

const numbers2 = [1, 2, 3, 4, 5];
const sum2 = numbers2.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

//every: Es una funcion de orden superior que permite verificar una lista de elementos, que recibe el callback
const lista1 = ["ab","bc","cd","de","ef"]
const lista2 = ["ab",2,"cd",4,"ef"]

console.log( lista1.every( (item,index,array) => (typeof item) === "string" ) )
console.log( lista2.every( (item,index,array) => (typeof item) === "string" ) )

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

console.log( scores.every( score => score.score >= 50 ) ) //devuelve un booleano

// find: Encuentra el primer valor que cumpla la condicion
console.log( scores.find( valor => valor.score > 95  ) )

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const result = names.find((name) => name.length > 7);
console.log(result);

//findIndex: Encuentra la posicion del primer valor que cumple la condicion
let ind = scores.findIndex( item => item.score === 50 )
console.log( ind ) //3

//some: Comprueba si varios elementos, no necesariamente todos cumplen la condicion
const booleanos = [true, true, false,true,false]
console.log( booleanos.some( i => i === false ) ) //Verifica si alguno cumple la condicion

/*
sort: funcion que realiza un ordenamiento de menor a mayor en string
ademas de modificar el arreglo original, por eso es importante tener una copia original
ya que es una funcion mutable
*/
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());
//Ahora la matriz original de productos también está ordenada

//con numeros es diferente, por lo que se necesita una funcion anonima (callback) y dos valores
const points = [40, 100, 1, 5, 25, 10];
points.sort( function(a, b){return a - b} ); // si a-b < 0, entonces a<b (ascendente) (funcion anonima de comparacion)
console.log( points )
points.sort( (a,b) => b - a ) //si b-a < 0 entonces b < a (descendente)
console.log( points )

//Para ordenar objetos, ya que sort convierte en string numeros, son necesarias las claves dentro del objeto
const users = [ //listado de objetos
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users);






