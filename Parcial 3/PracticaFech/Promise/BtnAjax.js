$(document).ready(function(){
        $('#btn1').click(function(){
            $('#alerta1').show();
        });
        //disparo el modal
        $('#idclose').click(function(){
            $('#alerta1').hide();
        });

        $('#btn2').click(function(){
            $('#exampleModal').modal('show');
        });
});



window.onload = function() {

    document.getElementById("btnajax").addEventListener("click",pedirHeader);
    document.getElementById("btnreset").addEventListener("click",iniciarHeader);
    
    function pedirHeader() 
    {  
        var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
        solicitud.onreadystatechange = function()      // En esta propiedad declaramos la funcion a ejecutar
    {                                        
        if (solicitud.readyState == 4 && solicitud.status == 200) // cuando cambie el status del objeto XMLHttpRequest
        {                 // La respueta esta lista
            document.getElementById("myDiv").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
        }
    }; 
    solicitud.open("GET", "Archivo.txt", true);
    solicitud.send();
    }
    
    function iniciarHeader() 
    {
        document.getElementById("myDiv").innerHTML = "<P>Registro de un Nuevo Producto</P>"; 
    }
} 




 $(document).ready(function() {

//Funcion json
      $('#btnjson').click(function() {
          $.post('getregistro.php',{},function(data){

                console.log(data);
                $('#NomProducto').val(data.NomProducto);
                $('#idProducto').val(data.idProducto);
                $('#Descripcion').val(data.Descripcion);
                $('#Cantidad').val(data.Cantidad);
                $('#Proveedor').val(data.Proveedor);
                $('#Caducidad').val(data.Caducidad);
                $('#Categorias').val(data.Categorias);
                $('#idCodigo').val(data.idCodigo);
            },'json');
            });

//Funcion Promise
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


//Metodo json fetch
$(document).ready(function() {
document.getElementById("btnJsonFetch").addEventListener("click", function(){
       
    let promesa  = fetch('getRegistro.php');
    promesa.then( respuesta => respuesta.json() )
            .then( datos => {
                $('#NomProducto').val(datos.NomProducto);
                $('#idProducto').val(datos.idProducto);
                $('#Descripcion').val(datos.Descripcion);
                $('#Cantidad').val(datos.Cantidad);
                $('#Proveedor').val(datos.Proveedor);
                $('#Caducidad').val(datos.Caducidad);
                $('#Categorias').val(datos.Categorias);
                $('#idCodigo').val(datos.idCodigo);
            });
        });        
});

