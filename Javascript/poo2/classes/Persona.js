class Persona {
	constructor(nombre, edad, altura, peso, pais = "Colombia"){
		this.nombre = nombre
		this.edad = edad
		this.altura = altura
		this.peso = peso
		this.pais = pais
	}

	set setNombre(nombre){
		this.nombre = nombre
	}
	set setEdad(edad){
		this.edad = edad
	}
	set setAltura(altura){
		this.altura = altura
	}
	set setPais(pais){
		this.pais = pais
	}

	get getNombre(){
		return this.nombre
	}
	get getEdad(){
		return this.Edad
	}
	get getAltura(){
		return this.Altura
	}
	get getPais(){
		return this.pais
	}

	descripcion(){
		return `nombre: ${this.nombre}, edad: ${this.edad}, altura: ${this.peso}, pais: ${this.pais}`
	}

}

module.exports = Persona