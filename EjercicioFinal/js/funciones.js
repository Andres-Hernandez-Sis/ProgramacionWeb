$(document).ready(function(){

//Consultar registros de la BD
$('#btnConsultar').click(function() {
            
      try{
            let parid = prompt("Teclee el ID a consultar");
            $.post('php/Registrar.php',{par1:parid},function(datatable){      
            refrescar(datatable);
            },'json');
      }
        catch{
              console.log("Error");
        }    
        });

            function refrescar(datatable) {
            console.log(datatable);
            $('#nombre').val(datatable.nombre);
            $('#id').val(datatable.id);
            $('#descripcion').val(datatable.descripcion);
            $('#cantidad').val(datatable.cantidad);
            $('#proveedor').val(datatable.proveedor);
            $('#caducidad').val(datatable.caducidad);
            $('#categorias').val(datatable.categoria);
            $('#codigo_barra').val(datatable.codigo_barra);
            if(datatable.importado == "Si") 
            {
                  document.getElementById('Si').checked = true;
            }
      }










$('#btnInsertar').click(function() {

        let nombre = $('#nombre').val();
        let descripcion = $('#descripcion').val();
        let cantidad = $('#cantidad').val();
        let proveedor = $('#proveedor').val();
        let caducidad = $('#caducidad').val();
        let categoria = $('#categoria').val();
        let codigo_barra = $('#codigo_barra').val();
        let importado = $('#inlineCheckbox1').prop("checked") == true ? "Si" : "No";

        $.post('php/Registrar.php',{nombre:nombre, descripcion:descripcion, cantidad:cantidad, proveedor:proveedor, caducidad:caducidad, categoria:categoria, codigo_barra:codigo_barra, importado:importado},function(data){
            console.log(data);
          },'json');
    });           
});