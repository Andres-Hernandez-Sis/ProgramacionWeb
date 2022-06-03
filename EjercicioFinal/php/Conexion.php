<?php

$hostname='localhost';
$database='19100197';
$username='root';
$password='';
$port='3306';

try 
{
    $con = new PDO("mysql:host=$hostname; dbname=$database; port=$port", $username, $password);
} 
catch(PDOException $error) 
{
    echo "Error de conexion a la base de datos";
    echo $error -> getMessage();
    exit();
}
?>