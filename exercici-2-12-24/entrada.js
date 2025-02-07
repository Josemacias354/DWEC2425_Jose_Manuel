class Entrada {
    constructor(nom, correu, dataInscripcio) {
        this.nom = nom;
        this.correu = correu;
        this.dataInscripcio = dataInscripcio;
    }
}

const entrades = [];

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nombre').value;
    const correu = document.getElementById('correo').value;
    const dataInscripcio = document.getElementById('dataInscripcio').value;

    if (nom && correu && dataInscripcio) {
        const novaEntrada = new Entrada(nom, correu, dataInscripcio);
        entrades.push(novaEntrada);
        afegirFilaTaula(novaEntrada);
        actualitzarContador();
        document.getElementById('formulario').reset();
    } else {
        alert('Si us plau, completa tots els camps.');
    }
});

document.getElementById('esborrarTot').addEventListener('click', function() {
    entrades.length = 0;
    document.getElementById('taulaEntrades').innerHTML = '';
    actualitzarContador();
});

function afegirFilaTaula(entrada) {
    const taula = document.getElementById('taulaEntrades');
    const fila = document.createElement('tr');

    const celNom = document.createElement('td');
    celNom.textContent = entrada.nom;
    fila.appendChild(celNom);

    const celCorreu = document.createElement('td');
    celCorreu.textContent = entrada.correu;
    fila.appendChild(celCorreu);

    const celData = document.createElement('td');
    celData.textContent = entrada.dataInscripcio;
    fila.appendChild(celData);

    const celAccions = document.createElement('td');
    const botoEliminar = document.createElement('button');
    botoEliminar.textContent = 'Eliminar';
    botoEliminar.addEventListener('click', function() {
        const index = Array.from(taula.rows).indexOf(fila);
        entrades.splice(index, 1);
        taula.removeChild(fila);
        actualitzarContador();
    });
    celAccions.appendChild(botoEliminar);
    fila.appendChild(celAccions);

    taula.appendChild(fila);
}

function actualitzarContador() {
    document.getElementById('contadorEntrades').textContent = entrades.length;
}