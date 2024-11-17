# Lenguajes

***

#### Bloque con ejercicios

---

Este es un bloque para hacer ejercicios de programación...

En este caso aprendo a hacer ejercicios en estos lenguajes:

* _JavaScript_

* _Python_

* _TypeScript_

* ...

~~~
`
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

let numeros = /\d+/g
let dias = parrafo.match(numeros)

let diasInt = dias.map( i => +i )
let suma = 0

diasInt.forEach( j => {
	suma += j
})
console.log("un año tiene: ",suma," dias") 
`
~~~

![Programación](/img/solar_system.jpg "Sistema solar")

> Has lo que puedas con lo que tienes y no te preocupes por el resto

>> ¿Quis custodiet ipsos custodes?