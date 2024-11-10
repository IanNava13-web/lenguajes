console.log("EVENT LISTENER")

/*
El escuchador de eventos, como click, over, out, down, up, load
Se puede añadir el metodo event_listener a cualquier objeto del dom
*/

/*
Para escuchar un evento en cualquier elemento del DOM se usa el elemento addEventListener()

addEventListener recibe dos parametros: El evento y la funcion callback que realiza despues del evento
*/

const btn = document.querySelector("button") // Seleccion del boton
btn.addEventListener( "click", (e) => {
  console.log("e da un objeto event listener, el evento click: ", e);
  console.log("e.target da el evento seleccionado, el boton", e.target);
  console.log("e.target.textContent da el contenido del elemento seleccionado: ",e.target.textContent);

  console.log(typeof e)
  console.log(typeof e.target)
  console.log(typeof e.target.textContent)
})

/*
También se puede adjuntar un evento directamente al elemento HTML como script en línea
El evento desde el html llama la funcion en el codigo js
*/

// const clickMe = () => {
//   alert("Mensaje de alerta del boton")
// }

function clickMe() {
  alert("Mensaje de alerta del boton")
}

const btn2 = document.getElementById('dobleClick')
btn2.addEventListener( "dblclick" , e => {
  console.log("e da un objeto event listener, el evento del dobleclick: ", e);
  console.log("e.target da el evento seleccionado, el boton", e.target);
  console.log("e.target.textContent da el contenido del elemento seleccionado: ",e.target.textContent);

  console.log(typeof e)
  console.log(typeof e.target)
  console.log(typeof e.target.textContent)

  alert(e.target.textContent)
})

//Primero se selecciona el elemento y luego adjuntar el método addEventListener, con el evento y el callback

const mouse = () => {
  console.log("Aqui se muestra el evento")
}

let imc
const masa = document.querySelector("#masa");
const altura = document.querySelector("#altura");
const btnid = document.getElementById("btnid");

btnid.addEventListener("click", e => {
  console.log(masa)
  console.log(altura)
  imc = (masa.value) / (altura.value**2)
  alert(`El indice de masa corporal es ${imc.toFixed(2)}`) //Tofixed muestra la cantidad de decimales
  console.log(imc)
})

//Evento de desenfoque

const input = document.querySelector('#mass')
const p = document.querySelector('p')

input.addEventListener('blur', (e) => {
  p.textContent = 'Field is required'
  p.style.color = 'red'
})

document.body.addEventListener("keypress", (e) => {
  alert(e.keyCode);
});

const carga = () => {
  console.log("Se ha cargado la pagina")
}