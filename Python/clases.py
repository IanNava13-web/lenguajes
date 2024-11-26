# Definición de una clase
class Perro:
    # Método constructor (__init__) para inicializar los atributos
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Atributo
        self.edad = edad      # Atributo

    # Método
    def hablar(self):
        return f"{self.nombre} dice guau!"

# Creación de un objeto
mi_perro = Perro("Rex", 5)

# Accediendo a los atributos del objeto
print(mi_perro.nombre)  # Salida: Rex
print(mi_perro.edad)    # Salida: 5

# Llamando a un método del objeto
print(mi_perro.hablar())  # Salida: Rex dice guau!
