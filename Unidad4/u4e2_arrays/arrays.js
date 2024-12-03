
let array = ["España", "Francia", "Italia", "Portugal", "Alemania"];


function mostrar_largo(array) {
    return array.length;
}

function mostrar_elementos(array) {
    let elementos = "";
    for (let i = 0; i < array.length; i++) {
        elementos += array[i] + " ";
    }
    return elementos;
}

function mostrar_invertido(array) {
    let elementos_invertidos = "";
    for (let i = array.length - 1; i >= 0; i--) {
        elementos_invertidos += array[i] + " ";
    }
    return elementos_invertidos;
}

function mostrar_ordenado(array) {}


function añadir_elemento_principio(array, elemento) {
    array.unshift(elemento);
    return array;
}

function añadir_elemento_final(array, elemento) {
    array.push(elemento);
    return array;
}

function eliminar_elemento_principio(array) {
    let principio = array[0];
    console.log ("Elemento eliminado es:" + principio);
    array.shift();
    return array;
}

function eliminar_elemento_final(array) {
    let final = array[array.length - 1];
    console.log ("Elemento eliminado es:" + final);
    array.pop();
    return array;
}
function mostrar_posicion_elemento_usario (array, elemento){
    return array.indexOf(elemento);
}
function mostrar_posicion_usario (array, elemento){
    return array.valueOf(elemento);
}

function mostrar_intervalo_elementos (array, inicio, fin){
    return array.slice(inicio, fin);
}

console.log("Largo del array: " + mostrar_largo(array));
console.log("Elementos del array: " + mostrar_elementos(array));
console.log("Elementos del array invertidos: " + mostrar_invertido(array));
console.log("Elementos del array ordenados: " + mostrar_ordenado(array));
console.log("Añadir elemento al principio: " + añadir_elemento_principio(array, "Holanda"));
console.log("Añadir elemento al final: " + añadir_elemento_final(array, "Bélgica"));
console.log("Eliminar elemento del principio: " + eliminar_elemento_principio(array));
console.log("Eliminar elemento del final: " + eliminar_elemento_final(array));
console.log("Mostrar posición del elemento del usuario: " + mostrar_posicion_elemento_usario(array, "Italia"));
console.log("Mostrar posición del usuario: " + mostrar_posicion_usario(array, 2));
console.log("Mostrar intervalo de elementos: " + mostrar_intervalo_elementos(array, 1, 3));

