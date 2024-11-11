//Utilizando el objeto Date, crea una función que reciba una fecha y devuelva el número de días hasta final de año.

var date = new Date(2024, 10, 20);

function diasfindeanyo(date) {
    var finanyo = new Date(date.getFullYear(), 11, 31);
    var dia = 1000 * 60 * 60 * 24;
    return Math.ceil((finanyo.getTime() - date.getTime()) / dia);
}

alert(diasfindeanyo(date));