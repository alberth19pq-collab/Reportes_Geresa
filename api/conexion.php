<?php

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

// Intentar conectar
$conn = sqlsrv_connect($serverName, $connectionOptions);

// NO mostrar nada, solo devolver la conexión
// Si falla, $conn será false y quien incluya este archivo lo manejará

?>