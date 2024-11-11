I//
//mplementa una función que reciba un array de números y devuelva el segundo valor mayor



let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function segundovalormax(numeros) {
    let max = Math.max.apply(null, numeros);
    numeros.splice(numeros.indexOf(max), 1);
    let segundo = Math.max.apply(null, numeros);
    return segundo;
}
