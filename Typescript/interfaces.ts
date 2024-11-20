//Las interfaces se usan para validar o una guia para las clases y objetos

interface LigaJusticia{
    nombre:string;
    artesMarciales:string[];
}

let batman:LigaJusticia = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);


/*
Compartir datos - Alias e Interfaces
*/

/*
Alias
Permite definir tipos con nombre especifico (type)
*/
type anio = number
type mes = number
type bool = boolean
type nombre = string

type Casa = {
    anio: anio,
    mes: mes,
    dueno: nombre
}

const anio1: anio = 2024
const boole: bool = true
const nombre3: nombre = "Pacho"
const casa3: Casa = {
    anio: anio1,
    mes: 9,
    dueno: nombre3
}
console.log(anio1)
console.log(boole)
console.log(casa3)

/*
INTERFACES
Similares a los type pero solo aplica a las clases
*/

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle)
console.log(rectangle.height)

//Las interfaces se pueden extender (extends) a otras interfaces
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle)


