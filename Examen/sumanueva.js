let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
let largo = array.length;


function media(array) {

    let todo = array.reduce((a, b) => a + b);
    let resultado = todo / largo;
    return resultado;
}
alert(media(array));
