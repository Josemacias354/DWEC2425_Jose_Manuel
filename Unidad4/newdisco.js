class Disco {
    constructor(nombre="", autor="", tipo="", anio=0, localizacion=0, prestado = false) {
        this._nombre = nombre;
        this._autor = autor;
        this._tipo = tipo;
        this._anio = anio;
        this._localizacion = localizacion;
        this._prestado = prestado;
    }

    incluirDatos(nombre, autor, anio, tipo, estanteria) {
        this._nombre = nombre;
        this._autor = autor;
        this._anio = anio;
        this._tipo = tipo;
        this._localizacion = estanteria;
        this._prestado = false;
    }

    cambiarEstanteria(nuevaEstanteria) {
        this._localizacion = nuevaEstanteria;
    }

    cambiarEstadoPrestamo() {
        this._prestado = !this._prestado;
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Autor: ${this._autor}`);
        console.log(`Año: ${this._anio}`);
        console.log(`Tipo: ${this._tipo}`);
        console.log(`Estantería: ${this._localizacion}`);
        console.log(`Prestado: ${this._prestado ? 'Sí' : 'No'}`);
    }
}

const disco1 = new Disco();
disco1.incluirDatos("Nevermind", "Nirvana", 1991, "grunge", 3);
disco1.mostrarInformacion();

const disco2 = new Disco();
disco2.incluirDatos("The Dark Side of the Moon", "Pink Floyd", 1973, "rock progresivo", 2);
disco2.mostrarInformacion();
disco2.cambiarEstadoPrestamo();
disco2.cambiarEstanteria(4);
disco2.mostrarInformacion();
