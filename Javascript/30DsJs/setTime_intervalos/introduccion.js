console.log("Manejo de los intervalos")

/*
  Actividades en intervalos de tiempo
Para poder usarlos, se implementan funciones de orden superior

    setInterval
    setTimeout

*/

// function bienvenidos() {
//   return "Bienvenidos a js"
// }

// setInterval( console.log(bienvenidos()), 1000) //Esto no funciona ya que requiere una funcion 

function bienvenidos() {
  console.log("Bienvenidos a js")
}
setInterval( bienvenidos, 1000) //funcion de orden superior callback, tiempo en ms

//Funcion setTimeout para ejecutar una funcion en un futuro, desde el punto de ejecucion

function adios() {
  console.log("Adios...")
}

setTimeout( adios, 5000 )


