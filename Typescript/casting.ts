console.log("Casting")

/*
CASTING - transmitir
as se utiliza para informar al compilador que se va a trabajar con un tipo de dato especifico
Util cuando el compilador no puede inferir sobre el tipo de dato con el que este trabajando.

let variable: Tipo = valor as OtroTipo;

*/

let valor: any = "Hola, TypeScript";
console.log(typeof valor)
let longitud: number = (valor as string).length;  // Casting con "as"
console.log(longitud); // Salida: 16

let dato: unknown = 1756
console.log(typeof dato)
let divisible: number = (dato as number)/2
console.log(divisible)

//as no convierte el numero
let x: unknown = 4;
console.log((x as string).length); //Dara undefined ya que el dato es number

//Tambien se puede hacer casting con <tipo>valor (mayor-menor)
let texto: any = "Anita lava la tina"
let long: number = (<string>texto).length
console.log(long)

//Forzando un casting: primero como desconocido y luego por su tipo de dato
let texto2 = "Agregando valores..."
console.log( ((texto2 as unknown) as string).length )


//Uso de Clases, objetos e interfaces
interface Usuario {
    nombre: string;
    edad: number;
}

let datos: any = { nombre: "Juan", edad: 25 }; //Objeto generico

let usuario = datos as Usuario; //Verificar si el objeto se relaciona con la interface
console.log(usuario.nombre);

//Uso en datos de tipo union

let valor2: number | string = "Aprendiendo del TS"
if( valor2 as string ) {
	console.log( (valor2 as string).toUpperCase() )
}


