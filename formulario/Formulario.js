class Persona {
    constructor(nombre, dni, edad) {
        this._nombre = nombre;
        this._dni = dni;
        this._edad = edad;
    }

    getNombre() {
        return this._nombre;
    }

    getDni() {
        return this._dni;
    }

    getEdad() {
        return this._edad;
    }
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let dni = document.getElementById('dni').value;
    let edad = document.getElementById('edad').value;

    if (nombre && dni && !isNaN(edad)) {
        const persona = new Persona(nombre, dni, parseInt(edad, 10));

        console.log('Nombre:', persona.getNombre());
        console.log('DNI:', persona.getDni());
        console.log('Edad:', persona.getEdad());
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
});