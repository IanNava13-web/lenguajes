console.log("Sets y maps")

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(typeof setOfLanguages) //Esto es un objeto
console.log(setOfLanguages);

/*
set es una estructura de datos de tipo objeto, usado en datos primitivos u objetos
el cual no permite datos duplicados, incluso si se desea agregar un valor, el set lo va
a ignorar. Permite iteracion con forEach y for of
*/

setOfLanguages.add("Portugues")
setOfLanguages.add("Spanish") //lo ignora
setOfLanguages.add("spanish") //No lo ignora ya que esta en minuscula
// setOfLanguages.push("Spanish") set no admite push ya que no es un arreglo
console.log(setOfLanguages);

//size: tamaño de un set
const companies = new Set(); // crear set vacío
console.log(companies.size); // 0

companies.add("Google"); // añadir un elemento a set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in set
console.log(companies);
companies.add("Ubuntu")
console.log(companies);

let numeros = [1,3,5,7,9,11,13,13,15]
let setNumeros1 = new Set(numeros)
let arrayNumeros2 = [...new Set(numeros)]
console.log(setNumeros1)
console.log(arrayNumeros2)
console.log(...setNumeros1)

//delete: borra un elemento, has: para buscarlo y clear: para limpiar el set
setNumeros1.delete( 13 )
arrayNumeros2.pop( 15 )
console.log(setNumeros1)
console.log(arrayNumeros2)

console.log( setNumeros1.has(7) ) 
console.log( setNumeros1.has(8) )

setNumeros1.clear()
console.log( setNumeros1 ) 
console.log( setNumeros1.clear() ) //no devuelve nada, indefinied
//console.log( arrayNumeros2.clear() )

//CONVIRTIENDO UN SET EN UN ARREGLO DE OBJETOS
const languages2 = ["English","Finnish","English","French","Spanish","English","French"];
const langSet = new Set(languages2);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages2.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

console.log(langSet instanceof Set); // true . instanceof es similar a === o isArray


//Con los set se puede hacer una union, interseccion y diferencias entre arreglos

/*
Map
Los map son similares a los set, la diferencia es que estos almacenas pares clave - valor, donde las
claves pueden ser de cualquier tipos y son unicas las claves
map y set son constructores
*/

const primerMap = new Map()
console.log(primerMap)

const depto = [
  ["Valle","Cali"],
  ["Antioquia","Medellin"],
  ["Arauca","Arauca"]
]

const deptoMap = new Map( depto )
console.log(deptoMap)
console.log(deptoMap.size)
deptoMap.set("Amazonas","Leticia") //set para ingresar
deptoMap.set("Guajira","Rioacha")
deptoMap.set("Amazonas","Leticia2") //Este clave como se repite, solo se cambia el valor
console.log(deptoMap)

//Obtener una clave
console.log(deptoMap.has("Arauca")) //has en set y map para verificar si existe la clave
console.log(deptoMap.has("Medellin"))

//Obtener un valor
console.log(deptoMap.get("Antioquia"))

//Se puede utilizar un for of para obtener datos del map
for ( let dmap of deptoMap ) {
  console.log(dmap)
}

for ( let [dep,ciu] of deptoMap ) {
  console.log(dep,ciu)
}

//Teoria de conjuntos