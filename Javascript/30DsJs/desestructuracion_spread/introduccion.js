console.log("Desestructuracion y spreading")

//Desempaquetamiento de arreglos y objetos

const arreglo1 = [1,2,3,4,5]
let [numa,numb,numc,numd,nume] = arreglo1

console.log(numa,numb,numc,numd,nume)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

//Si se quiere hacer saltos, es necesario una coma

/*
operador de propagacion (...)
Al no poder asignar cada elemento a una variable, se puede desestructurar un arreglo grande con
un operador de propagacion y ser asignado a una variable
*/

const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o'] Se desestructura y se almacena en un arreglo
console.log(chars)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums; //se desestructura el arreglo en index 3 y se conviente en un arreglo

console.log(num1, num2, num3);
console.log(rest); //esto es un arreglo
console.log(...rest); //esto es una desestructuracion con un spread


//Desempaquetacion de objetos
//En este caso las variables que almacenan deben llamarse exactamente igual a las claves del objeto

const carro = {
  puertas: 4,
  sillas:5,
  color:"gris",
  placa:"abc-123"
}

let { puertas,sillas,color,placa,altura } = carro

console.log(puertas,sillas,color,placa,altura)

//asignacion de valores
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80,
};
let { width, height, area, perimeter = 60 } = rectangle; //si no existe lo asigna y si existe no cambia el valor
console.log(width, height, area, perimeter); //30 10 200 80


const rect = { width: 20, height: 10 };

// Sin desestructuración
const calculatePerimeter1 = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter1(rect)); // 60

// Con desestructuración
const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter2(rect)); // 60


//desestructuracion en una funcion flecha
const allNums = (...args) => {
  console.log(args);
};
allNums(1, 2, 3, 4, 5);

const sumAllNums = (...args) => { //se desestructuran los datos de entrada y se organizan en un array
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5));