let cumpleaños = prompt("¿En qué día de la semana cumples años?");
var fecha = new Date();
var any = fecha.getFullYear();
alert(any);

for (let i = 0; i < 50; i++) {

    let nuevafecha = new Date(fecha);
    nuevafecha.setFullYear(any);
    let day = nuevafecha.getDay();
    if (day == 6){
        console.log("El año " + any + " cumples años en sábado");
    }
}


