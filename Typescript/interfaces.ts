//Las interfaces se usan para validar o una guia para las clases y objetos

interface LigaJusticia{
    nombre:string;
    artesMarciales:string[];
}

let batman:LigaJusticia = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);