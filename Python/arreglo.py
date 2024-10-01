# Definimos dos arreglos
arreglo1 = [1, 2, 3]
arreglo2 = [4, 5, 6]

# Sumar los arreglos con comprensión de listas
suma_arreglos = [arreglo1[i] + arreglo2[i] for i in range(len(arreglo1))]

print(suma_arreglos)  # Salida: [5, 7, 9]
