
 let now = new Date();

 let opcion = parseInt(prompt("Introduce 1 para formato detallado o 2 para formato de 12 horas:"));

 switch (opcion) {
     case 1:
         let horaDetallada = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
         console.log("Hora detallada: " + horaDetallada);
         break;
     case 2:
         let hora12Horas = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
         console.log("Hora en formato de 12 horas: " + hora12Horas);
         break;
     default:
         console.log("Opción no válida.");
 }