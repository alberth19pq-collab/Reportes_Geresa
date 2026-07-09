<?php
header("Content-Type: application/json; charset=utf-8");
require_once 'conexion.php';

function clean($v)
{
    if (!isset($v)) return null;
    $v = trim((string)$v);
    if (
        $v === '' ||
        strtolower($v) === 'null' ||
        strtolower($v) === 'undefined' ||
        strtolower($v) === 'todos'
    ) return null;
    return $v;
}

function toInt($v)
{
    $v = clean($v);
    if ($v === null) return null;
    return is_numeric($v) ? intval($v) : null;
}

function ejecutarSP($conn, $sql, $params = [])
{
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        return ["success" => false, "error" => sqlsrv_errors()];
    }

    $results = [];
    $i = 0;

    do {
        $rows = [];
        $reporte = null;

        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
            if (isset($row['REPORTE'])) {
                $reporte = strtoupper(trim((string)$row['REPORTE']));
                unset($row['REPORTE']);
            }
            $rows[] = $row;
        }

        if (!empty($rows)) {
            $key = $reporte !== null ? $reporte : ('SET_' . (++$i));
            $results[$key] = $rows;
        }
    } while (sqlsrv_next_result($stmt));

    sqlsrv_free_stmt($stmt);

    return ["success" => true, "data" => $results];
}

$periodo  = toInt($_GET['periodo'] ?? null);
$mesDesde = toInt($_GET['mes_desde'] ?? null);
$mesHasta = toInt($_GET['mes_hasta'] ?? null);

$provincia = clean($_GET['provincia'] ?? null);
$distrito  = clean($_GET['distrito'] ?? null);
$ue        = clean($_GET['ue'] ?? null);
$red       = clean($_GET['red'] ?? null);
$microred  = clean($_GET['microred'] ?? null);
$eess      = clean($_GET['eess'] ?? null);
$tablas    = clean($_GET['tablas'] ?? null);

$sql = "
EXEC dbo.SP_CONSULTAR_REPORTE_OCULAR
    @PERIODO=?,
    @MES_DESDE=?,
    @MES_HASTA=?,
    @PROVINCIA=?,
    @DISTRITO=?,
    @UE=?,
    @RED=?,
    @MICRORED=?,
    @EESS=?,
    @TABLAS=?
";

$params = [
    $periodo,
    $mesDesde,
    $mesHasta,
    $provincia,
    $distrito,
    $ue,
    $red,
    $microred,
    $eess,
    $tablas
];

$response = ejecutarSP($conn, $sql, $params);

if (!$response["success"]) {
    echo json_encode([
        "success" => false,
        "message" => "Error al ejecutar el reporte.",
        "error" => $response["error"]
    ], JSON_UNESCAPED_UNICODE);
    sqlsrv_close($conn);
    exit;
}

echo json_encode([
    "success" => true,
    "filtros" => [
        "periodo" => $periodo,
        "mes_desde" => $mesDesde,
        "mes_hasta" => $mesHasta,
        "provincia" => $provincia,
        "distrito" => $distrito,
        "ue" => $ue,
        "red" => $red,
        "microred" => $microred,
        "eess" => $eess,
        "tablas" => $tablas
    ],
    "data" => $response["data"]
], JSON_UNESCAPED_UNICODE);

sqlsrv_close($conn);
?>