console.log("Bienvenido a javascript externo");

let booleano = 3 > 4
let isSabado = false

console.log(booleano)

console.log(3 > 2); // true, porque 3 es mayor que 2
console.log(3 >= 2); // true, porque 3 es mayor que 2
console.log(3 < 2); // false,  porque 3 es mayor que 2
console.log(2 < 3); // true, porque 2 es menor que 3
console.log(2 <= 3); // true, porque 2 es menor que 3
console.log(3 == 2); // false, porque 3 no es igual a 2
console.log(3 != 2); // true, porque 3 no es igual a 2
console.log(3 == "3"); // true, compara solamente el valor
console.log(3 === "3"); // false, compara tanto el valor como el tipo de dato
console.log(3 !== "3"); // true, compara tanto el valor como el tipo de dato
console.log(3 != 3); // false, compara solo valor
console.log(3 !== 3); // false, compara tanto el valor como el tipo de dato
console.log(0 == false); // true, equivalente
console.log(0 === false); // false, No exactamente igual
console.log(0 == ""); // true, equivalente
console.log(0 == " "); // true, equivalente
console.log(0 === ""); // false, No exactamente igual
console.log(1 == true); // true, equivalente
console.log(1 === true); // false, No exactamente igual
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, diferente
console.log(NaN === NaN); // false
console.log(typeof NaN); // tipo número

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

let valor1 = 0
console.log(valor1++)
console.log(valor1)

let valor2 = 0
console.log(++valor2)
console.log(valor2)

let comparar = (4+5 > 3+3) && (5+4 > 5+5)  //Esto es falso
console.log(!comparar) //Esto es verdadero
//OPERADORES TERNARIOS
console.log("------OPERADORES TERNARIOS----------")

let esNoche = false

esNoche? console.log("Es de noche") : console.log("No es de noche")

let n = 10
n>12? console.log(`${n} es mayor a 12`) : console.log(`${n} es menor a 12`)

function pregunta() {
  return -5
}
pregunta()>0? console.log(`${pregunta()} es un numero positivo`) : console.log(`${pregunta()} es un numero negativo`)

console.log("------------------------")
alert("Aprendiendo js") //Muestra una alerta en la pantalla principal

let texto = prompt("Ingresa un texto", "texto opcional") //Para ingresar texto y almacenarlo en js
console.log(texto)

let confirmar = confirm("Estas seguro de enviar el mensaje?") //Mensajes de confirmacion
console.log(confirmar)







