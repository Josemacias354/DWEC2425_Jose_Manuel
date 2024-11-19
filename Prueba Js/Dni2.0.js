let dni, numeroDNI, letraDNI, comprobante;
let letrasDNI = []; // Array para almacenar las letras de los DNI

do {
    dni = prompt('Introduce tu número de DNI o -1 para salir:');
    if (dni === '-1') {
        break;
    }

    if (dni.length !== 9) {
        alert('El DNI introducido no es correcto.');
        continue;
    }

    numeroDNI = dni.slice(0, 8);
    letraDNI = dni.slice(8).toUpperCase();
    letrasDNI.push(letraDNI); // Guardar la letra en el array

} while (true);

let dnis = [];
function mostrardni() {
let dni = prompt('Introduce tu número de DNI o -1 para salir:');
dnis.push(dni);

if (dni === '-1') {
    clearInterval(intervalo);
    return;




}}
