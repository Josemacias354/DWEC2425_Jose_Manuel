
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function media(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
alert(media(array));
