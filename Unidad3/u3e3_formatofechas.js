
let fechaActual = new Date();


let opcion = parseInt(prompt("Introduce 0, 1 o 2 para seleccionar el formato de fecha:"));


switch (opcion) {
    case 0:

        let formatoISO = fechaActual.toISOString();
        console.log("Formato ISO: " + formatoISO);
        break;
    case 1:

        let formatoLocal = fechaActual.toLocaleString();
        console.log("Formato Local: " + formatoLocal);
        break;
    case 2:

        let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let formatoCompleto = fechaActual.toLocaleDateString('es-ES', opciones);
        console.log("Formato Completo: " + formatoCompleto);
        break;
    default:
        console.log("Opción no válida. Por favor, introduce 0, 1 o 2.");
}