<?php

$id = $_POST['par1'];

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


try {
$consultaSql = "select * from producto where id =".$id;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($resultado);
?>