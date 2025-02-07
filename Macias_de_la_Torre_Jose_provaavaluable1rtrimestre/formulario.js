document.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const entradas = document.getElementById('entradas');
    const erroresContainer = document.getElementById('errores');
    const fechaEvento = document.getElementById('fecha-evento');
    const telefono = document.getElementById('telefono');
    const metodoPago = document.getElementById('metodo-pago');
    const codigoPromocional = document.getElementById('codigo-promocional');
    const seats = document.querySelectorAll('.seat');

    // convertir el contenido del campo NOMBRE a mayusculas al perder el foco
    nombre.addEventListener('blur', () => {
        nombre.value = nombre.value.toUpperCase();
    });

    // validar que el campo NOMBRE no esté vacio
    function validarNombre() {
        if (nombre.value.trim() === '') {
            mostrarError('El campo NOMBRE no puede estar vacío.');
            nombre.focus();
            return false;
        }
        return true;
    }

    // validar que el E-MAIL siga el formato correcto
    function validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        /* ^: inicio de la cadena
         [^\s@]+: uno o más caracteres que no sean espacios ni arrobas
         @: caracter arroba
         [^\s@]+: uno o mas caracteres que no sean espacios ni arrobas
         \.: Caracter punto
         [^\s@]+: uno o más caracteres que no sean espacios ni arrobas
        $: Fin de la cadena */
        if (!emailRegex.test(email.value)) {
            alert('El campo E-MAIL no tiene un formato válido.');
            email.focus();
            return false;
        }
        return true;
    }

    // validar que el campo ENTRADAS contenga un número válido
    function validarEntradas() {
        const numEntradas = parseInt(entradas.value, 10);
        const numAsientosSeleccionados = document.querySelectorAll('.seat.selected').length;

        if (isNaN(numEntradas) || numEntradas <= 0 || numEntradas > 10) {
            mostrarError('El campo ENTRADAS debe contener un número entre 1 y 10.');
            entradas.focus();
            return false;
        }

        if (numEntradas !== numAsientosSeleccionados) {
            mostrarError('El número de ENTRADAS debe coincidir con el número de asientos seleccionados.');
            entradas.focus();
            return false;
        }

        return true;
    }

    // validar que el campo FECHA DEL EVENTO cumpla con el formato dd/mm/aaaa
    function validarFechaEvento() {
        const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
        const fechaValor = fechaEvento.value.trim();

        if (!fechaRegex.test(fechaValor)) {
            mostrarError('El campo FECHA DEL EVENTO debe tener el formato dd/mm/aaaa.');
            fechaEvento.focus();
            return false;
        }
        // convertir a números las partes de la fecha
        const [dia, mes, anio] = fechaValor.split('/').map(Number);
        const fecha = new Date(anio, mes - 1, dia);
        //-1 porque los meses en JS empiezan en 0
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Ignorar la hora actual

        if (fecha < hoy) {
            mostrarError('La FECHA DEL EVENTO no puede estar en el pasado.');
            fechaEvento.focus();
            return false;
        }

        return true;
    }
    function mostrarError(mensaje) {
        erroresContainer.innerHTML += `<li>${mensaje}</li>`;
    }


    // validar TELEFONO contenga exactamente 9 digitos
    function validarTelefono() {
        /* ^: inicio de la cadena
         \d{9}: exactamente 9 dígitos
         $: fin de la cadena
         */
        const telefonoRegex = /^\d{9}$/;
        // \d: digito
        // {9}: repetir el digito anterior exactamente 9 veces
        // $: fin
        const telefonoValor = telefono.value.trim();

        if (!telefonoRegex.test(telefonoValor)) {
            mostrarError('El campo TELEFONO debe contener exactamente 9 dígitos.');
            telefono.focus();
            return false;
        }

        return true;
    }

    // validar opcion de  METODO DE PAGO
    function validarMetodoPago() {
        if (metodoPago.value === '') {
            mostrarError('Debe seleccionar un MÉTODO DE PAGO.');
            metodoPago.focus();
            return false;
        }
        return true;
    }
    // Validar CODIGO PROMOCIONAL cumpla tenga el formato alfanumerico de hasta 10
    function validarCodigoPromocional() {
        const codigoRegex = /^[a-zA-Z0-9]{0,10}$/;
        // a-zA-Z0-9: cualquier letra mayuscula o minuscula o dígito
        // {0,10}: de 0 a 10 caracteres
        // $: fin
        const codigoValor = codigoPromocional.value.trim();

        if (!codigoRegex.test(codigoValor)) {
            mostrarError('El CÓDIGO PROMOCIONAL debe ser alfanumérico y de hasta 10 caracteres.');
            codigoPromocional.focus();
            return false;
        }
        return true;
    }

    document.querySelector('form').addEventListener('submit', (event) => {
        erroresContainer.textContent = ''; // limpiar errores previos

        if (!validarNombre() || !validarEmail() || !validarEntradas() || !validarFechaEvento() || !validarTelefono() || !validarMetodoPago() || !validarCodigoPromocional()) {
            event.preventDefault(); // prevenir el envío del formulario si hay errores
            return;
        }

        // pedir confirmacion al usuario
        const confirmacion = confirm('¿Está seguro de que desea enviar el formulario?');
        if (!confirmacion) {
            event.preventDefault(); // cancelar envio si no se confirma
        }
    });

});


