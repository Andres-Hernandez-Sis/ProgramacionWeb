$(document).ready(function(){

//Consultar registros de la BD SIRVE
$('#btnConsultar').click(function() {

try{
            swal("Teclee el ID a consultar: ",{
              icon: 'info',
              content: "input",
            })
              .then((parid) => {
              if(parid == false){
                swal("Error","Ingresa un ID", "error"); 
              }
              $.post('php/Consultar.php',{par1:parid},function(dato){      
                if(dato == false){
                  Swal.fire("No se encontro el producto"," Tal vez no exista? 🤔", "info")
              }
              else{
                refrescar(dato);
                console.log("Se agrego un objeto")
              }
              },'json');
            })
}         
catch(error) {
            Swal.fire("Error", "Ha ocurrido un error", "error" + error);
}
});

$('#btnInsertar').click(function() {
try{
            let nom = $('#nombre').val();
            let des = $('#descripcion').val();
            let cant= $('#cantidad').val();
            let prov = $('#proveedor').val();
            let cad = $('#caducidad').val();
            let cate = $('#categoria').val();
            let codbar = $('#codigo_barra').val();
            let imp = $('#inlineCheckbox1').prop('checked') ? 'Si' : 'No'; // nofunciona tampoco

            if(nom == "" || cant == "" || des =="" || prov == "" || cad == "" || codbar == ""){
                Swal.fire("Error:", "Rellene los campos vacíos.", "error");  
            }
            else{
              $.post('php/Registrar.php',{nombre:nom, descripcion:des, cantidad:cant, proveedor:prov, caducidad:cad, categoria:cate, codigo_barra:codbar, importado:imp},function(dato){
                refrescar(dato);
              },'json');
              Swal.fire("Exito 🤑", "Se ha añadió un nuevo producto", "success");
            }
            
}
catch(error) {
  Swal.fire("Error", "Ha ocurrido un error", "error" + error);
}
            
});   



$('#btnEliminar').click(function() {

try{
              let id = $('#id').val();
              if (id == null || id =="" || id == false)
              {
                Swal.fire("Algo salió mal", "No se pudo eliminar el producto.", "info" + error);
              }
              else{
                $.post('php/Eliminar.php',{par1:id},function(dato){
                  refrescar(dato);
                },'json');
                Swal.fire("Exito", "Se eliminó el producto 🤠", "info" + error);
              }
              
}
catch(error) {
    Swal.fire("Error", "Ha ocurrido un error:C", "error" + error);
}
          
});

$('#btEliminar').click(function(){
      var ID = document.getElementById("inputID").value;
      if (ID == null || ID == "") {
          swal("Error", "No es posible eliminar un usuario que no existe", "error");
      } 
      else 
      {
          $.post('php/Eliminar.php', {par1:ID}, function(dato){
              swal("Accion completada", "Se ha eliminado correctamente", "success");
              LimpiarFormulario();
          },'json');            
      }
});

    
  
$('#btnLimpiar').click(function(){
  limpiar();
});

function refrescar(obj) {
      
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
      $('#codigo_barra').val("");
      let timerInterval
      Swal.fire({
            title: 'Limpiando ✨',
            html: 'Tiempo restante: <b>',
            timer: 500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
      }).then((result) => {
            if (result.dismiss == Swal.DismissReason.timer) {
              console.log('Se limpiaron los campos')
            }
      })
}




});