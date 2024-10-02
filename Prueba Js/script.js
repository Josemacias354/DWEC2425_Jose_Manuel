function confirmClose() {
    alert("Error 107x. Un virus ha infestado tu disco duro,tenemos que eliminar todos los archivos i formatear tu unidad C:.")
    if (confirm("Informe al vendedor de este error")) {
        alert("El navegador se cerrará debido a que es imposible comunicarse con ningun sitio web .");
    }
    else {
        alert("Es impossible recuperar el sistema , se comenzara a eliminar el archivo.");
        parent.close();
    }
}