console.log("Ciclos")

for (var i = 0 ; i <= 9; i++) {
  console.log("Numero: ",i)
}

const paises = ["Colombia", "Brasil", "Mexico", "España", "Argentina"]

for (var i = paises.length - 1; i >= 0; i--) {
  console.log(paises[i].toUpperCase())
}

const numeros = [1,3,5,7,9]
let newNumber = new Array()

for (var i = numeros.length - 1; i >= 0; i--) {
  newNumber.push(numeros[i] ** 2)
}

console.log(newNumber)

let j=0
while( j<= newNumber.length - 1 ){
  console.log( j )
  j++
}

console.log("1"-4)

let k = 0
do{
  console.log(k)
  k++
}while( k<=10 )

//El for of es una forma de iterar sin necesidad de conocer o trabajar con el index

let arreglo = ["America","Asia", "Europa", "Oceania", "Africa"]

console.log(arreglo.sort())
for ( let m of arreglo ) {
  console.log(m)
}

let suma = 0
for(let n of newNumber){
  console.log(n ** (1/2))
  suma += n ** (1/2)
}
console.log(`La suma es de numeros es: ${suma}`)

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB
for (const tech of webTechs) {
  console.log(tech[0]); // obtiene solo la primera letra de cada elemento,  H C J R N M
}

console.log("--------------------------");
/*
  BREAK Y CONTINUE
  BREAK SE USA PARA PODER INTERRUMPIR UN CICLO
  CONTINUE SE USA PARA OMITIR UNA ITERACION
*/

let valores = [1,2,3,5,8,13,21,34,55,89]

for ( let v of valores ) {
  if ( v > 20 ) {
    console.log( "El numero es mayor a 20" )
    break; // A partir de aqui sale del for
  }
  console.log( v )
}


for ( let v of valores ){
  if( v === 34 ){
    console.log("El 34 no cuenta");
    continue;
  }
  console.log(v)
}

console.log("--------------------------");

let ast = ""

for (let t = 1 ; t <= 7 ; t++){
  ast += "#"
  console.log(ast)
}

let num = [0,1,2,3,4,5,6,7,8,9,10]

for ( let n of num ) {
  console.log( `${n}  ${n**2}  ${n**3}` )
}

let sum_pares = 0
let sum_impares = 0

for ( let m = 1 ; m <= 100 ; m++ ){
  m%2 == 0 ? sum_pares += m : sum_impares += m;
}

console.log("La suma de numeros pares es: ", sum_pares)
console.log(`La suma de numeros impares es: ${sum_impares}`)
console.log(`La suma de numeros es: ${sum_pares+sum_impares}`)