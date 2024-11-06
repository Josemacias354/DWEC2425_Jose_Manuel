
var texto = prompt("Introduce una cadena de texto");

function eliminarnpj(texto) {
    let textoSinVocales = texto.replace(/[npj]/gi, "");
    return textoSinVocales;
}
alert(eliminarnpj(texto));