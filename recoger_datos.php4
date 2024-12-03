<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $nom = $_GET['nom'];
    $edat = $_GET['edat'];
    $dni = $_GET['dni'];

    echo "<h1>Formulari</h1>";
    echo "<p><strong>Nom:</strong> $nom</p>";
    echo "<p><strong>Edat:</strong> $edat</p>";
    echo "<p><strong>DNI:</strong> $dni</p>";
}
