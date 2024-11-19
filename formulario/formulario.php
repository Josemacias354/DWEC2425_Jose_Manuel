<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $DNI['dni'] = $_GET['dni'];
    $nombre['nombre'] = $_GET['nombre'];
    $edad['edad'] = $_GET['edad'];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulari 2</title>
</head>
<body>
<h1>Formulari</h1>
<p><strong>Dni</strong> <?php echo htmlspecialchars($DNI['dni']); ?></p>
<p><strong>Nombre:</strong> <?php echo htmlspecialchars($nombre['nombre']); ?></p>
<p><strong>Edad:</strong> <?php echo htmlspecialchars($edad['edad']); ?></p>
</body>
</html>