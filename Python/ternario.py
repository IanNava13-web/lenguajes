puntuacion = 85
clasificacion = (
    "Excelente" if puntuacion >= 90 
    else "Bueno" if puntuacion >= 70 
    else "Regular"
)
print(clasificacion)  # Resultado: "Bueno"

#Los operadores ternarios son diferentes a los de javascript ya que primero va
#el valor a asignar despues va las condiciones :)