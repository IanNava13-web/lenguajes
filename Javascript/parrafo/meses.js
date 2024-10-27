
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
		 Diciembre tiene 31 dias "

console.log("El parrafo tiene "+parrafo.length+" caracteres")

//Sumar los elementos de un arreglo
let numeros = /\d+/g
let dias = parrafo.match(numeros) //Extraer los numeros de un texto
console.log(dias)

let diasInt = dias.map( i => +i )
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

console.assert(2 + 2 === 5, "La suma no es correcta."); // Muestra el mensaje porque la afirmación es falsa como si fuera un if

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

console.log( parrafo.startsWith(" Los meses") )
console.log( parrafo.endsWith("31 dias") )

console.log( parrafo.match(/\d+/g))

console.log("-------------LIMPIANDO UNA FRASE---------------")

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let newSentence = sentence.replace(/%|[$]|@|&|#|;|,|1|[!]/g,"")

console.log(newSentence)

console.log("----------------------------")

let text = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor."
let list_amor = text.match(/amor/gi)
console.log(text)
console.log("La palabra amor se repite en la frase "+list_amor.length+" veces")

console.log("----------------------------")
let parrafo2 = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

let bandera = /\d+/g

let list_salario = parrafo2.match(bandera).map( k => +k )
console.log(list_salario)
let final = 0
list_salario.forEach( m => {
	final += m
})
console.log(final)
