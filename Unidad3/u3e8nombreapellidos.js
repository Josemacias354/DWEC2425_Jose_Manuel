/*  Crea un programa que pida al usuario su nombre y apellidos y muestre:
    *  El tamaño del nombre más los apellidos (sin contar espacios).
    *  La cadena en minúsculas y en mayúsculas.
    *  Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido2:
    *  Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
    *  Una propuesta de nombre de usuario compuesto por los tres primeros caracteres del nombre y del primer apellido: ej. Para José María García Durán sería josgar.

*/
let nombre = prompt("Introduce tu nombre y apellidos:");
let nombreCompleto = nombre.split(" ");
let nombreCompletoSinEspacios = nombreCompleto.join("");
let nombreMinusculas = nombreCompletoSinEspacios.toLowerCase();
let nombreMayusculas = nombreCompletoSinEspacios.toUpperCase();
let nombreUsuario = nombreCompleto[0].charAt(0) + nombreCompleto[1] + nombreCompleto[2].charAt(0);
let nombreUsuario2 = nombreCompleto[0].slice(0, 3) + nombreCompleto[1].slice(0, 3) + nombreCompleto[2].slice(0, 3);

alert("Tamaño del nombre más los apellidos: " + nombreCompletoSinEspacios.length);
alert("Nombre en minúsculas: " + nombreMinusculas);
alert("Nombre en mayúsculas: " + nombreMayusculas);
alert("Nombre: " + nombreCompleto[0] + "\nApellido1: " + nombreCompleto[1] + "\nApellido2: " + nombreCompleto[2]);
alert("Nombre de usuario: " + nombreUsuario);
alert("Nombre de usuario 2: " + nombreUsuario2);