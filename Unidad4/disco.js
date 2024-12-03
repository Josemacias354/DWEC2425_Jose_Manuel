
function Disco(nombre = "", grupo = "", anio = 0, tipo = "", estanteria = 0,prestado = false) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.anio = anio;
    this.tipo = tipo;
    this.estanteria = estanteria;
    this.prestado = false;


    this.incluirDatos = function(nombre, grupo, anio, tipo, estanteria) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anio = anio;
        this.tipo = tipo;
        this.estanteria = estanteria;
        this.prestado = false;
    }
    this.cambiarEstanteria = function(nuevaEstanteria) {
        this.estanteria = nuevaEstanteria;
    }


    this.cambiarEstadoPrestamo = function() {
        this.prestado = !this.prestado;
    }


    this.mostrarInformacion = function() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Grupo: ${this.grupo}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Estantería: ${this.estanteria}`);
        console.log(`Prestado: ${this.prestado ? 'Sí' : 'No'}`);
    }
}


const disco1 = new Disco();
disco1.incluirDatos("Nevermind", "Nirvana", 1991, "grunge", 3, "prestado");
disco1.mostrarInformacion();

disco2 = new Disco();
disco2.incluirDatos("The Dark Side of the Moon", "Pink Floyd", 1973, "rock progresivo", 2, prestado = true);
disco2.mostrarInformacion();
disco2.cambiarEstadoPrestamo(false);
disco2.cambiarEstanteria(4);
disco2.mostrarInformacion();