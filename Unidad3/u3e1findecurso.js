
var hoy = new Date.now();

var finDeCurso = new Date("2025/05/24"); 

var milisegundos = hoy
var milisegundos2 = finDeCurso

var diferencia = milisegundos2 - milisegundos

var diasRestantes = diferencia / (1000 * 60 * 60 * 24);

window.alert("Faltan " + diasRestantes + " días para el fin de curso");

