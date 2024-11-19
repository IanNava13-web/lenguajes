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

/*
Tuplas
Son arreglos que definen tiene predefinido cada tipo de dato
*/
let tupla1 : [number, string, boolean, any, null]
tupla1 = [1234, "abcde", false, 156, null]
console.log(tupla1)

//Tuplas readonly, no se puede agregar datos
let tupla2 : readonly [number,string,boolean] = [9876,"cadena",true]
console.log(tupla2)

//Nombre de tuplas: Dan un contexto de los valores en cada index del arreglo
const tupla3 : [x:number,y:number] = [100,101]
console.log(tupla3)

//Desestructurando tuplas
let punto : [number,string,boolean] = [12,"cafe",true]
let [a,b,c] = punto
console.log(a,b,c)

/*
OBJETOS
Para declarar objetos es necesario declarar cada valor con su respectivo tipo de dato
aunque tambien existe la inferencia
*/

const carro : {
	tipo: string,
	valor: number,
	modelo: string
} = {
	tipo: "Toyota",
	valor: 10000000,
	modelo: "corolla"
}

console.log(carro)
console.log(carro.tipo)
// console.log(carro[modelo])
console.log(carro.modelo)
console.log(typeof carro.valor)

//Objetos con atributos opcionales (?)

const carro2: { tipo: string, modelo:string, valor?:number } = {
	tipo: "Toyota",
	modelo: "corolla"
}

console.log(carro2)

//Firma en los index, lo que significa que cada clave tiene asignada un tipo de dato

const casa1 : { [index: string]: number } = {}
casa1.cantidad = 12
casa1.precio = 12000000
//casa1.direccion = "cr123" Da error por el tipo de dato
console.log(casa1)

const casa2 : { [index: number]: number } = {}
casa2[1] = 12
casa2[2] = 12000000
//casa2.3 = "cr123" Da error por el tipo de dato
console.log(casa2)