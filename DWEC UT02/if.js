const nom = prompt('Cual es tu nombre?');
const edat = parseInt(prompt('Cual es tu edad?'));
let categoria;

if (edat <= 12) {
    categoria = "Niño";
} else if (edat >= 13 && edat <= 17) {
    categoria = "Adolescente";
} else if (edat >= 18 && edat <= 64) {
    categoria = "Trabajador";
} else if (edat >= 65) {
    categoria = "Jubilado";
}

console.log(`En ${nom} té ${edat} anys i es un ${categoria}`);