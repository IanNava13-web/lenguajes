console.log("Sistemas de notas")

let nota = prompt("Ingrese la nota")

nota<=100 && nota>=90? alert("Su nota es A")
	: nota<90 && nota>=70? alert("Su nota es B")
	: nota<69 && nota>=60? alert("Su nota es C")
	: nota<59 && nota>=50? alert("Su nota es D")
	: nota<49 && nota>=0? alert("Su nota es F")
	: alert("El valor es incorrecto o erroneo")


/*
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/