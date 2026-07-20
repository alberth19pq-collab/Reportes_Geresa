<?php
header('Content-Type: application/json; charset=utf-8');
require_once "conexion.php";

function clean($v) {
    if (!isset($v)) return null;
    $v = trim((string)$v);
    if ($v === '' || strtolower($v) === 'null' || strtolower($v) === 'undefined' || strtolower($v) === 'todos') return null;
    return $v;
}

function toInt($v) {
    $v = clean($v);
    if ($v === null) return null;
    return is_numeric($v) ? intval($v) : null;
}

function ejecutarSP($conn, $sql, $params) {
    $stmt = sqlsrv_query($conn, $sql, $params);
    if ($stmt === false) {
        return ['success' => false, 'error' => sqlsrv_errors()];
    }

    $results = [];
    do {
        $rows = [];
        $reporte = null;
        $meta = sqlsrv_field_metadata($stmt);
        $cols = [];

        if (is_array($meta)) {
            foreach ($meta as $field) {
                $cols[] = $field['Name'];
            }
        }

        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
            if ($reporte === null && isset($row['REPORTE'])) {
                $reporte = strtoupper(trim((string)$row['REPORTE']));
                unset($row['REPORTE']);
            }
            $rows[] = $row;
        }

        if ($reporte !== null) {
            $results[$reporte] = $rows;
        } elseif (!empty($rows)) {
            $results['DATA'] = $rows;
        }
    } while (sqlsrv_next_result($stmt));

    sqlsrv_free_stmt($stmt);
    return ['success' => true, 'data' => $results];
}

$periodo   = toInt($_GET['periodo'] ?? null);
$mesDesde  = toInt($_GET['mesdesde'] ?? null);
$mesHasta  = toInt($_GET['meshasta'] ?? null);
$provincia = clean($_GET['provincia'] ?? null);
$distrito  = clean($_GET['distrito'] ?? null);
$ue        = clean($_GET['ue'] ?? null);
$red       = clean($_GET['red'] ?? null);
$microred  = clean($_GET['microred'] ?? null);
$eess      = clean($_GET['eess'] ?? null);
$tablas    = clean($_GET['tablas'] ?? null);

// ✅ CORREGIDO - Nombre del SP con guiones bajos
$sql = "{CALL dbo.SP_CONSULTAR_REPORTE_METALES_PESADOS(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)}";
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

if (!$response['success']) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al ejecutar el reporte de metales pesados.',
        'error' => $response['error']
    ], JSON_UNESCAPED_UNICODE);
    sqlsrv_close($conn);
    exit;
}

echo json_encode([
    'success' => true,
    'filtros' => [
        'periodo' => $periodo,
        'mesdesde' => $mesDesde,
        'meshasta' => $mesHasta,
        'provincia' => $provincia,
        'distrito' => $distrito,
        'ue' => $ue,
        'red' => $red,
        'microred' => $microred,
        'eess' => $eess,
        'tablas' => $tablas
    ],
    'data' => $response['data']
], JSON_UNESCAPED_UNICODE);

sqlsrv_close($conn);
?>