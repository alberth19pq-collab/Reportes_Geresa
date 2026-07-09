<?php
header("Content-Type: application/json; charset=utf-8");
require_once 'conexion.php';

function clean($v)
{
    $v = trim($v ?? '');
    if ($v === '' || strtolower($v) === 'null' || strtolower($v) === 'undefined') {
        return null;
    }
    return $v;
}

$dni = clean($_GET['dni'] ?? $_POST['dni'] ?? null);

if (!$dni) {
    echo json_encode([
        "success" => false,
        "message" => "DNI no enviado"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$sql = "EXEC dbo.SP_TIPOS_USUARIOS @DNI = ?";
$params = [$dni];

$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    echo json_encode([
        "success" => false,
        "message" => "Error al consultar permisos del usuario",
        "error" => sqlsrv_errors()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = [];
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $data[] = $row;
}

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

if (!count($data)) {
    echo json_encode([
        "success" => false,
        "message" => "Usuario no encontrado"
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    "success" => true,
    "data" => $data[0]
], JSON_UNESCAPED_UNICODE);
?>