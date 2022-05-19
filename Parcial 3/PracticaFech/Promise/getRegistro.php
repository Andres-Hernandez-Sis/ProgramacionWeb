<?php

$registro['nomProducto']    ='Atun';
$registro['idProducto']     ='1';
$registro['Descripcion']    ='25 gr.';
$registro['Cantidad']       ='20';
$registro['Proveedor']      ='Tuny';
$registro['Caducidad']      ='20/06/22';
$registro['Categorias']     ='Carnes';
$registro['idcodigo']       ='394958430';


$registroJson = json_encode($registro);
echo $registroJson;
?>