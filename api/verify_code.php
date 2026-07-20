<?php
header('Content-Type: application/json; charset=utf-8');

require_once 'conexion.php';

$user = trim($_POST['user'] ?? '');
$code = trim($_POST['code'] ?? '');

if (empty($user) || empty($code)) {
    echo json_encode([
        'success' => false,
        'message' => 'Datos incompletos'
    ]);
    exit;
}

try {
    $conn = getDBConnection();
    
    // ============================================================
    //  BUSCAR ADMIN (SQL SERVER)
    // ============================================================
    $sql = "SELECT id, usuario, intentos_fallidos, bloqueado_hasta 
            FROM administradores 
            WHERE usuario = ? AND activo = 1";
    $params = array($user);
    $stmt = sqlsrv_query($conn, $sql, $params);
    
    if ($stmt === false) {
        throw new Exception(print_r(sqlsrv_errors(), true));
    }
    
    $admin = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
    
    if (!$admin) {
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
    //  BUSCAR CÓDIGO VÁLIDO (SQL SERVER)
    // ============================================================
    $sql = "SELECT TOP 1 id, codigo, expira_en 
            FROM codigos_verificacion 
            WHERE admin_id = ? AND usado = 0 
            ORDER BY creado_en DESC";
    $params = array($admin['id']);
    $stmt = sqlsrv_query($conn, $sql, $params);
    
    if ($stmt === false) {
        throw new Exception(print_r(sqlsrv_errors(), true));
    }
    
    $codigoDB = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
    
    if (!$codigoDB) {
        echo json_encode([
            'success' => false,
            'message' => 'No hay código activo. Solicite uno nuevo.'
        ]);
        exit;
    }
    
    // ============================================================
    //  VERIFICAR EXPIRACIÓN
    // ============================================================
    if (new DateTime($codigoDB['expira_en']) < new DateTime()) {
        echo json_encode([
            'success' => false,
            'message' => 'El código ha expirado. Solicite uno nuevo.'
        ]);
        exit;
    }
    
    // ============================================================
    //  VERIFICAR CÓDIGO
    // ============================================================
    if ($code === $codigoDB['codigo']) {
        // ✅ Código correcto - Marcar como usado
        $sql = "UPDATE codigos_verificacion SET usado = 1 WHERE id = ?";
        $params = array($codigoDB['id']);
        $stmt = sqlsrv_query($conn, $sql, $params);
        
        // Resetear intentos y actualizar último acceso
        $sql = "UPDATE administradores 
                SET intentos_fallidos = 0, ultimo_acceso = GETDATE() 
                WHERE id = ?";
        $params = array($admin['id']);
        $stmt = sqlsrv_query($conn, $sql, $params);
        
        echo json_encode([
            'success' => true,
            'message' => 'Código verificado correctamente'
        ]);
    } else {
        // ❌ Código incorrecto
        $nuevos_intentos = $admin['intentos_fallidos'] + 1;
        
        $sql = "UPDATE administradores 
                SET intentos_fallidos = ? 
                WHERE id = ?";
        $params = array($nuevos_intentos, $admin['id']);
        $stmt = sqlsrv_query($conn, $sql, $params);
        
        if ($nuevos_intentos >= 5) {
            $bloqueo = date('Y-m-d H:i:s', strtotime('+15 minutes'));
            $sql = "UPDATE administradores 
                    SET bloqueado_hasta = ? 
                    WHERE id = ?";
            $params = array($bloqueo, $admin['id']);
            $stmt = sqlsrv_query($conn, $sql, $params);
            
            echo json_encode([
                'success' => false,
                'message' => 'Demasiados intentos fallidos. Cuenta bloqueada por 15 minutos.'
            ]);
        } else {
            $restantes = 5 - $nuevos_intentos;
            echo json_encode([
                'success' => false,
                'message' => "Código incorrecto. Intentos restantes: {$restantes}"
            ]);
        }
    }
    
    sqlsrv_close($conn);
    
} catch (Exception $e) {
    error_log("Error en verify_code: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Error al verificar el código'
    ]);
}
?>