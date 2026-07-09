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
   EJECUTAR SP
========================= */
function ejecutarSP($conn, $sql, $params = [])
{
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo json_encode([
            "success" => false,
            "error" => sqlsrv_errors()
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
$tipo      = strtoupper(clean($_GET['tipo'] ?? null));

$provincia = normalize($_GET['provincia'] ?? null);
$distrito  = normalize($_GET['distrito'] ?? null);

$ue        = normalize($_GET['ue'] ?? null);
$red       = normalize($_GET['red'] ?? null);
$microred  = normalize($_GET['microred'] ?? null);
$periodo   = normalize($_GET['periodo'] ?? null);  // ← NUEVO

$dni       = normalize($_GET['dni'] ?? null);

/* =========================
   VALIDAR DNI
========================= */
if ($tipo === 'SP_VALIDAR_DNI' || $tipo === 'VALIDAR_DNI') {

    if ($dni === null) {
        echo json_encode([
            "success" => false,
            "message" => "DNI no enviado"
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $data = ejecutarSP($conn,
        "EXEC dbo.SP_VALIDAR_DNI @DNI = ?",
        [$dni]
    );

    echo json_encode([
        "success" => true,
        "existe" => count($data) > 0,
        "data" => $data
    ], JSON_UNESCAPED_UNICODE);

    sqlsrv_close($conn);
    exit;
}

/* =========================
   CATÁLOGOS - SP_CONSULTAR_CATALOGOS
   (INCLUYE ACTUALIZACION)
========================= */
$sql = "
EXEC dbo.SP_CONSULTAR_CATALOGOS
    @TIPO = ?,
    @PROVINCIA = ?,
    @DISTRITO = ?,
    @UE = ?,
    @RED = ?,
    @MICRORED = ?,
    @PERIODO = ?
";

/* =========================
   PARAMETROS
========================= */
$params = [
    $tipo,
    $provincia,
    $distrito,
    $ue,
    $red,
    $microred,
    $periodo   // ← NUEVO
];

/* =========================
   EJECUTAR
========================= */
$data = ejecutarSP($conn, $sql, $params);

/* =========================
   RESPUESTA
========================= */
echo json_encode([
    "success" => true,
    "total" => count($data),
    "data" => $data
], JSON_UNESCAPED_UNICODE);

sqlsrv_close($conn);
?>