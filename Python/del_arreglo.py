lista = [1, 2, 3, 4, 5]

# Eliminar el número 2
lista.remove(2)

# Eliminar el número en la posición 1
elemento_eliminado = lista.pop(1)

# Eliminar todos los elementos mayores que 3
lista = [x for x in lista if x <= 3]

print(lista)  # Salida final: [1]
