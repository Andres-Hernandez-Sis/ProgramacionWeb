<?php

include ("Conexion.php");


$id= $_POST['par1'];

try {
    $consultaSql= "delete from producto where id = ".$id;
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