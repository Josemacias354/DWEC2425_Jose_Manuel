function funcio_usuari(array) {
    return array.reduce((acc, elem) => acc + elem, 0);
}

const membres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("El resultat de la funció és: " + funcio_usuari(membres));


const funcio_usuari = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
        alert("La array no tiene que estar vacia");
    }
    /*if (!array.every(Number.isFinite)) {
        throw new Error("no puede haber elementos que no sean números");
    }*/
    return array.reduce((acc, elem) => acc + elem, 0);
}

const membres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("El resultat de la funció és: " + funcio_usuari(membres));