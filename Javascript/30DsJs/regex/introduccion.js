console.log("Expresioes regulares")

/*
Las expresiones regulares son expresiones de busqueda de patrones en diferentes tipos de datos
es un pequeño lenguaje de programacion en donde existe dos formas de trabajar con los regex
- con el metodo constructor Regex()
- declarando un patron Regex

Parametros
Se necesecita dos elementos: barras y dentro un patron obligatorio y una bandera opcional => /patron/bandera
Un ejemplo de busqueda de patron es en un correo o un spam de un correo
*/

//Declaracion con el metodo contructor Regex
let patronAbuscar = "abcde"
let regex = new RegExp(patronAbuscar)
console.log(regex) //Esto imprimirá /abcde/
console.log(typeof regex) //objeto

let patron = "abcde"
let bandera = "gi"
let regex2 = new RegExp(patron,bandera)
console.log(regex2) //Esto imprimirá /abcde/gi
console.log(typeof regex2) //objeto

let regex3 = new RegExp("abcde","gi")
console.log(regex3) //Esto imprimirá /abcde/gi sin necesidad de variables
console.log(typeof regex3) //objeto

//Sin el uso del constructor
let patronAbuscar2 = /abcde/gi
console.log(patronAbuscar2)
console.log(typeof patronAbuscar2)

//METODOS QUE EXISTEN EN UN CONSTRUCTOR REGEX

//test: Para verificar si existe el patron
let frase = "anita LAVA la tina tina"
let reg = new RegExp("lava","gi")
let rest = reg.test(frase) //verificando si existe el patron
console.log(rest)

//match: Retorna un arreglo, donde  se describen todas la coincidencias
let restm = frase.match(/tina/)
console.log(restm)
console.log(typeof restm) //Tipo object
let restn = frase.match(/tina/g) //Retorna todas las coincidencias
console.log(restn)
console.log(typeof restn) //Tipo object

//search: Devuelve el indice de la cadena a buscar, sino un -1
console.log(frase.search(/ita/))

//replace: realiza la busqueda y reemplaza el valorn
const txt =
  "Python es el lenguaje más bello que ha creado el ser humano.\
Recomiendo python para un primer lenguaje de programación";

matchReplaced = txt.replace(/Python|python/, "JavaScript"); //|pipe es un or en regex
console.log(matchReplaced);

/*
Corchetes [] para identificar mayus y minus
Escape \ Para caracteres especiales: d,D,s,S,w,W,b 
+ para una o mas caracteres
. para cualquier caracter
{cantidad} numero de caracteres
*/

const txt2 = "This regular expression example was made in December 6,  2019.";
const pattern = /\b[a-zA-Z]{4}\b/g; //  palabras de cuatro caracteres exactos sin números
const matches = txt2.match(pattern);
console.log(matches); //['This', 'made']

/*
^ fuera del corchete es un inicio de caracter, si es dentro es negacion
$ para asegurarse si el texto termina en cierto caracter o numeros en grupos de captura $1,$2 ...
() los parentesis son expresiones de grupos de captura de un valor en especifico
*/

const back = "Aqui aprendiendo a usar las expresiones aqui regulares" //escoger solo 4 palabras
const array1 = back.match(/\b\w{4}\b/g) //espacio, caracteres de 4 letras, espacio
const array2 = back.match(/\W/g) // solo espacios
const array3 = back.match(/\w{4}/g) // solo caracteres con 4 letras
console.log(array1)
console.log(array2)
console.log(array3)

//exec: Es un metodo de expresion regular, que devuelve como resultado un objeto

const texto = "El pensamiento condiciona la accion, la accion determina el comportamiento, \
el comportamiento repetido crea habitos, el habito estructura el caracter, el caracter marca el destino"
const pat = /comportamiento/gi // const regex = new Regex("comportamiento","gi")
const objeto = pat.exec(texto)
console.log(objeto)

//grupos de captura
const text = "Juan Perez";
const resultado = text.match(/(Juan) (\w+)/);
console.log(resultado);
const nuevoTexto = text.replace(/(\w+) (\w+)/, "$2, $1");
console.log(nuevoTexto);

const telefono = "(123) 456-7890"; //Eliminando el parentesis y reorganizando el numero
const result = telefono.replace(/\((\d{3})\) (\d{3})-(\d{4})/, "$1-$2-$3");
console.log(result);

