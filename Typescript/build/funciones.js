"use strict";
/*
FUNCIONES
*/
//Union de tipos: datos que pueden tener dos tipos usando pipe OR (|)
function metodo(valor) {
    console.log("Esta es la variable: ", valor);
}
metodo(15);
metodo("Brasil");
/*
Las funciones en TS requieren de un caracteristicas especifica para el manejo del tipo de datos
*/
//El tipo de valor a retornar
function getTiempo() {
    let tiempo = new Date().getTime();
    return tiempo;
}
console.log(getTiempo());
//Tipo vacio: indica que no retorna nada
function setTiempo() {
    let tiempo = "1994-04-26";
    let valor = Date.parse(tiempo);
    console.log(valor);
}
setTiempo();
//Los parametros tambien pueden tener tipos de datos implicitos
function metodo2(x, y, z, c) {
    console.log("Valores: ", x, " ", y, " ", z, " ", c);
}
metodo2(155, 66, 92, "Aqui");
//Parametros opcionales
function metodo3(a, b) {
    console.log("Valores: ", a, " ", b || "nada");
}
metodo3("Rojas");
metodo3("Rojas", 1234);
metodo3("Rojas", "Azul");
//Por defecto
function mensaje(a, b = "matrix") {
    console.log("numero: ", a, " mensaje: ", b);
}
mensaje(12);
mensaje(5, "GOW");
//Parametros con nombre: Poner nombres a los datos recibidos
function metodo4({ param1, param2 }) {
    console.log(param1, ", ", param2);
}
metodo4({ param1: 987, param2: false }); //Enviar un objeto practicamente
//Parametros de descanso: Estos parametros son matrices
function suma(...valor) {
    console.log(valor);
    return valor.reduce((total, item) => total + item, 0); //Total inicializado en cero y se va sumando con item
}
console.log(suma(5, 10, 15, 20, 3, 4, 27, 1, 37)); //122
const funcionPost = (valor) => valor * -1;
console.log(funcionPost(-15));
