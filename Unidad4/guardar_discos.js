
class Disco {
    constructor(nombre, autor, tipo, anio, localizacion, prestado = false) {
        this._nombre = nombre;
        this._autor = autor;
        this._tipo = tipo;
        this._anio = anio;
        this._localizacion = localizacion;
        this._prestado = prestado;
    }

    getNombre() {
        return this._nombre;
    }

    getAutor() {
        return this._autor;
    }

    getTipo() {
        return this._tipo;
    }

    getLocalizacion() {
        return this._localizacion;
    }

    getPrestado() {
        return this._prestado;
    }

    getAnio() {
        return this._anio;
    }
}

const discos = [];

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const autor = document.getElementById('autor').value;
    const tipo = document.getElementById('genero_musica').value;
    const anio = parseInt(document.getElementById('anio').value, 10);
    const localizacion = "Estante 1"; // Example value, adjust as needed
    const prestado = false; // Example value, adjust as needed

    if (nombre && autor && tipo && !isNaN(anio)) {
        const disco = new Disco(nombre, autor, tipo, anio, localizacion, prestado);
        discos.push(disco);

        console.log('Disco creado:', disco);
        console.log('Todos los discos:', discos);
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
});