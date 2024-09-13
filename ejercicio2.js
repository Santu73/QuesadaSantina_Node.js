// 2 - Pedir por prompt un número y guardarlo en una variable, luego pedir un segundo
// número y guardarlo en otra variable. Crear una tercera variable que sume los valores 
// pedidos y retornarlos por consola.

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));
let suma = num1 + num2;

console.log("La suma de los dos números es: ", suma);
