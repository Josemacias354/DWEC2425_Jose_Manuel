<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nombre'];
    $edat = $_POST['edad'];
    $dni = $_POST['dni'];


    if (empty($nom)) {
        echo "<p>El nom no pot estar buida</p>";
    }
    if (empty($edat)) {
        echo "<p>L'edat no pot estar buida</p>";
    }
    if (empty($dni)) {
        echo "<p>El DNI no pot estar buida</p>";
    }
    echo "<h1>Formulari</h1>";
    echo "<p><strong>Nom:</strong> $nom</p>";
    echo "<p><strong>Edat:</strong> $edat</p>";
    echo "<p><strong>DNI:</strong> $dni</p>";
}
?>