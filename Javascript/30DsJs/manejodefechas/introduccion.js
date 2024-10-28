console.log("MANEJO DEL TIEMPO")

/*Las fechas se trabajan utilizando objetos*/

const fecha = new Date() //Primero se crea el objeto, tipo constante

console.log(fecha)
console.log(fecha.getFullYear())
console.log(fecha.getMonth()) //Se obtienen de 0 a 11
console.log(fecha.getDate())
console.log(fecha.getDay())  //Se obtienen los dias de 0 a 6

console.log(fecha.getHours())
console.log(fecha.getMinutes())

//Tiempo total
console.log(fecha.getTime())
const tiempo = Date.now()
console.log(tiempo)

//Formatos

let dia = fecha.getDate()
let mes = fecha.getMonth() + 1
let anio = fecha.getFullYear()
let hora = fecha.getHours()
let minutos = fecha.getMinutes()

console.log(`${anio}-${mes}-${dia} ${hora}:${minutos}`)
console.log(`${dia}-${mes}-${anio} ${hora}:${minutos}`)
console.log(`${dia}/${mes}/${anio} ${hora}:${minutos}`)

console.log("----------------------")
let ingreso = prompt("Ingrese su edad: ")

let segundos = ingreso*365*24*60*60

alert("Usted ha vivido "+segundos+" segundos")
