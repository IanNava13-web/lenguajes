console.log("DOM")

/*
DOM: DOCUMENT OBJECT MODEL

El documento html esta estructurado como objeto js, con sus atrivutos y metodos
por lo que se puede crear, añadir o eliminar elementos html mediante js

Para acceder un elemento html se necesita nombre etiqueta, id, nombre de la case y algun otro atributo
*/

/*
Obteniendo elementos por nombre de etiquetas html (tag)
getElementsByTagName():toma un nombre de etiqueta como parámetro de cadena y este método devuelve un objeto HTMLCollection.
*/

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4
for (let i = 0; i < allTitles.length; i++) { //Se usa el for para acceder a los elementos del array
  console.log(allTitles[i]); // imprime cada uno de los elementos de la HTMLCollection
}

/*
Obteniendo elementos por nombre de clases html
getElementsByClassName() devuelve un objeto HTMLCollection. Una HTMLCollection es una lista tipo array de elementos HTML.
*/

const allTitles1 = document.getElementsByClassName("title");
console.log(allTitles1); //HTMLCollections
console.log(allTitles1.length); // 4
for (let i = 0; i < allTitles1.length; i++) {
  console.log(allTitles1[i]); // imprime cada uno de los elementos de la HTMLCollection
}

/*
Obteniendo elementos por nombre de identificador (id)
getElementsById() tiene como objetivo un único elemento HTML.
*/

let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>

/*
Obtener elementos mediante QuerySelector
querySelector: puede seleccionar un HTML o elementos HTML por nombre de etiqueta, por id o por nombre de clase.
querySelectorAll: se puede utilizar para seleccionar elementos html por su nombre de etiqueta o clase.
*/

let firstTitle2 = document.querySelector("h1"); // seleccionar el primer elemento h1 disponible
let firstTitle3 = document.querySelector("#first-title"); // selecciona el id con first-title
let firstTitle4 = document.querySelector(".title"); // seleccionar el primer elemento disponible con clase title

const allTitles3 = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allTitles3)
console.log(typeof allTitles3)
console.log(allTitles3.length) // 4
for (let i = 0; i < allTitles3.length; i++) {
  console.log(allTitles3[i])
}

allTitles3.forEach(title => console.log(title))
const allTitles4 = document.querySelectorAll('.title') // lo mismo ocurre con la selección mediante la clase

/*
AÑADIENDO ATRIBUTOS
*/

const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

console.log(titles)
console.log(titles[3])