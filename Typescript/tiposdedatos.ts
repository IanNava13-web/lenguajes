/*
Typescript da cualidades a javascript para poder especificar los datos
a demas de poder informar de los errores al momento de pasar parametros
*/

//Asignación de datos implicita o explicita

let nombre1: string = "Tipo de datos 1" //Implicita
let nombre2 = "Tipo de datos 2" //Explicita

console.log(nombre1)
console.log(typeof nombre1)
console.log(nombre2)
console.log(typeof nombre2)

let numero: number = 1234   
console.log(numero)
console.log(typeof numero)

let booleano: boolean = true
console.log(booleano)
console.log(typeof booleano)

//Aunque tambien hay datos que no se puede inferir
const json = JSON.parse("55"); //Convierte el string en un json
console.log(json);
console.log(typeof json); //Asume que es un numero ya que es el primero que lo identifico

//Datos especiales

let valor: any = true //Any puede hacer que el dato pueda cambiar de valor (any-cualquier)
console.log(valor)
console.log(typeof valor)
valor = "Ahora cambia de tipo de datos"
console.log(valor)
console.log(typeof valor)

let valor2: unknown = 12345 //unknown es mas segura que any
console.log(valor2)
console.log(typeof valor2)
valor2 = "123456"
console.log(valor2)
console.log(typeof valor2)

// let nunca1: never//never es un valor que no se puede asignar
// //nunca = 1234 da error
// console.log(typeof nunca1)

let indefinido: undefined = undefined
let nulo1: null = null

console.log(indefinido)
console.log(nulo1)

/*
ARREGLOS

Los arreglos deben ser especificados su tipo de datos el cual estan conformados
*/

let arregloString : string[] = []
arregloString.push("valor1")
arregloString.push("valor2")
arregloString.push("valor3")
// arregloString.push(15) Esto da error ya que solo se admiten cadenas
console.log(arregloString)
console.log(typeof arregloString)

//readonly son datos de solo lectura, no escritura

let arreglo1 : readonly string[] = ["valor1","valor2","valor3"]
console.log(arreglo1)
console.log(typeof arreglo1)

//Por inferencia
let arreglo2 = [1,2,3,4,5] //Se infiere como arreglo de numeros
console.log(arreglo2)
// arreglo2.push("a") Da error

let arreglo3 = [1,"a",2,"b"] //Esto es una forma any
console.log(arreglo3)
