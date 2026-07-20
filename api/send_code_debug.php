<?php
// ============================================================
//  MODO DE DEPURACIÓN - MUESTRA TODOS LOS ERRORES
// ============================================================
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

header('Content-Type: application/json; charset=utf-8');

// ============================================================
//  INCLUIR ARCHIVOS
// ============================================================
require_once 'conexion.php';

// ============================================================
//  VERIFICAR PHPMailer - SIN ECOS DE DEPURACIÓN
// ============================================================
$phpmailer_found = false;
$paths = [
    '../PHPMailer/PHPMailer.php',
    'PHPMailer/PHPMailer.php',
    '../../PHPMailer/PHPMailer.php',
    __DIR__ . '/../PHPMailer/PHPMailer.php'
];

foreach ($paths as $path) {
    if (file_exists($path)) {
        require_once $path;
        $phpmailer_found = true;
        break;
    }
}

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
    //  BUSCAR ADMIN
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
    //  GENERAR CÓDIGO
    // ============================================================
    $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
    $expiry = date('Y-m-d H:i:s', strtotime('+5 minutes'));
    
    // ============================================================
    //  GUARDAR CÓDIGO
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
    // Usar PHPMailer si está disponible
    if ($phpmailer_found && class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        try {
            use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\Exception;
            
            $mail = new PHPMailer(true);
            
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'alberth19pq@gmail.com';
            $mail->Password   = 'fege ofkk vliq gqra';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;
            $mail->CharSet    = 'UTF-8';
            
            $mail->setFrom('alberth19pq@gmail.com', 'GERESA Cusco');
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
            // Si PHPMailer falla, usar mail() como respaldo
            echo json_encode([
                'success' => false,
                'message' => 'Error al enviar correo: ' . $mail->ErrorInfo
            ]);
        }
    } else {
        // Fallback: usar mail() nativo
        $subject = "🔐 Código de acceso - GERESA Cusco";
        $message = "Hola {$admin['usuario']},\n\n";
        $message .= "Tu código de acceso es: $code\n\n";
        $message .= "Este código expirará en 5 minutos.\n";
        $message .= "No compartas este código con nadie.\n\n";
        $message .= "GERESA Cusco - Oficina de Estadística";
        
        $headers = "From: alberth19pq@gmail.com\r\n";
        $headers .= "Reply-To: alberth19pq@gmail.com\r\n";
        
        if (mail($admin['email'], $subject, $message, $headers)) {
            echo json_encode([
                'success' => true,
                'message' => 'Código enviado correctamente (mail nativo)',
                'email' => $admin['email']
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Error al enviar el correo. Verifique la configuración.'
            ]);
        }
    }
    
    sqlsrv_close($conn);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>