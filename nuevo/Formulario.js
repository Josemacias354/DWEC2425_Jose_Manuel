class Lista {
    constructor() {
        this.personas = [];
    }
    agregarPersona(gente) {
        this.personas.push(gente);
    }
    darLista() {
        return this.personas;
    }
}
class Persona {
    constructor(nombre, dni, edad) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
    }

}

let listaDePersonas = new Lista();

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", manejarFormulario);

function manejarFormulario(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let dni = document.getElementById("DNI").value.trim();
    let edad = parseInt(document.getElementById("Edad").value, 10);

    // if (nombre && dni && !isNaN(edad)) {
    const persona = new Persona(nombre, dni, edad);
    /*   listaDePersonas.agregarPersona(persona);
       actualizarPersonas();
       formulario.reset();
       this.submit();
   } else {
       alert("Por favor, llena todos los campos correctamente.");
   }*/

    /*


    debugger;
    console.log(window.location.href);
    const url = new URL('formulariophp.php', window.location.href);
    console.log(url);
    url.searchParams.append('nombre', persona.nombre);
    url.searchParams.append('Edad', persona.edad);
    url.searchParams.append('DNI', persona.dni);
    console.log(url);
    // Redirigir a la URL amb els parÃmetres
    window.location.href = url;
*/
    const url2 = new URL('www.pep.com/modulo/23/tofol.php?nombre=pep&edad=23&dni=12345678', window.location.href);
}

/*function actualizarPersonas() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    listaDePersonas.darLista().forEach(persona => {
        const li = document.createElement("li");
        li.textContent = `${persona.nombre} - ${persona.dni} - ${persona.edad}`;
        lista.appendChild(li);
    });
}*/