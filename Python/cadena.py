
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

nombre = "Bryan"
edad = 222
mensaje = f"Hola, {nombre}. Tienes {edad} años."
print(mensaje)