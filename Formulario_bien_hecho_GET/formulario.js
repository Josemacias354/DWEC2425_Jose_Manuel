document.getElementById('personaForm').addEventListener('submit', function(event) {
    event.preventDefault();


    class Persona {
        constructor(nom, edat, dni) {
            this.nom = nom;
            this.edat = edat;
            this.dni = dni;
        }
    }
    const nom = document.getElementById('nom').value;
    const edat = document.getElementById('edat').value;
    const dni = document.getElementById('dni').value;

    const persona = new Persona(nom, edat, dni);
    debugger;
    const url = new URL('formulari.php', window.location.href);
    url.searchParams.append('nom', persona.nom);
    url.searchParams.append('edat', persona.edat);
    url.searchParams.append('dni', persona.dni);


    window.location.href = url;
});