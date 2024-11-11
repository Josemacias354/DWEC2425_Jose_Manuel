var texto = prompt("Introduce una cadena de texto");

function eliminarvocales(texto) {
    let textoSinVocales = texto.replace(/[aeiou]/gi, "");
    return textoSinVocales;
}
alert(eliminarvocales(texto));