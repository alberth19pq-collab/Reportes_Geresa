<?php
header('Content-Type: application/json; charset=utf-8');

// ============================================================
//  CREDENCIALES DEL ADMINISTRADOR (SOLO EN EL SERVIDOR)
// ============================================================
// ¡Nunca expuestas al cliente!
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'Admin2026');

// ============================================================
//  PROCESAR LOGIN
// ============================================================
$user = trim($_POST['user'] ?? '');
$pass = trim($_POST['pass'] ?? '');

if (empty($user) || empty($pass)) {
    echo json_encode([
        'success' => false,
        'message' => 'Ingrese usuario y contraseña'
    ]);
    exit;
}

// Validar credenciales
if ($user === ADMIN_USER && $pass === ADMIN_PASS) {
    echo json_encode([
        'success' => true,
        'message' => 'Acceso concedido'
    ]);
} else {
    // Opcional: Registrar intentos fallidos
    // file_put_contents('logs/admin_login_errors.log', date('Y-m-d H:i:s') . " - Intento fallido: $user\n", FILE_APPEND);
    
    echo json_encode([
        'success' => false,
        'message' => 'Usuario o contraseña incorrectos'
    ]);
}
?>