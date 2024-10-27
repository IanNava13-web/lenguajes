
let parrafo = 
		" Los meses del año \
		 Enero tiene 31 dias \
		 Febrero tiene 28 dias \
		 Marzo tiene 31 dias \
		 Abril tiene 30 dias \
		 Mayo tiene 31 dias \
		 Junio tiene 30 dias \
		 Julio tiene 31 dias \
		 Agosto tiene 31 dias \
		 Septiembre tiene 30 dias \
		 Octubre tiene 31 dias \
		 Noviembre tiene 30 dias \
		 Diciembre tiene 31 dias \
		"

console.log("El parrafo tiene "+parrafo.length+" caracteres")

//Sumar los elementos de un arreglo
let numeros = /\d+/g
let dias = parrafo.match(numeros) //Extraer los numeros de un texto
console.log(dias)

let diasInt = dias.map( i => Number(i))
let suma = 0
console.log(diasInt)
diasInt.forEach( j => {
	suma += j
})
console.log("un año tiene: ",suma," dias")
let arreglo = parrafo.split(" ")
console.log(arreglo)

let list = []
for (var i = arreglo.length - 1; i >= 0; i--) {
	list[i] = arreglo[i].replace("tiene","contiene")
}

let nuevoPar = list.join(" ")
console.log(nuevoPar)

console.table(list)
console.log(nuevoPar.toUpperCase())
console.log(nuevoPar.toLowerCase())

console.warn("El parrafo tiene "+parrafo.length+" caracteres")
console.error("El parrafo tiene "+parrafo.length+" caracteres");

console.info("El parrafo tiene "+parrafo.length+" caracteres")

console.assert(2 + 2 === 5, "La suma no es correcta."); // Muestra el mensaje porque la afirmación es falsa

function primera() {
    segunda();
}

function segunda() {
    console.trace("Trazado de pila");
}

primera();


console.time("Proceso");
// Código cuyo tiempo de ejecución quieres medir
console.timeEnd("Proceso"); // Muestra el tiempo transcurrido



