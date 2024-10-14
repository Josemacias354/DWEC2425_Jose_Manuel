// Operadores Aritméticos

console.log(5 + 3); //suma
console.log( 10 - 4); //resta
console.log( 4 * 7); //multiplicacion
console.log(20 / 5); //division
console.log(10 % 3); //modulo

let incremento = 5;
console.log(incremento++); //incremento

let decremento = 5;
console.log(decremento--);  //decremento

console.log((2 ** 3));  //potencia

// Operadores logicos
// Operaciones AND
console.log(`1 = ${true && true}`); //true
console.log(`2 = ${true && false}`); //false
console.log(`3 = ${false && true}`); //false
console.log(`4 = ${false && (3 == 4)}`); //false
console.log(`5 = ${'Gato' && 'Perro'}`); //Perro
console.log(`6 = ${false && "Gato"}`); //false
console.log(`7 = ${"Gato" && false}`); //false

// Operaciones OR
console.log(`8 = ${true || true}`); //true
console.log(`9 = ${false || true}`); //true
console.log(`10 = ${true || false}`); //true
console.log(`11 = ${true || (3 == 4)}`);// true
console.log(`12 = ${'Gato' || 'Perro'}`); // Gato
console.log(`13 = ${false || 'Gato'}`); //Gato
console.log(`14 = ${'Gato' || false}`); //Gato

// Operaciones NOT
console.log(`15 = ${!true}`); //false
console.log(`16 = ${!false}`); //true
console.log(`17 = ${!'Gato'}`); //false