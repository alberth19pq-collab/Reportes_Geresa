<?php
// ============================================================
//  CONEXIÓN A SQL SERVER - BASE DE DATOS "Nube"
// ============================================================

$serverName = "localhost";
$database = "Nube";
$user = "ocular";
$password = "Gominol@_19961022";

$connectionOptions = array(
    "Database" => $database,
    "Uid" => $user,
    "PWD" => $password,
    "CharacterSet" => "UTF-8",
    "TrustServerCertificate" => true
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

?>