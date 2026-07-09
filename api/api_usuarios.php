<?php
header("Content-Type: application/json; charset=utf-8");
require_once 'conexion.php';

/* =========================
   LIMPIEZA SEGURA
========================= */
function clean($value)
{
    if (!isset($value)) return null;

    $value = trim($value);

    if ($value === '' || strtolower($value) === 'null' || strtolower($value) === 'undefined') {
        return null;
    }

    return $value;
}

/* =========================
   NORMALIZAR TEXTO
========================= */
function normalize($value)
{
    return clean($value);
}

/* =========================
   VALIDACIONES
========================= */
function validarDNI($dni)
{
    return preg_match('/^[0-9]{8}$/', $dni);
}

function validarCelular($celular)
{
    return $celular === null || preg_match('/^[0-9]{9}$/', $celular);
}

function validarCorreo($correo)
{
    return $correo === null || filter_var($correo, FILTER_VALIDATE_EMAIL);
}

/* =========================
   EJECUTAR SP
========================= */
function ejecutarSP($conn, $sql, $params = [])
{
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo json_encode([
            "success" => false,
            "message" => "Error al ejecutar procedimiento",
            "debug" => sqlsrv_errors()
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $rows = [];
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        $rows[] = $row;
    }

    sqlsrv_free_stmt($stmt);
    return $rows;
}

/* =========================
   INPUTS
========================= */
$dni = trim($_POST['dni'] ?? '');
$password = trim($_POST['password'] ?? '');
$cargo = strtoupper(clean($_POST['cargo'] ?? 'MONITOR') ?? 'MONITOR');
$celular = clean($_POST['celular'] ?? null);
$correo = clean($_POST['correo'] ?? null);

$ue = clean($_POST['ue'] ?? null) ?? 'TODOS';
$red = clean($_POST['red'] ?? null) ?? 'TODOS';
$microred = clean($_POST['microred'] ?? null) ?? 'TODOS';
$eess = clean($_POST['eess'] ?? null) ?? 'TODOS';

/* =========================
   VALIDACIONES
========================= */
// Validar DNI
if (!validarDNI($dni)) {
    echo json_encode([
        "success" => false,
        "message" => "DNI inválido (debe tener 8 dígitos)"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar Password
if (empty($password)) {
    echo json_encode([
        "success" => false,
        "message" => "Ingrese una contraseña"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar Celular (opcional)
if (!validarCelular($celular)) {
    echo json_encode([
        "success" => false,
        "message" => "Celular inválido (debe tener 9 dígitos)"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar Correo (opcional)
if (!validarCorreo($correo)) {
    echo json_encode([
        "success" => false,
        "message" => "Correo electrónico inválido"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Validar cargo
$cargosValidos = ['MONITOR', 'COORDINADOR', 'GERENTE', 'DIGITADOR', 'PROFESIONAL'];
if (!in_array($cargo, $cargosValidos)) {
    echo json_encode([
        "success" => false,
        "message" => "Cargo inválido"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* =========================
   REGLAS POR CARGO
========================= */
switch ($cargo) {
    case 'MONITOR':
        $ue = 'TODOS';
        $red = 'TODOS';
        $microred = 'TODOS';
        $eess = 'TODOS';
        break;
    case 'COORDINADOR':
        $red = 'TODOS';
        $microred = 'TODOS';
        $eess = 'TODOS';
        break;
    case 'GERENTE':
        $microred = 'TODOS';
        $eess = 'TODOS';
        break;
    case 'DIGITADOR':
        $eess = 'TODOS';
        break;
    case 'PROFESIONAL':
        // No se modifican
        break;
}

/* =========================
   GENERAR HASH DE CONTRASEÑA
========================= */
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

/* =========================
   EJECUTAR SP_CREAR_USUARIO
========================= */
$sql = "EXEC dbo.SP_CREAR_USUARIO 
    @DNI = ?, 
    @PASSWORD_HASH = ?, 
    @CARGO = ?, 
    @UE = ?, 
    @RED = ?, 
    @MICRORED = ?, 
    @EESS = ?, 
    @CELULAR = ?, 
    @CORREO = ?";

$params = [
    $dni,
    $passwordHash,
    $cargo,
    $ue,
    $red,
    $microred,
    $eess,
    $celular,
    $correo
];

$data = ejecutarSP($conn, $sql, $params);

/* =========================
   PROCESAR RESULTADO
========================= */
if (count($data) > 0) {
    $resultado = $data[0];
    $codigo = intval($resultado['CODIGO'] ?? 1);
    $mensaje = $resultado['MENSAJE'] ?? 'Error desconocido';
    $nombre = $resultado['NOMBRE_COMPLETO'] ?? '';

    if ($codigo === 0) {
        echo json_encode([
            "success" => true,
            "message" => $mensaje,
            "nombre" => $nombre
        ], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([
            "success" => false,
            "message" => $mensaje,
            "codigo" => $codigo
        ], JSON_UNESCAPED_UNICODE);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "No se recibió respuesta del servidor"
    ], JSON_UNESCAPED_UNICODE);
}

sqlsrv_close($conn);
?>