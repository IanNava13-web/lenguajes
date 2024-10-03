from collections import Counter

def contar_letras(frase):
    # Filtramos solo las letras y las convertimos a minúsculas
    solo_letras = ''.join(filter(str.isalpha, frase)).lower()
    return Counter(solo_letras)

# Ejemplo de uso
frase = input("Escribe una frase: ")
resultado = contar_letras(frase)
print("Conteo de letras:", resultado)

