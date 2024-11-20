/*
FUNCIONES
*/

//Union de tipos: datos que pueden tener dos tipos usando pipe OR (|)

function metodo(valor: string | number){
	console.log("Esta es la variable: ",valor)
}

metodo(15)
metodo("Brasil")

/*
Las funciones en TS requieren de un caracteristicas especifica para el manejo del tipo de datos
*/

//El tipo de valor a retornar
function getTiempo() : number { //number es el valor a retornar
	let tiempo : number = new Date().getTime()
	return tiempo
}
console.log( getTiempo() )

//Tipo vacio: indica que no retorna nada
function setTiempo(): void {
	let tiempo = "1994-04-26"
	let valor = Date.parse(tiempo)
	console.log(valor)
}
setTiempo()

//Los parametros tambien pueden tener tipos de datos implicitos
function metodo2(x:number,y:number,z:number,c:string){
	console.log("Valores: ",x," ",y," ",z," ",c)
}
metodo2(155,66,92,"Aqui")

//Parametros opcionales
function metodo3(a:string,b?:any){
	console.log("Valores: ",a," ",b || "nada")
}
metodo3("Rojas")
metodo3("Rojas",1234)
metodo3("Rojas","Azul")

//Por defecto
function mensaje(a:number, b:string = "matrix"){
	console.log("numero: ",a," mensaje: ",b)
}
mensaje(12)
mensaje(5,"GOW")

//Parametros con nombre: Poner nombres a los datos recibidos
function metodo4( {param1,param2}:{param1:number,param2:boolean}){
	console.log(param1,", ",param2)
}
metodo4( {param1:987, param2:false} ) //Enviar un objeto practicamente

//Parametros de descanso: Estos parametros son matrices
function suma(...valor: number[]){ //Se desestructura y se establece el parametro en un arreglo de numeros
	console.log(valor)
	return valor.reduce( (total, item) => total+item, 0 ) //Total inicializado en cero y se va sumando con item
}
console.log( suma( 5,10,15,20,3,4,27,1,37 ) ) //122

//Las funciones tambien admiten alias (type)

type Positivo = (valor: number) => number;

const funcionPost: Positivo = (valor) => valor*-1
console.log(funcionPost(-15))