"use strict";
/*
Todas los objetos requiren describir el tipo de dato, su instancia
Pero tambien ts puede inferir los tipos de datos
*/
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car.model);
console.log(typeof car);
const car2 = {
    tipo: "Esto es un string"
};
console.log(typeof car2.tipo);
//Propiedades opcionales(?)
const car3 = {
    prop1: "valor1",
    prop2: 123
};
console.log(car3);
console.log(car3.prop2);
console.log(car3.prop3); //Undefined
console.log(typeof car3.prop3);
car3.prop3 = true;
console.log(car3.prop3);
console.log(typeof car3.prop3);
const nameAgeMap = {};
nameAgeMap.Jack = 25; // Asignacion de index, clave valor
console.log(nameAgeMap);
console.log(nameAgeMap.Jack);
console.log(typeof nameAgeMap);
console.log(typeof nameAgeMap.Jack);
