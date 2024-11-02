console.log("Orden superior")

/*
Las funciones de orden superior son funciones que toman 
- como parametro otras funciones
- devuelve otra funcion como respuesta
*/

//Funciones que toman una funciones: Estas funciones que son pasadas a otras se llaman callbacks

function callback(n) {          // const callback = (n) => {       //  const callback = (n) => n + n**3
  const l = n + n**3            //    return n + n**3
  return l                      // }
}

function sumaCubica( callback, n ) { //Esta es la funcion de orden superior
  return callback( n+1 )*3
}

let valor = sumaCubica( callback, 4 )

console.log("El x = 4 en la funcion f(x) = 3( (x+1)+(x+1)^3 ) es :", valor)

//Con una funcion flecha

const callback2 = (n) =>  n + 2*n

function sumaDoble( callback, n ) {
  return callback2( n )*2
}

let valor2 = sumaDoble( callback2, 2 )

console.log("El resultado es: ", valor2)

//Para retornar una funcion

const ordenSuperior = (n) => {
  const ordenInferior1 = (m) => {
    const ordenInferior2 = (l) => {
      return n + m + l
    }
    return ordenInferior2
  }
  return ordenInferior1
}

console.log( ordenSuperior(2)(4)(6) ) //Mandar elementos cada funcion interior

//Usando la funcion callback con un map o un forEach

const numeros = [1,3,5,7,9,11,15,18,21]

const mutiplicar = (arr) => {
  let mult = [];
  const cb = function (elm) {
    return elm*2
  }
  mult = arr.map( (i) => cb(i) )
  return mult
}

console.log( mutiplicar(numeros) )

//Con un forEach
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

























