    $(document).ready(function() {


      $('#btnjson').click(function() {
          $.post('getregistro.php',{},function(data){

                console.log(data);
                $('#nomProducto').val(data.nomProducto);
                $('#idProducto').val(data.idProducto);
                $('#Descripcion').val(data.Descripcion);
                $('#Cantidad').val(data.Cantidad);
                $('#Proveedor').val(data.Proveedor);
                $('#Caducidad').val(data.Caducidad);
                $('#Categorias').val(data.Categorias);
                $('#idcodigo').val(data.idcodigo);
            },'json');
      });
});
