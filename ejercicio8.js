// 8 - Crear un programa que determine si un año dado es bisiesto. En caso de que lo 
//sea retornar por consola “El año ingresado es bisiesto”, y en caso de no serlo 
// retornar “El año ingresado no es bisiesto”.


const prompt = require('prompt-sync')();

let anio = parseInt(prompt('Ingresa un año: '));


if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)){
    console.log("El año ingresado es bisiesto");
} else{
    console.log("El año ingresado no es bisiesto");
}
