console.log("JSON")

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

/*
Cambiar el array de habilidades a JSON usando JSON.stringify()
Stringify la variable de la edad
Stringify la variable isMarried
Stringify el objeto estudiante
*/

const skills_json = JSON.stringify({ skills },"",3) //llaves y luego la variable (no son obj js) para convertir a un json
console.log(skills_json)
console.log(typeof skills_json)

const age_json = JSON.stringify({ age },"",3)
console.log(age_json)
console.log(typeof age_json)

const isMarried_json = JSON.stringify({ isMarried },"",3)
console.log(isMarried_json)
console.log(typeof isMarried_json)

const student_json = JSON.stringify( student,"",3) //Si se coloca las llaves toman el nombre de la variable sino no
console.log(student_json)
console.log(typeof student_json)

/*
Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills
*/

const student_filter = JSON.stringify( student,["firstName","lastName","skills"],3)
console.log(student_filter)
console.log(typeof student_filter)

/*
Parsear el txt JSON a objeto.
Encuentra el usuario que tiene muchas habilidades de la variable almacenada en txt.
*/

const txt_obj = JSON.parse(txt)
console.log(txt_obj)
console.log(typeof txt_obj)

let student_obj = {}
let max_skill = 0

for (let std in txt_obj) { //std se refiere solo a la clave de los objetos
  if ( txt_obj[std].skills.length > max_skill ){
    student_obj = std
    max_skill = txt_obj[std].skills.length
  } 
}

console.log(student_obj)
console.log(typeof student_obj)
console.log(`El estudiante con mas habilidades es ${student_obj} con mas de ${max_skill} habilidades`)

// for . in hace una iteracion para objetos
// for . of hace una iteracion sobre arreglos

//Date recibe parametros