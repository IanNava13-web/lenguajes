function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Llamada a ${propertyKey} con argumentos: ${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class MiClase {
    @Log
    miMetodo(x) {
        return x * 2;
    }
}

const instancia = new MiClase();
instancia.miMetodo(5); // Esto imprimirá un log antes de ejecutar el método.
