console.log("PROMESAS")

/*
Las promesas en javascript son formas de trabajar con operaciones asincronas como
peticiones a servidores
lectura de archivos
cualquier tarea que no ocurra de inmediato

Son objetos que representan un eventual finalizacion o fallo de una operacion asincrona

Devuelve una promesa de proporcionar un valor en el futuro

ESTADOS DE UNA PROMESA
-Pendiente: Escucha activa
-Cumplido: Operacion completada
-Rechazado: Operacion erronea o ha fallado

Las promesas pendientes pueden ser cumplidas con un valor o rechazadas con un error
Manejadores asociados en cola then de una promesa
*/

//Devolucion de una llamada

/*Diferencias entre Callbacks y promesas*/

//Callback
const callback = (err, result) => {
  if (err) {
    return console.error(err);
  }
  return console.log(result);
};

const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("Aqui muestra el error: true", skills);  //callback(false, skills);
  }, 2000);
};

doSomething(callback);

/*
Promesas
Para trabajar con promesas, se necesita trabajar con el constructor Promise
El constructor Promise recibe una funcion callback la cual toma parametros dos funciones
resolve y reject

Estructura

// sintaxis
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

*/

function cb(resolve,reject) {
  setTimeout(() => {
    const habilidades = ["HTML","CSS","JS"] //[] para que falle la promesa

    if (habilidades.length > 0){
      resolve(habilidades) //Promesa resuelta
    }
    else{
      reject("Este es el error") //Promesa rechazada
    }

  }, 4000)
}

const promesa = new Promise(cb)
console.log(typeof promesa)
promesa
  .then( (result) => console.log(result) )
  .catch( (error) => console.log(error) )
  .finally( () => console.log("Se ha completado la promesa") )

/*
- then: Se ejecuta cuando la promesa se cumple ( resolve )
- catch: Se ejecuta si la promesa es rechazada ( reject )
- finally: Se ejecuta cuando la promesa se ha completado independientemente si funciona o no
*/


/*
FETCH (buscar)
Es una funcion nativa de js para realizar peticiones HTTP (de forma asincrona) interactuando con API
por lo que es ideal para manejar programacion asincrona

Estructura
fetch(url, opciones)
  .then(response => {// Procesar la respuesta})
  .catch(error => {// Manejar errores}); 

requiere de una url y opciones que es un objeto con configuracion adicional
(metodo, cabecera, cuerpo de la solicitud, etc) por ejemplo un POST

El fetch devuelve una promesa que resuelve a un objeto llamado response, como respuesta http
*/

const url = "https://restcountries.com/v2/all"; // api de países
fetch(url) // Aqui hace la peticion, no es necesaria la opcion
  .then((response) => response.json()) // acceder a los datos de la API o se espera que sea un JSON para hacerlos un OBJETO JS. Aqui devuelve la promesa
  .then((data) => console.log(data)) // despues de obtenidos de la conversion a JSON se muestran en consola
  .catch((error) => console.error(error)) // manejo de errores si ocurre algo incorrecto
  .finally(() => console.log("Se ha completado el fetch"))

fetch(url)
  .then((response) => {
      console.log("Esta es la respuesta de la api")
      console.log(typeof response)
      return response.json()
    })
  .then((data) => {
      console.log("Este es la manipulacion del objeto")
      console.log(typeof data)
      console.log(data)
    })
  .catch((error) => console.error(error))
  .finally(() => console.log("Se ha completado el fetch"))

/*
ASYNC Y AWAIT
Son formas para trabajar mas limpiamente las promesas
async antes de una funcion indica que esa funcion devolvera una promesa
await es la forma para acceder a una promesa. Los await deben ejecutarse dentro de funciones async
*/

const square = async function (n) {
  return n * n;
};

//Funcion anonima
( async () => {
  const valor = await square(2) //accediendo al valor de la promesa
  console.log(square(2)) //en vez de un valor, devuelve una promesa
  console.log(valor)
})()


//Haciendo uso se async - await en la promesa del fetch

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();

