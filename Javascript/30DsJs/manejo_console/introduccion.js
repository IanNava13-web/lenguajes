console.log("Manejo del console")

//console es una herramienta de prueba

console.log("Hola javascript")
console.log("%d %s trae noviembre", 30, "dias")

//Se puede dar color con css usando %c

console.log("%cHola %cmundo","color:blue","color:green")

//warn y error para advertencias y errores respectivamente
console.error("Esto es un error")
console.warn("Advertencia")

//manejo de tablas en el console
let arreglo = ["a","b","c","d","e","f","g"] //dos columnas index y valores
console.table(arreglo);

let objeto = { //dos columnas clave y valor
  clave1: "valor1",
  clave2: "valor2",
  clave3: "valor3",
  clave4: "valor4",
  clave5: "valor5"
}
console.table(objeto)

//Arreglos dentro de arreglos y objetos dentro de objetos
const countries1 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries1);

const users1 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users1);


//info: mensaje de informacion
console.info("Sistema de informacion")

//assert: escribe error si la informacion es erronea, sino no muestra nada
console.assert(4 > 3, "4 is greater than 3"); // no hay resultado
console.assert(3 > 4, "3 is not greater than 4"); // Aserción fallida: 3 no es mayor que 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

//group ayuda a grupar registros
console.log("-----------------------------")
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

//count: llama la funcion n veces
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();


console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

// console.clear() Limpia la consola

