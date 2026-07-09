<?php
// ============================================
// CONFIGURACIÓN DE ERRORES
// ============================================
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Capturar errores y devolver JSON
function handleError($errno, $errstr, $errfile, $errline) {
    echo json_encode([
        "success" => false,
        "message" => "Error interno del servidor",
        "debug" => "Error: $errstr en $errfile línea $errline"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
set_error_handler("handleError");

function handleException($e) {
    echo json_encode([
        "success" => false,
        "message" => "Error interno del servidor",
        "debug" => "Excepción: " . $e->getMessage() . " en " . $e->getFile() . " línea " . $e->getLine()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
set_exception_handler("handleException");

session_start();
header("Content-Type: application/json; charset=utf-8");

// ============================================
// INCLUIR CONEXIÓN - RUTA CORRECTA
// ============================================
// conexion.php está en la carpeta api/
if (file_exists('api/conexion.php')) {
    require 'api/conexion.php';
} else {
    echo json_encode([
        "success" => false,
        "message" => "Error de configuración: archivo conexion.php no encontrado"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}



// este es un comentario de prueba


if (!isset($conn) || $conn === false) {
    echo json_encode([
        "success" => false,
        "message" => "Error de conexión a la base de datos"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* =========================================
   FUNCIONES DE LIMPIEZA
========================================= */
function clean($v)
{
    $v = trim($v ?? '');
    if (
        $v === '' ||
        strtolower($v) === 'null' ||
        strtolower($v) === 'undefined'
    ) {
        return null;
    }
    return $v;
}

/* =========================================
   OBTENER DATOS
========================================= */
$dni       = trim($_POST['dni'] ?? '');
$password  = trim($_POST['password'] ?? '');
$cargo     = strtoupper(clean($_POST['cargo'] ?? 'MONITOR') ?? 'MONITOR');
$celular   = trim($_POST['celular'] ?? '');
$correo    = trim($_POST['correo'] ?? '');

$ue       = clean($_POST['ue'] ?? null) ?? 'TODOS';
$red      = clean($_POST['red'] ?? null) ?? 'TODOS';
$microred = clean($_POST['microred'] ?? null) ?? 'TODOS';
$eess     = clean($_POST['eess'] ?? null) ?? 'TODOS';

/* =========================================
   VALIDACIONES
========================================= */
// Validar DNI
if ($dni === '' || strlen($dni) !== 8 || !ctype_digit($dni)) {
    echo json_encode([
        "success" => false,
        "message" => "DNI inválido"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar Password
if ($password === '') {
    echo json_encode([
        "success" => false,
        "message" => "Ingrese contraseña"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar Celular (opcional)
if ($celular !== '' && !preg_match('/^[0-9]{9}$/', $celular)) {
    echo json_encode([
        "success" => false,
        "message" => "Celular debe tener 9 dígitos"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar Correo (opcional)
if ($correo !== '' && !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Correo electrónico inválido"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* =========================================
   VALIDAR DNI EN PERSONAL
========================================= */
$sqlPersonal = "SELECT TOP 1 DNI, Nombre_Completo FROM dbo.PERSONAL WHERE DNI = ?";
$paramsPersonal = [$dni];
$stmtPersonal = sqlsrv_query($conn, $sqlPersonal, $paramsPersonal);

if ($stmtPersonal === false) {
    echo json_encode([
        "success" => false,
        "message" => "Error validando personal",
        "debug" => sqlsrv_errors()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$personal = sqlsrv_fetch_array($stmtPersonal, SQLSRV_FETCH_ASSOC);
sqlsrv_free_stmt($stmtPersonal);

if (!$personal) {
    echo json_encode([
        "success" => false,
        "message" => "Identidad *DNI* No perteneciendo a GERESA"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* =========================================
   REGLAS POR CARGO
========================================= */
switch ($cargo) {
    case 'MONITOR':
        $ue       = 'TODOS';
        $red      = 'TODOS';
        $microred = 'TODOS';
        $eess     = 'TODOS';
        break;
    case 'COORDINADOR':
        $red      = 'TODOS';
        $microred = 'TODOS';
        $eess     = 'TODOS';
        break;
    case 'GERENTE':
        $microred = 'TODOS';
        $eess     = 'TODOS';
        break;
    case 'DIGITADOR':
        $eess = 'TODOS';
        break;
    case 'PROFESIONAL':
        break;
    default:
        echo json_encode([
            "success" => false,
            "message" => "Cargo inválido"
        ], JSON_UNESCAPED_UNICODE);
        exit;
}

/* =========================================
   VALIDAR USUARIO EXISTENTE
========================================= */
$sqlExiste = "SELECT TOP 1 ID_USUARIO FROM dbo.USUARIOS WHERE DNI = ?";
$paramsExiste = [$dni];
$stmtExiste = sqlsrv_query($conn, $sqlExiste, $paramsExiste);

if ($stmtExiste === false) {
    echo json_encode([
        "success" => false,
        "message" => "Error SQL",
        "debug" => sqlsrv_errors()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (sqlsrv_fetch_array($stmtExiste, SQLSRV_FETCH_ASSOC)) {
    echo json_encode([
        "success" => false,
        "message" => "El DNI ya tiene una cuenta registrada"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
sqlsrv_free_stmt($stmtExiste);

/* =========================================
   HASH PASSWORD
========================================= */
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

/* =========================================
   INSERTAR USUARIO
========================================= */
$sqlInsert = "
INSERT INTO dbo.USUARIOS
(
    DNI,
    PASSWORD_HASH,
    CARGO,
    FECHA_REGISTRO,
    ESTADO,
    UE,
    RED,
    MICRORED,
    EESS,
    CELULAR,
    CORREO
)
VALUES
(
    ?, ?, ?, GETDATE(), 1,
    ?, ?, ?, ?,
    ?, ?
)
";

$paramsInsert = [
    $dni,
    $passwordHash,
    $cargo,
    $ue,
    $red,
    $microred,
    $eess,
    $celular !== '' ? $celular : null,
    $correo !== '' ? $correo : null
];

$stmtInsert = sqlsrv_query($conn, $sqlInsert, $paramsInsert);

if ($stmtInsert === false) {
    echo json_encode([
        "success" => false,
        "message" => "Error al registrar usuario",
        "debug" => sqlsrv_errors()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* =========================================
   RESPUESTA EXITOSA
========================================= */
echo json_encode([
    "success" => true,
    "message" => "Cuenta creada correctamente"
], JSON_UNESCAPED_UNICODE);

sqlsrv_free_stmt($stmtInsert);
sqlsrv_close($conn);
?>