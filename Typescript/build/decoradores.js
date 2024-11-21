"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Decoradores");
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
function Logger(constructor) {
    console.log(`Clase registrada: ${constructor.name}`);
}
let MiClase = class MiClase {
    constructor() {
        console.log('Instancia creada');
    }
};
MiClase = __decorate([
    Logger
], MiClase);
// Decoradores de Método
function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Llamando a ${propertyKey} con argumentos:`, args);
        return originalMethod.apply(this, args);
    };
}
class MiClase {
    metodo(param) {
        console.log(`Ejecutando metodo con ${param}`);
    }
}
__decorate([
    Log
], MiClase.prototype, "metodo", null);
