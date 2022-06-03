<?php

include 'Conexion.php';

$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$cantidad = $_POST['cantidad'];
$proveedor = $_POST['proveedor'];
$caducidad = $_POST['caducidad'];
$categoria = $_POST['categoria'];
$codigo_barra = $_POST['codigo_barra'];
$importado = $_POST['importado'];

try {        
$consultaSql = "INSERT INTO `producto`(`nombre`,`descripcion`,`cantidad`,`proveedor`,`caducidad`,`categoria`,`codigo_barra`,`importado`) VALUES ('$nombre' , '$descripcion', '$cantidad', '$proveedor', '$caducidad', '$categoria', '$codigo_barra', '$importado')";                    
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta -> closeCursor();

} catch(PDOException $e) {
    echo "Error al agregar a la base de datos";
    echo $e->getMessage();
}
?>
