<?php
// Capturamos la ruta. Si entran a la raíz, por defecto cargamos 'inicio'
$route = isset($_GET['route']) ? rtrim($_GET['route'], '/') : 'inicio';

// Evaluamos la ruta con un switch limpio
switch ($route) {
    
    // Rutas principales (Páginas)
    case '':
    case 'inicio':
        include 'inicio.html';
        break;

    case 'crear':
        include 'login.html';
        break;

    case 'tabla':
        include 'tabla02.html';
        break;

    case 'administrador':
        include 'admin.html';
        break;        



    // Rutas para tus scripts de lógica PHP o APIs
    case 'procesar-login':
        include 'login.php';
        break;

    case 'exportar-pdf':
        include 'exportar_pdf.php';
        break;

    case 'test-db':
        include 'test_sqlsrv.php';
        break;

    // Si entran a cualquier otra cosa que no existe
    default:
        header("HTTP/1.0 404 Not Found");
        echo "<h1>404 - Página no encontrada</h1>";
        echo "<p>La ruta /" . htmlspecialchars($route) . " no existe en este proyecto.</p>";
        break;
}