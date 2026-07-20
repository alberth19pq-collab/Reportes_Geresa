<?php

header("Content-Type: application/json; charset=utf-8");

session_start();
$_SESSION ['abcxxx'] = 'xxx000';
require 'conexion.php';

$dni      = htmlentities( trim($_POST["dni"] ?? ""));
$password = htmlentities( trim($_POST["password"] ?? "")); 

if ($dni === "" || $password === "") {
    echo json_encode([
        "success" => false,
        "message" => "Complete los datos"
    ]);
    exit;
}

// Llamar al procedimiento almacenado
$sql = "{ CALL dbo.USUARIO_VALIDAR(?) }";
//
$stmt = sqlsrv_query($conn, $sql, [$dni]);

if ($stmt === false) {
    echo json_encode([
        "success" => false,
        "message" => "Error SQL",
        "error"   => sqlsrv_errors()
    ]);
    exit;
}

$user = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);

if (!$user) {
    echo json_encode([
        "success" => false,
        "message" => "Usuario no encontrado"
    ]);
    exit;
}

$dbPass = trim($user["PASSWORD_HASH"] ?? "");
$isValid = false;

if (password_get_info($dbPass)['algo']) {
    $isValid = password_verify($password, $dbPass);
} else {
    $isValid = ($password === $dbPass);
    $_SESSION['abcxxx'] = 'xxx001';
}

if (!$isValid) {
    echo json_encode([
        "success" => false,
        "message" => "Contraseña incorrecta"
    ]);
    exit;
}

$nombre = trim($user["Nombre_Completo"] ?? "");
if ($nombre === "") {
    $nombre = "USUARIO";
}

$_SESSION["dni"]    = $user["DNI"];
$_SESSION["nombre"] = $nombre;
$_SESSION["cargo"]  = $user["CARGO"];

echo json_encode([
    "success" => true,
    "nombre"  => $nombre,
    "cargo"   => $user["CARGO"]
]);