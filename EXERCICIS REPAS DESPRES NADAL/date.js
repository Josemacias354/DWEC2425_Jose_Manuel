function principal1() {
    const fechaInicio = new Date(1975, 0, 1);
    const fechaFin = new Date(2019, 11, 15);
    const formatosPermitidos = [
        /^\d{1,2}\/\d{1,2}\/\d{4}$/,
        /^\d{1,2}-\d{1,2}-\d{4}$/,
        /^\d{1,2}\.\d{1,2}\.\d{4}$/
    ];

    try {
        const fechaUsuario = prompt("Introduce una fecha (D/M/YYYY, DD/MM/YYYY, D-M-YYYY, DD-MM-YYYY, D.M.YYYY o DD.MM.YYYY):");
        let formatoValido = false;
        for (let i = 0; i < formatosPermitidos.length; i++) {
            if (formatosPermitidos[i].test(fechaUsuario)) {
                formatoValido = true;
                break;
            }
        } 
        if (!formatoValido) {
            throw new Error("Formato de fecha no permitido.");
        }

        let dia, mes, anio;
        if (fechaUsuario.includes('/')) {
            [dia, mes, anio] = fechaUsuario.split('/');
        } else if (fechaUsuario.includes('-')) {
            [dia, mes, anio] = fechaUsuario.split('-');
        } else {
            [dia, mes, anio] = fechaUsuario.split('.');
        }
        dia = parseInt(dia, 10);
        mes = parseInt(mes, 10);
        anio = parseInt(anio, 10);

        const fecha = new Date(anio, mes - 1, dia);

        if (isNaN(fecha.getTime()) || fecha.getDate() !== dia || fecha.getMonth() + 1 !== mes || fecha.getFullYear() !== anio) {
            throw new Error("Fecha no válida.");
        }

        if (fecha < fechaInicio || fecha > fechaFin) {
            throw new Error("Fecha fuera del rango permitido.");
        }

        const diasTranscurridos = Math.floor((fecha - fechaInicio) / (1000 * 60 * 60 * 24));
        const diasRestantes = Math.floor((fechaFin - fecha) / (1000 * 60 * 60 * 24));
        const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
        const diaSemana = diasSemana[fecha.getDay()];

        alert(`Días transcurridos desde el 01/01/1975: ${diasTranscurridos}\nDías restantes hasta el 15/12/2019: ${diasRestantes}\nDía de la semana: ${diaSemana}`);
    } catch (error) {
        alert(error.message);
    }
}

document.getElementById("Ejercicio1").addEventListener("click", principal1);