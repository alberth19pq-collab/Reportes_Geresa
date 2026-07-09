<?php
header("Content-Type: application/json; charset=utf-8");

require_once 'conexion.php';

function clean($v)
{
    if (!isset($v)) {
        return null;
    }

    $v = trim((string)$v);

    if (
        $v === '' ||
        strtolower($v) === 'null' ||
        strtolower($v) === 'undefined' ||
        strtolower($v) === 'todos'
    ) {
        return null;
    }

    return $v;
}

function toInt($v)
{
    $v = clean($v);

    if ($v === null) {
        return null;
    }

    return is_numeric($v) ? intval($v) : null;
}

function ejecutarSP($conn, $sql, $params = [])
{
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        return [
            "success" => false,
            "error"   => sqlsrv_errors()
        ];
    }

    $results = [];
    $totalRegistros = 0;

    do {
        $rows    = [];
        $reporte = null;
        $cols    = [];

        $meta = sqlsrv_field_metadata($stmt);
        if (is_array($meta)) {
            foreach ($meta as $field) {
                $cols[] = $field['Name'];
            }
        }

        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
            if ($reporte === null && isset($row['REPORTE'])) {
                $reporte = strtoupper(trim((string)$row['REPORTE']));
            }
            unset($row['REPORTE']);
            $rows[] = $row;
            $totalRegistros++;
        }

        if ($reporte !== null) {
            $results[$reporte] = $rows;
            error_log("✅ Tabla: $reporte - " . count($rows) . " registros");
        } elseif (!empty($rows)) {
            $results['DATA'] = $rows;
            error_log("⚠️ Datos sin REPORTE: " . count($rows) . " registros");
        }

    } while (sqlsrv_next_result($stmt));

    sqlsrv_free_stmt($stmt);

    error_log("📊 TOTAL registros procesados: $totalRegistros");
    error_log("📋 Tablas encontradas: " . implode(', ', array_keys($results)));

    return [
        "success" => true,
        "data"    => $results
    ];
}

$periodo  = toInt($_GET['periodo']   ?? null);
$mesDesde = toInt($_GET['mes_desde'] ?? null);
$mesHasta = toInt($_GET['mes_hasta'] ?? null);

$provincia = clean($_GET['provincia'] ?? null);
$distrito  = clean($_GET['distrito']  ?? null);
$ue        = clean($_GET['ue']        ?? null);
$red       = clean($_GET['red']       ?? null);
$microred  = clean($_GET['microred']  ?? null);
$eess      = clean($_GET['eess']      ?? null);
$tablas    = clean($_GET['tablas']    ?? null);

// 🔍 LOG DE DEPURACIÓN
error_log("========================================");
error_log("📡 API NO_TRANS - Parámetros recibidos:");
error_log("   PERIODO: " . ($periodo ?? 'NULL'));
error_log("   PROVINCIA: " . ($provincia ?? 'NULL'));
error_log("   UE: " . ($ue ?? 'NULL'));
error_log("   TABLAS: " . ($tablas ?? 'NULL'));
error_log("========================================");

$sql = "
EXEC dbo.SP_CONSULTAR_REPORTE_NO_TRANS
    @PERIODO   = ?,
    @MES_DESDE = ?,
    @MES_HASTA = ?,
    @PROVINCIA = ?,
    @DISTRITO  = ?,
    @UE        = ?,
    @RED       = ?,
    @MICRORED  = ?,
    @EESS      = ?,
    @TABLAS    = ?
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
        "message" => "Error al ejecutar el reporte de No Transmisibles.",
        "error"   => $response["error"]
    ], JSON_UNESCAPED_UNICODE);
    sqlsrv_close($conn);
    exit;
}

// 🔍 Verificar si HTA_PAC_HIPERTENSOS está en los resultados
if (!isset($response["data"]["HTA_PAC_HIPERTENSOS"])) {
    error_log("⚠️ ADVERTENCIA: HTA_PAC_HIPERTENSOS NO está en los resultados");
    error_log("📋 Tablas disponibles: " . implode(', ', array_keys($response["data"])));
} else {
    error_log("✅ HTA_PAC_HIPERTENSOS encontrado con " . count($response["data"]["HTA_PAC_HIPERTENSOS"]) . " registros");
}

echo json_encode([
    "success" => true,
    "filtros" => [
        "periodo"   => $periodo,
        "mes_desde" => $mesDesde,
        "mes_hasta" => $mesHasta,
        "provincia" => $provincia,
        "distrito"  => $distrito,
        "ue"        => $ue,
        "red"       => $red,
        "microred"  => $microred,
        "eess"      => $eess,
        "tablas"    => $tablas
    ],
    "data" => $response["data"]
], JSON_UNESCAPED_UNICODE);

sqlsrv_close($conn);
?>