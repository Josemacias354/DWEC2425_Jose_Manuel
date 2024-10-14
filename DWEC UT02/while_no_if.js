let letter = '';
let count = 0;
let correctLetter = false;

while (count < 10 && !correctLetter) {
    letter = prompt('Introduce una sola letra:');
    if (letter === 's') {
        correctLetter = true;
    }
    count++;
}

if (correctLetter) {
    console.log('Has introducido la letra correcta.');
} else {
    console.log('Has introducido la letra incorrecta.');
}