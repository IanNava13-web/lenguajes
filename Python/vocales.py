def contar_vocales(texto):
    # Definimos las vocales
    vocales = "aeiouAEIOU"
    contador = 0
    
    # Iteramos sobre cada carácter en el texto
    for letra in texto:
        if letra in vocales:
            contador += 1
    
    return contador

# Ejemplo de uso
texto = "Hola, ¿cómo estás?"
resultado = contar_vocales(texto)
print(f"Número de vocales en el texto: {resultado}")
