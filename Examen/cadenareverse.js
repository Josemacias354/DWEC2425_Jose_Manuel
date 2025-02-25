

var texto = prompt("Introduce una palabra:");

function invertirCadena(texto) {
    var separar = texto.split(""); //con el split separamos el texto en una array de letras
    var invertir = separar.reverse(); //invertimos el array con la funcion reverse
    var juntar = invertir.join("");//con el join juntamos el array a un string
    return juntar; //devolvemos el string invertido
}
alert(invertirCadena(texto));



