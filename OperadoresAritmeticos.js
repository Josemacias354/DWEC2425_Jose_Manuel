let incremento = 5;
console.log(incremento++); // Output: 5, then incremento becomes 6

let decremento = 5;
console.log(decremento--); // Output: 5, then decremento becomes 4

console.log(2 ** 3); // Output: 8, potencia

// Operadores logicos
// Operaciones AND
console.log(`1 = ${true && true}`); // Output: 1 = true
console.log(`2 = ${true && false}`); // Output: 2 = false
console.log(`3 = ${false && true}`); // Output: 3 = false
console.log(`4 = ${false && (3 == 4)}`); // Output: 4 = false
console.log(`5 = ${'Gato' && 'Perro'}`); // Output: 5 = Perro
console.log(`6 = ${false && "Gato"}`); // Output: 6 = false
console.log(`7 = ${"Gato" && false}`); // Output: 7 = false

// Operaciones OR
console.log(`8 = ${true || true}`); // Output: 8 = true
console.log(`9 = ${false || true}`); // Output: 9 = true
console.log(`10 = ${true || false}`); // Output: 10 = true
console.log(`11 = ${true || (3 == 4)}`); // Output: 11 = true
console.log(`12 = ${'Gato' || 'Perro'}`); // Output: 12 = Gato
console.log(`13 = ${false || 'Gato'}`); // Output: 13 = Gato
console.log(`14 = ${'Gato' || false}`); // Output: 14 = Gato

// Operaciones NOT
console.log(`15 = ${!true}`); // Output: 15 = false
console.log(`16 = ${!false}`); // Output: 16 = true
console.log(`17 = ${!'Gato'}`); // Output: 17 = false