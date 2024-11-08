console.log("Ejercicio api")

const paisesURL = "https://restcountries.com/v2/all"
const gatosURL = "https://api.thecatapi.com/v1/breeds"

// Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.

const paisesFetch = async () => {
	try{
		const res = await fetch(paisesURL);
		const paises = await res.json() //Espera para despues poder obtener los datos que se reciben en json y se convierten en obj
		console.log(paises)

		let description = new Object()
		for (let obj in paises) { //Para array of
			let nombre = paises[obj].name; // No se usa el punto ya que solo es cuando el nombre de la propiedad es fijo o se conoce
			description[nombre] = { //Se usa corchetes para acceder o crear un nombre de llave en cada iteracion, en este caso objs. 
				capital: paises[obj]["capital"],
				lenguaje: paises[obj]["languages"],
				poblacion: paises[obj]["population"],
				superficie: paises[obj]["area"],
			}
		}
		console.log(description)
	}
	catch(err){
		console.error(err.message)
	}
	finally{
		console.log("Consulta fetch finalizada")
		console.log("-------------------------------")
	}
}
paisesFetch() //no olvidar llamar la funcion


/*
Imprime todos los nombres de los gatos en la variable catNames
Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
Lee la api de países y descubre los 10 países más grandes
Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.
*/

const gatosFetch = async () => {
	try{
		const response = await fetch(gatosURL)
		const catsapi = await response.json() //Se espera la respuesta en json
		console.log(catsapi)
		
		let nombres = []
		let numCats = catsapi.length
		for( let key in catsapi ){
			nombres.push( catsapi[key].name )
		}
		console.log(nombres)

		let pesoMedio = {} //new Object()
		for( let key in catsapi ){
			let catName = catsapi[key].name
			let pesoArray = catsapi[key].weight.metric.match( /\d+/g ).map( (i) => +i ) //el metric devuelve un string,por lo que se puede aplicar un match para buscar las coincidencias
			pesoMedio[catName] = { //El punto establece un valor, mientra que los corchetes van creando una clave
				metric: catsapi[key].weight.metric,
				peso_medio: (pesoArray[1]+pesoArray[0])/2
			}
		}
		console.log(pesoMedio)
	}
	catch(err){
		console.error(err.name)
	}
	finally{
		console.log("Finalizada peticion a gatos")
		console.log("-------------------------------")
	}
}
gatosFetch()

const lenguasFetch = async () => {
	try{
		const respuesta = await fetch(paisesURL)
		const paisesApi = await respuesta.json()

		let lista = new Object()
		for (let key in paisesApi) {
			let nombrePais = paisesApi[key].name
			lista[nombrePais] = {
				lenguajes: paisesApi[key].languages, //o tambien ["languages"],
				cantidad: paisesApi[key].languages.length
			}
		}
		console.log("Listado de lenguajes por pais")
		console.log(lista)
	}
	catch(e){
		console.error(e)
	}
	finally{
		console.log("Finalizando Ejercicio")
		console.log("-------------------------------")
	}
}

lenguasFetch()