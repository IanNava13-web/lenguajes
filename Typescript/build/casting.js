"use strict";
console.log("Casting");
/*
CASTING - transmitir
as se utiliza para informar al compilador que se va a trabajar con un tipo de dato especifico
Util cuando el compilador no puede inferir sobre el tipo de dato con el que este trabajando.

let variable: Tipo = valor as OtroTipo;

*/
let valor = "Hola, TypeScript";
console.log(typeof valor);
let longitud = valor.length; // Casting con "as"
console.log(longitud); // Salida: 16
let dato = 1756;
console.log(typeof dato);
let divisible = dato / 2;
console.log(divisible);
//as no convierte el numero
let x = 4;
console.log(x.length); //Dara undefined ya que el dato es number
//Tambien se puede hacer casting con <tipo>valor (mayor-menor)
let texto = "Anita lava la tina";
let long = texto.length;
console.log(long);
//Forzando un casting: primero como desconocido y luego por su tipo de dato
let texto2 = "Agregando valores...";
console.log(texto2.length);
let datos = { nombre: "Juan", edad: 25 }; //Objeto generico
let usuario = datos; //Verificar si el objeto se relaciona con la interface
console.log(usuario.nombre);
//Uso en datos de tipo union
let valor2 = "Aprendiendo del TS";
if (valor2) {
    console.log(valor2.toUpperCase());
}
