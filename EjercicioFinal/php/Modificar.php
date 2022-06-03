<?php

include("conexion.php");

$id = $_POST['par1'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$cantidad = $_POST['cantidad'];
$proveedor = $_POST['proveedor'];
$caducidad = $_POST['caducidad'];
$categoria = $_POST['categoria'];
$codigo_barra = $_POST['codigo_barra'];
$importado = $_POST['importado'];


try 
    {
    $consultaSql= "UPDATE producto SET nombre='$nombre',descripcion='$descripcion',cantidad='$cantidad',proveedor='$proveedor',caducidad='$caducidad',categoria='$categoria',codigo_barra='$codigo_barra', importado = '$importado' WHERE id=".$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta ->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
    } 
catch(PDOException $e) 
    {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
    echo json_encode($resultado);
?>