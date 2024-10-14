
let dni, letra_in, comprobante;
let letrasDNI = []; // Array para almacenar las letras de los DNI

do {
    dni = prompt('Introduce tu número de DNI (sin la letra) o -1 para salir:');
    if (dni === '-1') break; 

    letra_in = prompt('Introduce la letra de tu DNI:').toUpperCase();
    letrasDNI.push(letra_in); // Guardar la letra en el array
    
    if (dni.length !== 8) {
        alert('El DNI introducido no es correcto.');
    }

    console.log(letrasDNI);
} while (true);
