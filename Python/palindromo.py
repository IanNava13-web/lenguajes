def es_palindromo(texto):
    texto = texto.replace(" ", "").lower()   # Eliminar espacios y convertir a minúsculas
    return texto == texto[::-1]

# Ejemplo de uso
texto = "Anita lava la tina"
if es_palindromo(texto):
    print(f'"{texto}" es un palíndromo.')
else:
    print(f'"{texto}" no es un palíndromo.')
