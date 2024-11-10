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
console.log(document)
console.log(typeof document)

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
Si se quiere añadir ciertas caracteristicas a las etiquetas
*/

const titles = document.querySelectorAll("h1"); //Esto es un array de obj
titles[3].className = "title"; //Agregando como clave - valor, aunque es mejor declararlo en el html
titles[3].id = "fourth-title";

console.log(titles)
console.log(titles[3])

console.log(typeof titles)
console.log(typeof titles[3])

titles[3].setAttribute("class", "title"); //Agregando utilizando setAttribute que recibe nombre del atributo y valor
titles[3].setAttribute("id", "fourth-title");

//classList permite agregar clases adicionales sin necesidad de eliminar las existentes
titles[3].classList.add("title", "header-title");
console.log(titles[3])
console.log(titles[3].classList)
console.log(typeof titles[3].classList)

//Eliminacion de datos de la clase mediante remover
titles[3].classList.remove("title", "header-title"); //n numero de clases a eliminar
console.log(titles[3])


//Añadiendo textos a una etiqueta html
//con textContent
titles[3].textContent = "Cuarto titulo";
console.log(titles[3])

//con innerHTML
//NO solo agrega texto sino tambien elementos HTML como hijos

const lists = `<li>Lista 1</li>
            <li>Lista 2</li>
            <li>Lista 3</li>
            <li>Lista 4</li>
            <li>Lista 5</li>
            <li>Lista 6</li>
            <li>Lista 7</li>
            <li>Lista 8</li>
            <li>Lista 9</li>
            <li>Lista 10</li>`

const ul = document.querySelector("ul"); 
ul.innerHTML = lists  //Y para remover ul.innerHTML = "" o remove
console.log(ul.innerHTML)
console.log(typeof ul.innerHTML)

/*
Agregando Estilos css al html
*/
const li = document.querySelectorAll("li")
li.forEach((li, i) => {
  li.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    li.style.color = "green";
  } else {
    li.style.color = "red";
  }
});
console.log(li)
console.log(typeof li)

/*
Creando etiquetas HTML
document.createElement("tagname");
*/

let parrafo = document.createElement("p")
parrafo.className = "title"
parrafo.style.fontSize = "24px"
parrafo.style.color = "blue"
parrafo.textContent = "Este es un parrafo creado desde js"

console.log(parrafo)

/*
Creacion de multiples elementos
Se implementa todo con un ciclo for
for (let i = 0; i < 3; i++) {
        title = document.createElement("h1");
        title.className = "title";
        title.style.fontSize = "24px";
        title.textContent = i;
        console.log(title);
      }
*/

/*
Para poder visualizar el elemento creado en la pagina o documento html
es necesario agregarlo como un elemento hijo, por lo que para hacerlo es
necesario la funcion appendChild y donde recibe el elemento creado
*/

let valor = document.body.appendChild(parrafo) //Aqui devuelve el objeto creado
console.log(valor)

/*
Si se quiere eliminar un elemento, se puede usar el removeChild
*/

setTimeout( () => {
  const p = document.querySelector('p')
  let resp = document.body.removeChild(p)
  console.log(resp) //Aqui devuelve el objeto a borrar
  console.log(typeof resp)
}, 4000) //Se elimina la etiqueta en 4 sec

//Tambien se puede eliminar usando el innerHTML = ""
