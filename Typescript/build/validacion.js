"use strict";
let getAvenger = (nombre, poder, arma = "arco") => {
    let mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        //mensaje = `${ nombre } tiene el poder de: ${ poder }  y un arma: ${ arma } `;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
        //mensaje = `${nombre} tiene un: ${ arma }`;
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla"));
