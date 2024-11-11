//Implementa una función que calcule la distancia euclidiana (comúnmente llamada distancia) entre dos puntos en un plano 2D utilizando el objeto Math.

let x1 = parseInt(prompt("introduce la coordenada x del primer punto"));
let y1 = parseInt(prompt("introduce la coordenada y del primer punto"));
let x2 = parseInt(prompt("introduce la coordenada x del segundo punto"));
let y2 = parseInt(prompt("introduce la coordenada y del segundo punto"));
function distancia(x1, y1, x2, y2) {
    let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distancia;
}
alert(distancia(x1, y1, x2, y2));