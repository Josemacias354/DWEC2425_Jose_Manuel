/** Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
 * * - El valor del radio. - ok*
 * - El valor del diámetro - ok*
 * - El valor del perímetro de la circunferencia * - ok*
 * - El valor del área del círculo * - ok
 * * - El valor del área de la esfera*
 * - El valor del volumen de la esfera*
 * - El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.*
 * - Debes escribir al lado si son cm, o cm2, o cm3** Como datos de muestra, si metes 5,
 * deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 / 523,59*/
let radio = parseFloat(prompt("Introduce el valor del radio:"));

let diametro = radio * 2;
let perimetro = 2 * Math.PI * radio;
let areaCirculo = Math.PI * Math.pow(radio, 2);
let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
let volumenEsfera = 4 / 3 * Math.PI * Math.pow(radio, 3);

console.log("Valor del radio: " + radio + " cm");
console.log("Valor del diámetro: " + diametro + " cm");
console.log("Valor del perímetro de la circunferencia: " + perimetro.toFixed(2) + " cm");
console.log("Valor del área del círculo: " + areaCirculo.toFixed(2) + " cm2");
console.log("Valor del área de la esfera: " + areaEsfera.toFixed(2) + " cm2");
console.log("Valor del volumen de la esfera: " + volumenEsfera.floor + " cm3");

