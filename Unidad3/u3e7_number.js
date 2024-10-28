/*
* Crea un programa que pida al usuario un número entero por pantalla y muestr
* Su valor exponencial.
* El numero con 4 decimales.
* El número en binario.
* El número en octal.
* El número en hexadecimal.
* utiliza para ello los métodos del objeto Number.
* */


let numero = parseInt(prompt("Introduce un número entero:"));
let binario = numero.toString(2).padStart(8, '0'); // Asumiendo que quieres un binario de 32 bits

console.log("Valor exponencial: " + numero.toExponential());
console.log("Número con 4 decimales: " + numero.toFixed(4));
console.log("Número en binario: " + binario);
console.log("Número en octal: " + numero.toString(8));
console.log("Número en hexadecimal: " + numero.toString(16));