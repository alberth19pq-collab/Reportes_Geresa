<?php
echo "=== VERIFICACIÓN DE RUTAS ===<br><br>";

echo "1. Archivo actual: " . __FILE__ . "<br><br>";

// Probar Opción 1 (PHPMailer dentro de reporteador)
if (file_exists('PHPMailer/PHPMailer.php')) {
    echo "✅ Opción 1: PHPMailer/PHPMailer.php EXISTE<br>";
    echo "   Ruta: " . realpath('PHPMailer/PHPMailer.php') . "<br>";
} else {
    echo "❌ Opción 1: PHPMailer/PHPMailer.php NO EXISTE<br>";
}

// Probar Opción 2 (PHPMailer en htdocs)
if (file_exists('../../PHPMailer/PHPMailer.php')) {
    echo "✅ Opción 2: ../../PHPMailer/PHPMailer.php EXISTE<br>";
    echo "   Ruta: " . realpath('../../PHPMailer/PHPMailer.php') . "<br>";
} else {
    echo "❌ Opción 2: ../../PHPMailer/PHPMailer.php NO EXISTE<br>";
}
?>