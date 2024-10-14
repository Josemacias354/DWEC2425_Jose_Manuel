let letter = '';

while (letter !== 's') {
    letter = prompt('Introduce una sola letra:');
    
    if (letter === 's') {
        console.log('Has introducido la letra correcta.');
    } else {
        console.log('Has introducido la letra incorrecta.');
    }
}