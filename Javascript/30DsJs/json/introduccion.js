console.log("JSON")

/*
Si bien la notacion de objetos en js es similar, json solo se basa en cadenas o textos
con ciertas palabras reservadas
*/

/*
{
  "id": 1234,
  "nombre": "Ron Wisley",
  "edad": 20,
  "habilidades": ["html","css","js"],
  "mascotas":{
    "nombre": "--",
    "tipo": "raton",
    "colores": ["a","b","c"],
    "pelicula":{
      "nombre": "harry potter",
    }
  }
}
*/
/*Los objetos en js y los objetos JSON se diferencian en que las claves JSON debe ir en comillas dobles
Por lo que se puede pasar de json a obj y viceversa*/

/*
Palabra clave: JSON
metodos: 
parse()
stringify()
*/


/*
Para convertir un objeto JSON a un Objeto JS usamos parse()
JSON.parse( json obligatorio, function anonima o flecha(clave,valor) opcional) parseo
*/

const json1 = `{
  "name": "Juan",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "city": "Madrid",
    "zipcode": "28001"
  },
  "phone": null
}`

const objjs1 = JSON.parse( json1, (key, value) => {
  let newValue = typeof value == "string" && key != "name" ? value.toUpperCase() : value;
  return newValue
})

console.log(json1)
console.log(objjs1)

console.log(typeof json1) //JSON es de tipo string
console.log(typeof objjs1)

/*
Para convertir un objeto JS a un Objeto JSON usamos stringify()
JSON.stringify( objeto js , replacer siendo filtro de variables a convertir , space como indentacion ) replacery space opcionales
*/

const json_a = JSON.stringify(objjs1,undefined,3)
console.log(json_a)

//Se puede utilizar el array para convertir en json ciertos atributos

const json_b = JSON.stringify(objjs1,["name","isStudent","courses"],3)

// Primero, selecciona el elemento que necesitas en un nuevo objeto
const objjs1Filtered = {
  name: objjs1.name,
  address: objjs1.address,
  courses: [objjs1.courses[1]] // Solo el segundo curso
}

// Luego conviértelo a JSON
const json_c = JSON.stringify(objjs1Filtered, undefined, 3)

console.log(json_b)
console.log(json_c)