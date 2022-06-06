$(document).ready(function(){

//Consultar registros de la BD SIRVE
$('#btnsConsultar').click(function() {
      
            let parid = prompt("Teclee el ID a consultar");
  
            $.post('php/Consultar.php',{par1:parid},function(dato){      
            refrescar(dato);
            },'json');

});

$('#btnInsertar').click(function() {

            let nom = $('#nombre').val();
            let des = $('#descripcion').val();
            let cant= $('#cantidad').val();
            let prov = $('#proveedor').val();
            let cad = $('#caducidad').val();
            let cate = $('#categoria').val();
            let codbar = $('#codigo_barra').val();
            let imp = $('#inlineCheckbox1').prop('checked') ? 'Si' : 'No'; // nofunciona tampoco

            $.post('php/Registrar.php',{nombre:nom, descripcion:des, cantidad:cant, proveedor:prov, caducidad:cad, categoria:cate, codigo_barra:codbar, importado:imp},function(dato){
            refrescar(dato);
          },'json');
});   



$('#btnBorrar').click(function() {
            let id = $('#id').val();
          $.post('php/Eliminar.php',{id:par1},function(dato){
            refrescar(dato);
          },'json');
});


$('#btnLimpiar').click(function(){
      limpiar();
});
    
  


function refrescar(obj) {
      console.log(obj);
      $('#nombre').val(obj.nombre);
      $('#id').val(obj.id);
      $('#descripcion').val(obj.descripcion);
      $('#cantidad').val(obj.cantidad);
      $('#proveedor').val(obj.proveedor);
      $('#caducidad').val(obj.caducidad);
      $('#categorias').val(obj.categoria);
      $('#codigo_barra').val(obj.codigo_barra);
      obj.importado == "Si" ? $('#inlineCheckbox1').prop("checked",true) : $('#inlineCheckbox1').prop("checked",false);
}

function limpiar(){
      $('#nombre').val("");
      $('#id').val("");
      $('#descripcion').val("");
      $('#cantidad').val("");
      $('#proveedor').val("");
      $('#caducidad').val("");
      $('#categorias').val("");
      $('#codigo_barra').val("");
  }

});