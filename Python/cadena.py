
cadena = "hola" * 3

print(cadena)

print( len(cadena) ) #Ancho de una cadena

print( cadena[0:5] )

mensaje = " Los meses del año \
Enero tiene 31 dias \
Febrero tiene 28 dias \
Marzo tiene 31 dias \
Abril tiene 30 dias \
Mayo tiene 31 dias \
Junio tiene 30 dias \
Julio tiene 31 dias \
Agosto tiene 31 dias \
Septiembre tiene 30 dias \
Octubre tiene 31 dias \
Noviembre tiene 30 dias \
Diciembre tiene 31 dias \
"

print( mensaje.upper() )
print( mensaje.lower() )
print( "2" + "2" )
print(mensaje.replace("Los meses","La cantidad de dias"))

nombre = "Rosan"
edad = 222
mensaje = f"Hola, {nombre}. Tienes {edad} años."
print(mensaje)


lista = [1, 2, 3, 4, 5]

# Eliminar el número 2
lista.remove(2)
# Eliminar el número en la posición 1
elemento_eliminado = lista.pop(1)
# Eliminar todos los elementos mayores que 3
lista = [x for x in lista if x <= 3]

print(lista)  # Salida final: [1]