console.log("Decoradores")

/*

Los decoradores son una herramienta importante en TS como en frameworks como Angular
Permiten añadir funcionalidades extra a los metodos, clases, atributos y parametros
Se ejecutan en Tiempo de Diseño y no en tiempo de Ejecucion

para usar decoradores se debe habilitar un funcion en el archivo tsconfig.json

{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}

Tipos de decoradores
- Decoradores de Clase
- Decoradores de Método
- Decoradores de Propiedad
- Decoradores de Parámetro

*/

// Decoradores de Clase
function Logger(constructor: Function) {
    console.log(`Clase registrada: ${constructor.name}`);
}

@Logger
class MiClase1 {
    constructor() {
        console.log('Instancia creada');
    }
}

// Decoradores de Método
function Log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Llamando a ${propertyKey} con argumentos:`, args);
        return originalMethod.apply(this, args);
    };
}

class MiClase2 {
    @Log
    metodo(param: string) {
        console.log(`Ejecutando metodo con ${param}`);
    }
}


// Decoradores de Propiedades
function ReadOnly(target: Object, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false
    });
}

class MiClase3 {
    @ReadOnly
    propiedad = "Soy una propiedad inmutable";
}

// Decoradores de Parámetros
function LogParam(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`Parámetro decorado en ${propertyKey}, índice: ${parameterIndex}`);
}

class MiClase {
    metodo(@LogParam param1: string, param2: number) {
        console.log(param1, param2);
    }
}
