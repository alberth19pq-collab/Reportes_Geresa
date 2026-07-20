<?php
header('Content-Type: application/json; charset=utf-8');

require_once 'conexion.php';

// ============================================================
//  RUTAS PHPMailer (¡CORRECTAS!)
// ============================================================
// PHPMailer está en: reporteador/PHPMailer/
// send_code.php está en: reporteador/api/
// Desde api/ subimos un nivel a reporteador/ y entramos a PHPMailer/
require_once '../PHPMailer/PHPMailer.php';
require_once '../PHPMailer/SMTP.php';
require_once '../PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ============================================================
//  CONFIGURACIÓN DE CORREO
// ============================================================
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_USER', 'alberth19pq@gmail.com');
define('SMTP_PASS', 'fege ofkk vliq gqra');
define('SMTP_PORT', 587);

// ============================================================
//  RECIBIR USUARIO
// ============================================================
$user = trim($_POST['user'] ?? '');

if (empty($user)) {
    echo json_encode([
        'success' => false,
        'message' => 'Ingrese el usuario'
    ]);
    exit;
}

try {
    $conn = getDBConnection();
    
    // ============================================================
    //  BUSCAR ADMIN (SQL SERVER)
    // ============================================================
    $sql = "SELECT id, usuario, email, bloqueado_hasta, intentos_fallidos 
            FROM administradores 
            WHERE usuario = ? AND activo = 1";
    
    $params = array($user);
    $stmt = sqlsrv_query($conn, $sql, $params);
    
    if ($stmt === false) {
        throw new Exception(print_r(sqlsrv_errors(), true));
    }
    
    $admin = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
    
    if (!$admin) {
        sleep(2);
        echo json_encode([
            'success' => false,
            'message' => 'Usuario no registrado'
        ]);
        exit;
    }
    
    // ============================================================
    //  VERIFICAR BLOQUEO
    // ============================================================
    if ($admin['bloqueado_hasta'] && new DateTime($admin['bloqueado_hasta']) > new DateTime()) {
        $restante = (new DateTime($admin['bloqueado_hasta']))->diff(new DateTime())->i;
        echo json_encode([
            'success' => false,
            'message' => "Cuenta bloqueada. Intente en {$restante} minutos"
        ]);
        exit;
    }
    
    // ============================================================
    //  GENERAR CÓDIGO DE 6 DÍGITOS
    // ============================================================
    $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
    $expiry = date('Y-m-d H:i:s', strtotime('+5 minutes'));
    
    // ============================================================
    //  GUARDAR CÓDIGO EN BD (SQL SERVER)
    // ============================================================
    $sql = "DELETE FROM codigos_verificacion WHERE admin_id = ? AND usado = 0";
    $params = array($admin['id']);
    $stmt = sqlsrv_query($conn, $sql, $params);
    
    $sql = "INSERT INTO codigos_verificacion (admin_id, codigo, expira_en) 
            VALUES (?, ?, ?)";
    $params = array($admin['id'], $code, $expiry);
    $stmt = sqlsrv_query($conn, $sql, $params);
    
    if ($stmt === false) {
        throw new Exception(print_r(sqlsrv_errors(), true));
    }
    
    // ============================================================
    //  ENVIAR CORREO
    // ============================================================
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->CharSet    = 'UTF-8';
        
        $mail->setFrom(SMTP_USER, 'GERESA Cusco');
        $mail->addAddress($admin['email']);
        
        $mail->isHTML(true);
        $mail->Subject = '🔐 Código de acceso - GERESA Cusco';
        $mail->Body    = "
            <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
                <h2 style='color: #1a2338;'>🔐 Código de verificación</h2>
                <p>Hola <strong>{$admin['usuario']}</strong>,</p>
                <p>Tu código de acceso es:</p>
                <div style='background: #f0f4ff; padding: 25px; text-align: center; border-radius: 10px; margin: 25px 0;'>
                    <span style='font-size: 52px; font-weight: bold; letter-spacing: 10px; color: #3b82f6;'>
                        $code
                    </span>
                </div>
                <p style='color: #666;'><strong>⏰ Este código expirará en 5 minutos.</strong></p>
                <p style='color: #999; font-size: 13px;'>🔒 No compartas este código con nadie.</p>
                <hr style='border: none; border-top: 1px solid #eee; margin: 20px 0;'>
                <p style='color: #999; font-size: 11px;'>GERESA Cusco - Oficina de Estadística</p>
            </div>
        ";
        
        $mail->AltBody = "Tu código de acceso es: $code. Expira en 5 minutos.";
        
        $mail->send();
        
        echo json_encode([
            'success' => true,
            'message' => 'Código enviado correctamente',
            'email' => $admin['email']
        ]);
        
    } catch (Exception $e) {
        error_log("Error al enviar correo: " . $mail->ErrorInfo);
        echo json_encode([
            'success' => false,
            'message' => 'Error al enviar el correo. Verifica la configuración.'
        ]);
    }
    
    sqlsrv_close($conn);
    
} catch (Exception $e) {
    error_log("Error en send_code: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Error al procesar la solicitud'
    ]);
}
?>