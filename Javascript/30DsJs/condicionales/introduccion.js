console.log("Condicionales")

let numero = 5

if (numero > 5) {
	console.log("Deveras deveritas")
}
else if (numero < 5 ){
	console.log("Es menor")
}
else{
	console.log("Mentiras mentiritas")
}

// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("Necesitas un impermeable.");
} else if (weather === "cloudy") {
  console.log("Puede que haga frío, necesitas una chaqueta.");
} else if (weather === "sunny") {
  console.log("Sal tranquilo.");
} else {
  console.log("No hay necesidad de un impermeable.");
}


// Más Ejemplos switch
let dayUserInput = prompt("¿Qué día es hoy?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "lunes":
    console.log("Hoy es Lunes");
    break;
  case "martes":
    console.log("Hoy es Martes");
    break;
  case "miércoles":
    console.log("Hoy es Miércoles");
    break;
  case "jueves":
    console.log("Hoy es Jueves");
    break;
  case "viernes":
    console.log("Hoy es Viernes");
    break;
  case "sábado":
    console.log("Hoy es Sábado");
    break;
  case "domingo":
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("No es un día de semana.");
}


let num = prompt("Ingrese un número");
switch (true) {
  case num > 0:
    console.log("El número es positivo");
    break;
  case num == 0:
    console.log("El número es cero");
    break;
  case num < 0:
    console.log("El número es negativo");
    break;
  default:
    console.log("El valor ingresado no era un número");
}

//Operador ternario
let n = 0

n>0? console.log("El numero es mayor a cero") 
	: n<0? console.log("El numero es menor a cero") 
	: console.log("El numero es igual a cero")