console.log("Almacenamiento")

/*
Permite a las aplicaciones web almacenar datos directamente en el navegador del usuario y no se 
envian los datos almacenados en cada solicitud la servidor

Existen dos formas de almacenamiento

localStorage: Los datos se almacenan incluso si el usuario cierra el navegador o apaga el computador
solo se borran manualmente

sessionStorage: Los datos se eliminan al momento de cerrar la pestaña o el navegador
ofreciendo ventajas sobre las cookies
Se almacenan datos de hasta 5MB
Las claves enteras se convertiran en cadenas
Los metodos de localStorage y sessionStorage son practicamente lo mismo
setItem(), getItem(), removeItem(), clear(), key()
*/

/*
Caso de uso de los almacenamientos web
Algunos casos de uso de los almacenes web son

    almacenar datos temporalmente.
    guardar los productos que el usuario pone en su carrito de la compra.
    los datos pueden estar disponibles entre peticiones de página, múltiples pestañas del navegador y también entre sesiones del navegador utilizando localStorage.
    puede utilizarse completamente sin conexión utilizando localStorage.
    El almacenamiento en la web puede suponer una gran ganancia de rendimiento cuando algunos datos estáticos se almacenan en el cliente para minimizar el número de peticiones posteriores. Incluso las imágenes pueden almacenarse en cadenas utilizando la codificación Base64.
    se puede utilizar para el método de autenticación del usuario.
    si no queremos que la aplicación interfiera con la misma aplicación que está abierta en otra ventana.
*/

/*
LocalStorage es el objeto
clear(): Borra todo lo almacenado
setItem(clave,valor): Almacena los datos en el navegador
getItem(clave): Obtiene los datos almacenados, toma como parametro una clave
removeItem(clave): Remueve el item almacenado, toma como parametro una clave
key(i): Mostrar un dato almacenado en el navegador, toma un index como parametro
*/

const valores = {
  clave1: "valor1",
  clave2: "valor2",
  clave3: "valor3",
  clave4: "valor4",
  clave5: "valor5",
}

console.table(valores)

for ( let k in valores ) {
  localStorage.setItem( `${k}` , valores[k] ) //Para mantener el formato en el localStorage se convierte todo en cadena
}
console.log(localStorage)

//Agregando un numero, se convierte en un string
localStorage.setItem("numero1",10)
console.log(localStorage)

//Agregando un arreglo, por lo que primero se debe convertir en un string y encadenarlos, es lo que hace json
const array1 = ["item1","item2","item3","item4","item5"]
const array1_json = JSON.stringify(array1) //Se convierte en un string, con todo y []
localStorage.setItem("Array1",array1_json) //Ya se encadenan todo en string
console.log(localStorage)

//Agregando un objeto
let skills = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills); //Igual que el array, el obj tiene que ser convertido en string
localStorage.setItem("Skills", skillJSON);


//Obteniendo el datos del Storage
console.log( localStorage.getItem("clave3") )
console.log( +localStorage.getItem("numero1") ) //Devuelve un string, por lo que hay que convertirlo a number

const array1string = localStorage.getItem("Array1")
const array1_new = JSON.parse(array1string) //convierte el string en un obj array
console.log( array1_new )

const skillsString = localStorage.getItem("Skills")
const skills_new = JSON.parse(skillsString)
console.log( skills_new )

localStorage.clear()
console.log( localStorage )
