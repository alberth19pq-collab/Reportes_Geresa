<?php
/**
 * exportar_pdf.php
 * Genera un PDF horizontal (A4 landscape) con las tablas estadísticas de GERESA CUSCO.
 * Usa TCPDF (carpeta /tcpdf/ o /TCPDF-main/ en el mismo directorio).
 *
 * Parámetros GET:
 *   periodo, mes_desde, mes_hasta, provincia, distrito,
 *   ue, red, microred, eess, estrategia, tablas, orientacion
 */

// ── Sesión / autenticación ────────────────────────────────────────────────
session_start();
// if (empty($_SESSION['dniusuario'])) { http_response_code(401); exit('No autorizado'); }

// ── Parámetros de entrada ─────────────────────────────────────────────────
$periodo    = trim($_GET['periodo']    ?? '');
$mes_desde  = trim($_GET['mes_desde'] ?? '');
$mes_hasta  = trim($_GET['mes_hasta'] ?? '');
$provincia  = trim($_GET['provincia'] ?? '');
$distrito   = trim($_GET['distrito']  ?? '');
$ue         = trim($_GET['ue']        ?? '');
$red        = trim($_GET['red']       ?? '');
$microred   = trim($_GET['microred']  ?? '');
$eess       = trim($_GET['eess']      ?? '');
$estrategia = strtoupper(trim($_GET['estrategia'] ?? ''));
$tablas_raw = trim($_GET['tablas']    ?? '');

if ($tablas_raw === '') {
    exit('No se especificaron tablas.');
}

$tablas_solicitadas = array_values(array_filter(
    array_map(
        fn($t) => preg_replace('/[^A-Z0-9_]/', '', strtoupper(trim($t))),
        explode(',', $tablas_raw)
    )
));

if (empty($tablas_solicitadas)) {
    exit('Parámetro tablas inválido.');
}

// ── Catálogos ─────────────────────────────────────────────────────────────
$nombres_tablas = [
    'ROP'                      => 'ROP - Retinopatía del Prematuro',
    'VISION'                   => 'Agudeza Visual',
    'REFRACCION'               => 'Refracción',
    'RETINOPATIA'              => 'Retinopatía Diabética',
    'TRACOMA'                  => 'Tracoma',
    'EEO'                      => 'Evaluación Externa Ocular',
    'CATARATA'                 => 'Catarata',
    'GLAUCOMA'                 => 'Glaucoma',
    'CURSO_VIDA_GENERAL'       => 'Curso de Vida General',
    'CV_GESTANTE'              => 'CV Gestante',
    'PREVALENCIA_CARIES'       => 'Prevalencia de Caries',
    'AT_PREVENTIVA'            => 'Atención Preventiva',
    'AT_RECUPERATIVA'          => 'Atención Recuperativa',
    'AT_ESPECIALIZADA'         => 'Atención Especializada',
    'AT_ESPECIALIZADA_02'      => 'Atención Especializada 02',
    'AT_ESPECIALIZADA_03'      => 'Atención Especializada 03',
    'PREVENCION_BUCAL'         => 'Prevención Bucal',
    'ATENDIDOS_ATENCIONES'     => 'Atendidos y Atenciones',
    'AT_INTERCONSULTA'         => 'Atención Interconsulta',
    'REHABILITACION_PROTESICA' => 'Rehabilitación Protésica',
    'INACTIVACION_CARIES'      => 'Inactivación de Caries',
    'TELESALUD'                => 'Telesalud',
];

$nombres_meses = [
    '1'  => 'Enero',    '2'  => 'Febrero',   '3'  => 'Marzo',
    '4'  => 'Abril',    '5'  => 'Mayo',       '6'  => 'Junio',
    '7'  => 'Julio',    '8'  => 'Agosto',     '9'  => 'Septiembre',
    '10' => 'Octubre',  '11' => 'Noviembre',  '12' => 'Diciembre',
];

$nombres_estrategias = [
    'OCULAR'   => 'Salud Ocular',
    'BUCAL'    => 'Salud Bucal',
    'NO_TRANS' => 'No Transmisibles',
    'MENTAL'   => 'Salud Mental',
    'METALES'  => 'Metales Pesados',
];

// ── Obtener datos desde la API interna ────────────────────────────────────
$params_api = [
    'periodo'   => $periodo,
    'mes_desde' => $mes_desde,
    'mes_hasta' => $mes_hasta,
    'provincia' => $provincia,
    'distrito'  => $distrito,
    'ue'        => $ue,
    'red'       => $red,
    'microred'  => $microred,
    'eess'      => $eess,
    'tablas'    => implode(',', $tablas_solicitadas),
];

$_GET_BACKUP = $_GET;
$_GET        = array_merge($_GET, $params_api);

ob_start();
if ($estrategia === 'BUCAL') {
    include __DIR__ . '/api_reporte_bucal.php';
} else {
    include __DIR__ . '/api_reportes.php';
}
$json_raw = ob_get_clean();
$_GET     = $_GET_BACKUP;

$json = json_decode($json_raw, true);

if (!$json || empty($json['success']) || !isset($json['data'])) {
    exit('Error al obtener datos: ' . ($json['message'] ?? 'respuesta inválida de la API'));
}

$data_tablas = $json['data'];

// ── Filtros activos ───────────────────────────────────────────────────────
$filtros = [];
if ($periodo) $filtros['Año'] = $periodo;
if ($mes_desde || $mes_hasta) {
    $desde = $mes_desde ? ($nombres_meses[$mes_desde] ?? $mes_desde) : '—';
    $hasta = $mes_hasta ? ($nombres_meses[$mes_hasta] ?? $mes_hasta) : '—';
    $filtros['Período'] = "$desde – $hasta";
}
if ($provincia && $provincia !== 'Todos') $filtros['Provincia'] = $provincia;
if ($distrito  && $distrito  !== 'Todos') $filtros['Distrito']  = $distrito;
if ($ue)       $filtros['UE']       = $ue;
if ($red)      $filtros['Red']      = $red;
if ($microred) $filtros['Microred'] = $microred;
if ($eess)     $filtros['EESS']     = $eess;
if ($estrategia && isset($nombres_estrategias[$estrategia]))
    $filtros['Estrategia'] = $nombres_estrategias[$estrategia];

// ── Metadatos ─────────────────────────────────────────────────────────────
$fecha_generacion = date('d/m/Y H:i');
$nombre_archivo   = 'reporte_geresa_' . strtolower($estrategia) . '_' . date('Ymd_His') . '.pdf';
$etiqueta_estrat  = $nombres_estrategias[$estrategia] ?? $estrategia;

// ── Cargar TCPDF ─────────────────────────────────────────────────────────
if (file_exists(__DIR__ . '/tcpdf/tcpdf.php')) {
    require_once __DIR__ . '/tcpdf/tcpdf.php';
} elseif (file_exists(__DIR__ . '/TCPDF-main/tcpdf.php')) {
    require_once __DIR__ . '/TCPDF-main/tcpdf.php';
} else {
    exit('No se encontró TCPDF. Verifica que la carpeta tcpdf/ esté en ' . __DIR__);
}

// ── Clase PDF personalizada ───────────────────────────────────────────────
class GeresaPDF extends TCPDF
{
    public string $docFecha  = '';
    public string $docEstrat = '';

    public function Header(): void
    {
        $w = $this->getPageWidth();
        $this->SetFillColor(30, 58, 138);
        $this->Rect(0, 0, $w, 20, 'F');

        $this->SetFillColor(23, 37, 84);
        $this->RoundedRect(6, 3, 14, 14, 2, '1111', 'F');
        $this->SetFont('helvetica', 'B', 12);
        $this->SetTextColor(255, 255, 255);
        $this->SetXY(6, 5);
        $this->Cell(14, 10, 'G', 0, 0, 'C');

        $this->SetFont('helvetica', 'B', 10);
        $this->SetXY(23, 4);
        $this->Cell(0, 6, 'GERESA CUSCO — SISTEMA ESTADÍSTICO', 0, 1, 'L');

        $this->SetFont('helvetica', '', 7);
        $this->SetTextColor(191, 219, 254);
        $this->SetX(23);
        $this->Cell(0, 5, 'Gerencia Regional de Salud Cusco  ·  ' . $this->docEstrat, 0, 0, 'L');

        $this->Cell(0, 5,
            'Generado: ' . $this->docFecha . '   Pág. ' . $this->getAliasNumPage() . '/' . $this->getAliasNbPages(),
            0, 0, 'R');

        $this->SetY(23);
    }

    public function Footer(): void
    {
        $this->SetY(-10);
        $this->SetFont('helvetica', 'I', 5.5);
        $this->SetTextColor(148, 163, 184);
        $this->Cell(0, 5,
            'GERESA CUSCO  ·  Sistema Estadístico  ·  Generado: ' . $this->docFecha . '  ·  Confidencial',
            0, 0, 'C');
    }
}

// ── Instanciar PDF ────────────────────────────────────────────────────────
$pdf = new GeresaPDF('L', 'mm', 'A4', true, 'UTF-8', false);
$pdf->SetCreator('Sistema Estadístico GERESA Cusco');
$pdf->SetAuthor('GERESA Cusco');
$pdf->SetTitle('Reporte GERESA Cusco - ' . $etiqueta_estrat);
$pdf->SetSubject($etiqueta_estrat);
$pdf->SetKeywords('GERESA,Cusco,Estadística,' . $estrategia);
$pdf->docFecha  = $fecha_generacion;
$pdf->docEstrat = $etiqueta_estrat;

// ==================== MODIFICACIÓN: Márgenes MÍNIMOS (3mm izquierda/derecha) ====================
$pdf->SetMargins(3, 26, 3);  // izquierda=3, arriba=26, derecha=3 (mínimo posible)
$pdf->SetAutoPageBreak(true, 14);
$pdf->SetHeaderMargin(0);
$pdf->SetFooterMargin(8);
$pdf->setPrintHeader(true);
$pdf->setPrintFooter(true);
$pdf->AddPage();
$pdf->SetFont('helvetica', '', 7);

// ── Paleta de colores ─────────────────────────────────────────────────────
$C_AZUL      = [30,  58, 138];
$C_AZUL_OSC  = [23,  37,  84];
$C_AZUL_SUB  = [219, 234, 254];
$C_AZUL_TEXT = [30,  58, 138];
$C_BLANCO    = [255, 255, 255];
$C_GRIS1     = [248, 250, 252];
$C_BORDE     = [226, 232, 240];
$C_MUTED     = [148, 163, 184];
$C_TEXT      = [15,  23,  42];

// ==================== Ancho de página: 297mm - 6mm (márgenes 3+3) = 291mm ====================
$page_w = $pdf->getPageWidth() - 6; // A4 landscape = 297mm - 6mm = 291mm aprovechables

// ── Barra de filtros ──────────────────────────────────────────────────────
if (!empty($filtros)) {
    $pdf->SetFillColor(239, 246, 255);
    $pdf->SetDrawColor(191, 219, 254);
    $pdf->SetTextColor(29, 78, 216);
    $pdf->SetFont('helvetica', 'B', 6.5);
    $pdf->Cell($page_w, 5.5, '  FILTROS APLICADOS:', 'LTR', 1, 'L', true);

    $chips_txt = '';
    foreach ($filtros as $lbl => $v) {
        $chips_txt .= "[$lbl: $v]   ";
    }
    $pdf->SetFont('helvetica', '', 6.5);
    $pdf->SetTextColor(...$C_AZUL_TEXT);
    $pdf->SetFillColor(255, 255, 255);
    $pdf->MultiCell($page_w, 5, '  ' . trim($chips_txt), 'LBR', 'L', true);
    $pdf->Ln(4);
}

// ── Función auxiliar para calcular altura necesaria de una fila ──────────
function calcularAlturaFila($pdf, $fila, $cols, $col_widths, $font_size_col) {
    $max_lines = 1;
    $line_h    = $font_size_col * 0.45;
    
    foreach ($cols as $i => $col) {
        $v = $fila[$col] ?? '';
        $txt = ($v === null || $v === '') ? '—' : (string) $v;
        $w = $col_widths[$i];
        
        $lines = $pdf->getNumLines($txt, $w);
        if ($lines > $max_lines) {
            $max_lines = min($lines, 8);
        }
    }
    
    $altura = max(5.0, min(18.0, $max_lines * $line_h + 2.5));
    return $altura;
}

// ── Renderizar cada tabla ─────────────────────────────────────────────────
foreach ($tablas_solicitadas as $codigo) {

    $filas          = $data_tablas[$codigo] ?? [];
    $nombre_reporte = $nombres_tablas[$codigo] ?? str_replace('_', ' ', $codigo);
    $total_filas    = count($filas);

    // ── Encabezado de la tarjeta ──────────────────────────────────────────
    $pdf->SetFillColor(...$C_AZUL);
    $pdf->SetTextColor(...$C_BLANCO);
    $pdf->SetDrawColor(...$C_AZUL);
    $pdf->SetFont('helvetica', 'B', 8);
    $pdf->Cell($page_w - 30, 7, '  ' . mb_strtoupper($nombre_reporte, 'UTF-8'), 0, 0, 'L', true);
    $pdf->SetFillColor(...$C_AZUL_OSC);
    $pdf->SetFont('helvetica', '', 6.5);
    $pdf->Cell(30, 7, $total_filas . ' registros', 0, 1, 'C', true);

    // ── Sin datos ─────────────────────────────────────────────────────────
    if (empty($filas)) {
        $pdf->SetFillColor(...$C_GRIS1);
        $pdf->SetTextColor(...$C_MUTED);
        $pdf->SetDrawColor(...$C_BORDE);
        $pdf->SetFont('helvetica', 'I', 7);
        $pdf->Cell($page_w, 8, 'No hay datos para los filtros seleccionados.', 1, 1, 'C', true);
        $pdf->Ln(4);
        continue;
    }

    // ── Columnas (sin SUBTITULO) ──────────────────────────────────────────
    $cols = array_values(array_filter(array_keys($filas[0]), fn($c) => $c !== 'SUBTITULO'));
    $n    = count($cols);

    // ── Calcular tamaño de fuente según cantidad de columnas ──────────────
    if      ($n > 35) $font_size_col = 3.8;
    elseif  ($n > 28) $font_size_col = 4.2;
    elseif  ($n > 22) $font_size_col = 4.5;
    elseif  ($n > 16) $font_size_col = 5.0;
    elseif  ($n > 12) $font_size_col = 5.5;
    elseif  ($n > 8)  $font_size_col = 6.0;
    else              $font_size_col = 6.5;

    // ── Calcular anchos de columna balanceados ────────────────────────────
    $first_min = 22.0;
    $first_max = 28.0;  // Primera columna un poco más ancha
    $data_min  = 4.5;
    
    $first_w = min($first_max, max($first_min, $page_w * 0.15));
    $available = $page_w - $first_w;
    $rest_w    = ($n > 1) ? max($data_min, $available / ($n - 1)) : 0;
    
    if ($n > 1 && $rest_w < $data_min) {
        $rest_w  = $data_min;
        $first_w = max(18, $page_w - $rest_w * ($n - 1));
    }
    
    $col_widths = [];
    $col_widths[0] = round($first_w, 2);
    for ($i = 1; $i < $n; $i++) {
        $col_widths[$i] = round($rest_w, 2);
    }
    
    $suma = array_sum($col_widths);
    if (abs($suma - $page_w) > 0.1 && $n > 1) {
        $col_widths[$n - 1] += round($page_w - $suma, 2);
    }

    // ── Renderizar cabecera de columnas ───────────────────────────────────
    $renderCabecera = function () use (
        $pdf, $cols, $col_widths, $font_size_col, $n,
        $C_AZUL, $C_AZUL_OSC, $C_BLANCO, $page_w
    ) {
        $pdf->SetFont('helvetica', 'B', $font_size_col);
        $pdf->SetTextColor(...$C_BLANCO);
        $pdf->SetDrawColor(255, 255, 255);

        $line_h    = $font_size_col * 0.42;
        $max_lines = 1;

        foreach ($cols as $i => $col) {
            $lbl  = mb_strtoupper(str_replace('_', ' ', $col), 'UTF-8');
            $w    = $col_widths[$i];
            $cpp  = max(1, (int) floor($w / max(1, $font_size_col * 0.4)));
            $lines = (int) ceil(mb_strlen($lbl, 'UTF-8') / $cpp);
            if ($lines > $max_lines) $max_lines = min($lines, 4);
        }

        $cell_h    = max(6.0, $max_lines * ($line_h + 0.9) + 2.0);

        // ==================== X inicial = 3 (margen izquierdo mínimo) ====================
        $x0 = 3;
        $y0 = $pdf->GetY();

        foreach ($cols as $i => $col) {
            $lbl = mb_strtoupper(str_replace('_', ' ', $col), 'UTF-8');
            $w   = $col_widths[$i];
            $aln = ($i === 0) ? 'L' : 'C';

            if ($i === 0) $pdf->SetFillColor(...$C_AZUL_OSC);
            else          $pdf->SetFillColor(...$C_AZUL);

            $pdf->SetXY($x0, $y0);
            $pdf->MultiCell(
                $w, $cell_h, $lbl, 0, $aln, true, 0,
                $x0, $y0, true, 0, false, true, $cell_h, 'M'
            );
            $x0 += $w;
        }
        // ==================== X inicial = 3 ====================
        $pdf->SetXY(3, $y0 + $cell_h);
    };

    // Dibujar cabecera
    $renderCabecera();

    // ── Filas de datos con MultiCell para ajuste automático ───────────────
    $subtitulo_actual = '';
    $fila_par         = false;
    $pdf->SetDrawColor(...$C_BORDE);

    foreach ($filas as $fila) {

        if (!empty($fila['SUBTITULO']) && $fila['SUBTITULO'] !== $subtitulo_actual) {
            $subtitulo_actual = $fila['SUBTITULO'];
            $pdf->SetFillColor(...$C_AZUL_SUB);
            $pdf->SetTextColor(...$C_AZUL_TEXT);
            $pdf->SetFont('helvetica', 'B', $font_size_col);
            $pdf->Cell($page_w, 5.5,
                '  ' . mb_strtoupper($subtitulo_actual, 'UTF-8'),
                'TB', 1, 'L', true);
            $fila_par = false;
        }

        $row_h = calcularAlturaFila($pdf, $fila, $cols, $col_widths, $font_size_col);
        
        if ($pdf->GetY() + $row_h + 2 > ($pdf->getPageHeight() - 14)) {
            $pdf->AddPage();
            $renderCabecera();
        }

        $pdf->SetFillColor(...($fila_par ? $C_GRIS1 : $C_BLANCO));
        $pdf->SetTextColor(...$C_TEXT);
        
        // ==================== X inicial = 3 ====================
        $x_start = 3;
        $y_start = $pdf->GetY();

        foreach ($cols as $i => $col) {
            $v   = $fila[$col] ?? '';
            $txt = ($v === null || $v === '') ? '—' : (string) $v;
            $w   = $col_widths[$i];
            
            if ($i === 0) {
                $pdf->SetFont('helvetica', 'B', $font_size_col);
                $aln = 'L';
            } else {
                $pdf->SetFont('helvetica', '', $font_size_col);
                $es_num = is_numeric(str_replace(['.', ','], '', $txt)) && $txt !== '—' && $txt !== '';
                $aln = $es_num ? 'R' : 'C';
            }
            
            $pdf->SetXY($x_start, $y_start);
            $pdf->MultiCell($w, $row_h, $txt, 'B', $aln, true, 0, $x_start, $y_start, true, 0, false, true, $row_h, 'M');
            
            $x_start += $w;
        }
        
        // ==================== X inicial = 3 ====================
        $pdf->SetXY(3, $y_start + $row_h);
        $fila_par = !$fila_par;
    }

    $pdf->Ln(5);
}

// ── Salida al navegador ───────────────────────────────────────────────────
$pdf->Output($nombre_archivo, 'I');