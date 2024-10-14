let dni, numeroDNI, letraDNI, comprobante;
let letrasDNI = []; // Array para almacenar las letras de los DNI

do {
    dni = prompt('Introduce tu número de DNI o -1 para salir:');
    if (dni === '-1') return letrasDNI; 

    if (dni.length !== 9) {
        alert('El DNI introducido no es correcto.');
        continue;
    }

    numeroDNI = dni.slice(0, 8);
    letraDNI = dni.slice(8).toUpperCase();
    letrasDNI.push(letraDNI); // Guardar la letra en el array

} while (true);