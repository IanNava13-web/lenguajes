console.log("Clousure - clausura")

/*
Funciones que son escritas dentro de otra funcion externa
los clousure son funciones que acceden a las variables de la funcion externa
Un closure es una función que "recuerda" el entorno (scope) en el que fue creada
se usan a menudo para mantener datos privados y crear funciones que pueden "recordar" valores específicos.
*/

function crearContador() {
    let contador = 0;
    console.log(contador,"-")
    return function() { //clousure
        contador += 1;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

//Para la funcion crearContador, la variable contador es una variable local por lo que se elimina al terminar la funcion
//Para la funcion function(), la variable contador es una variable global por lo que "recuerda" el valor de la variable

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

console.log("-------------------------------")

function crearMultiplicador(multiplicador) {
    return function(numero) { // Esta función es un closure
        return numero * multiplicador;
    };
}

const duplicar = crearMultiplicador(2); // Closure que "recuerda" multiplicador = 2
console.log(duplicar(5)); // 10 haciendo referencia a la funcion interna
console.log(duplicar(10)); // 20
