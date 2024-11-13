// import { Persona } from "./classes/Persona.js"

const Persona = require("./classes/Persona.js")
const Carro = require("./classes/Carro.js")


const persona1 = new Persona("John Cena", 38, 1.81, 80, "Mexico")
const persona2 = new Persona("Luz Perez", 30, 1.70, 70)
const persona3 = new Persona("Mario Bros", 24, 1.75, 75, "Chile")

const carro1 = new Carro("Audi",21000000,persona1)
const carro2 = new Carro("Tesla",100000000,persona2)
const carro3 = new Carro("Mazda",50000000,persona3)

console.log(persona1.descripcion())
console.log("-----------")
console.log(persona2.getNombre)
console.log(carro2.descripcion())