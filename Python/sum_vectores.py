def suma_vectores(v1, v2):
    if len(v1) != len(v2):
        raise ValueError("Los vectores deben tener la misma longitud.")
    return [v1[i] + v2[i] for i in range(len(v1))]

# Ejemplo de uso
vector1 = [1, 2, 3]
vector2 = [4, 5, 6]
resultado = suma_vectores(vector1, vector2)
print("Suma de vectores:", resultado)
