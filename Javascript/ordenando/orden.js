console.log("Ordenando ...")

function ordenarBurbuja(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiamos si están en el orden incorrecto
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Ejemplo de uso
let numeros = [5, 3, 8, 4, 2];
console.log("Arreglo original:", numeros);
console.log("Arreglo ordenado:", ordenarBurbuja(numeros));
