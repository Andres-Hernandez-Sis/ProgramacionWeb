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

$('#btnajaxP').click(function() {
      new Promise (function (resolve,reject){
          var Solicitud = new XMLHttpRequest ();
          Solicitud.onreadystatechange = function() {
               if(Solicitud.readyState == 4 &&  Solicitud.status == 200){
                   resolve(Solicitud.responseText);
               }};
          Solicitud.open("GET","Archivo.txt", true);
          Solicitud.send();
      }).then(value => document.getElementById("myDiv").innerHTML = value);
    });
});
