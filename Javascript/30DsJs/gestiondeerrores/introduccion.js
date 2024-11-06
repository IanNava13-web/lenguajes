console.log("Gestion de errores")

/*
Como js es de tipado libre, se cometera errores como una variable o funcion que no existen
por lo que existe elementos pare gestionarlos
try - catch - finally

try => Envuelve el codigo en el que pueda existir errores, muestra si hay errores mientras ejecuta

catch => Es el codigo que se ejecuta cuando existe el error, teniendo parametros teniendo info del error
muesta el error y un mensaje especifico al usuario

finally => Se ejecuta siempre y ejecuta tareas que hacen falta o reestablecer variables antes del error

*/

try {
  let lastName = "Aquiles Baesa";
  let fullName = fistName + " " + lastName; //no existe dicha variable first
} catch (err) {
  console.log(err);
}


try{
  let nombre = "Susana horia"
  let nombre1 = nombre + apellido + "Perez"
}
catch(err){
  console.error(err)
}
finally{
  console.log("Este es el finally")
}


//Tambien al capturar el error, se tiene claves llamados name y message (nombre y mensaje)
try {
  let lastName = "Jhon connor";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log("Name of the error", err.name);
  console.log("Error message", err.message);
} finally {
  console.log("se ejecuta finally");
}


/*
Throw: Permite crear errores, lanzar excepciones, inducir el error

throw "Error2"; // genera una excepción con un valor de cadena
throw 42; // genera una excepción con el valor 42
throw true; // genera una excepción con el valor true
throw new Error("Required"); // genera un objeto de error con el mensaje de Requerido
*/

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.error("Este es el error: ",err); //Este es el error que aparece
  }
};
throwErrorExampleFun();

/*
Algunos tipos de errores
ReferenceError
SyntaxError
TypeError

*/