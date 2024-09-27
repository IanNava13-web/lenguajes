
def fibonacci(n):
    # Condición base: los dos primeros números son 0 y 1
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Llamada recursiva
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# Ejemplo
print(fibonacci(10))  # Resultado: 8
