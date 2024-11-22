"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
let MiClase1 = class MiClase1 {
    constructor() {
        console.log('Instancia creada');
    }
};
MiClase1 = __decorate([
    Logger
], MiClase1);
// Decoradores de Método
function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Llamando a ${propertyKey} con argumentos:`, args);
        return originalMethod.apply(this, args);
    };
}
class MiClase2 {
    metodo(param) {
        console.log(`Ejecutando metodo con ${param}`);
    }
}
__decorate([
    Log
], MiClase2.prototype, "metodo", null);
// Decoradores de Propiedades
function ReadOnly(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        writable: false
    });
}
class MiClase3 {
    constructor() {
        this.propiedad = "Soy una propiedad inmutable";
    }
}
__decorate([
    ReadOnly
], MiClase3.prototype, "propiedad", void 0);
// Decoradores de Parámetros
function LogParam(target, propertyKey, parameterIndex) {
    console.log(`Parámetro decorado en ${propertyKey}, índice: ${parameterIndex}`);
}
class MiClase {
    metodo(param1, param2) {
        console.log(param1, param2);
    }
}
__decorate([
    __param(0, LogParam)
], MiClase.prototype, "metodo", null);
