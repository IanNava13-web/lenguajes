
// import { persona } from "./Persona.js"

class Carro {

	constructor(marca,precio,persona){
		this.marca = marca
		this.precio = precio
		this.persona = persona
	}

	get getMarca(){
		return this.marca
	}
	get getPrecio(){
		return this.precio
	}
	get getPersona(){
		return this.persona
	}

	set setMarca(marca){
		this.marca = marca
	}
	set setPrecio(precio){
		this.precio = precio
	}
	set setPersona(persona){
		this.persona = persona
	}

	descripcion(){
		return "Marca: "+this.marca+"\nPrecio: "+this.precio+"\nDueño: "+this.persona.getNombre+"\nPais: "+this.persona.getPais
	}

}

module.exports = Carro