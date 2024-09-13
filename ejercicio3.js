// 3 - Pedir por prompt un string y guardarlo en una variable, a continuación pedir un 
// segundo string y guardarlo en otra variable. Luego crear una variable que compare 
// ambos strings y retorne “true” en caso de que sean iguales o “false” en caso de que 
// no lo sean. Agregar una variable más que compare la longitud de ambos strings y 
// retorne “true” en caso de que ambos tengan la misma longitud, o “false” en caso contrario.

const prompt = require('prompt-sync')();

let str1 = prompt('Ingrese una palabra: ');
let str2 = prompt('Ingrese otra palabra: ');

let iguales = str1 === str2;
let longitud = str1.length === str2.length;

console.log("Las palabras son iguales?", iguales);
console.log("Tienen la misma longitud?", longitud);