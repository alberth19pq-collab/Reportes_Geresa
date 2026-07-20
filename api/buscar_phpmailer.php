<?php
echo "=== BÚSQUEDA DE PHPMailer ===<br><br>";

// Directorios a buscar
$directorios = [
    __DIR__ . '/../..',           // htdocs
    __DIR__ . '/..',              // reporteador
    __DIR__ . '/../PHPMailer',    // reporteador/PHPMailer
    __DIR__ . '/../../PHPMailer', // htdocs/PHPMailer
    'C:/xampp/htdocs/PHPMailer',
    'C:/xampp/htdocs/reporteador/PHPMailer'
];

echo "Buscando PHPMailer.php en las siguientes ubicaciones:<br><br>";

foreach ($directorios as $dir) {
    $archivo = $dir . '/PHPMailer.php';
    if (file_exists($archivo)) {
        echo "✅ ENCONTRADO: " . $archivo . "<br>";
        echo "   📂 Carpeta: " . dirname($archivo) . "<br><br>";
    } else {
        echo "❌ NO ENCONTRADO: " . $archivo . "<br>";
    }
}

echo "<br>=== LISTADO DE CARPETAS EN htdocs ===<br>";
$htdocs = 'C:/xampp/htdocs';
if (is_dir($htdocs)) {
    $items = scandir($htdocs);
    foreach ($items as $item) {
        if ($item != '.' && $item != '..' && is_dir($htdocs . '/' . $item)) {
            echo "📁 " . $item . "<br>";
            // Verificar si tiene PHPMailer dentro
            if (is_dir($htdocs . '/' . $item . '/PHPMailer')) {
                echo "   ✅ Contiene PHPMailer/<br>";
            }
        }
    }
}

echo "<br>=== LISTADO DE CARPETAS EN reporteador ===<br>";
$reporteador = 'C:/xampp/htdocs/reporteador';
if (is_dir($reporteador)) {
    $items = scandir($reporteador);
    foreach ($items as $item) {
        if ($item != '.' && $item != '..' && is_dir($reporteador . '/' . $item)) {
            echo "📁 " . $item . "<br>";
            // Verificar si tiene PHPMailer dentro
            if (is_dir($reporteador . '/' . $item . '/PHPMailer')) {
                echo "   ✅ Contiene PHPMailer/<br>";
            }
        }
    }
}
?>