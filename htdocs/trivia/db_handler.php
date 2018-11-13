<?php
$user = 'admin';
$password = 'UAMc$18o$LT3';
$servername = 'localhost';
$database = 'trivial';

$connection = new mysqli($servername, $user, $password);

if ($connection -> connect_error){
    die ("Conexión fallida" . $connection -> connect_error);
} else {
    echo "Conexión Exitosa";
}
?>