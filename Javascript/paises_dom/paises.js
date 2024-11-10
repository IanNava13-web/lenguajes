console.log("Sistemas de paises")

const url = "https://restcountries.com/v2/all"; // api de países

async function paisesApi() {
	try{
		const res = await fetch(url)
		const paises = await res.json()
		console.log(paises)

		// let classDiv = document.getElementsByClassName('paises') [Esto devuelve una coleccion de arreglos]
		let classid = document.getElementById('paisesid') 

		for (let i = 0; i <= paises.length-1 ; i++) {
			let titulo = document.createElement("strong")
			titulo.textContent = paises[i].name
			classid.appendChild(titulo)
		}
	}
	catch(e){
		console.error("Error del mesaje: ", e.message)
	}
	finally{
		console.log("Se ha finalizado el fetch")
	}
}

paisesApi()