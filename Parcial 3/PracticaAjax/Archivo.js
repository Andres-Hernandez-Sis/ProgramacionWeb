window.onload = function() {

document.getElementById("btnajax").addEventListener("click",pedirHeader);
document.getElementById("btnreset").addEventListener("click",iniciarHeader);

function pedirHeader() {

var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                            // cuando cambie el status del objeto XMLHttpRequest
   // console.log({solicitud})
    if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
        document.getElementById("myDiv").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
}};

solicitud.open("GET", "Archivo.txt", true);
solicitud.send();

 }

function iniciarHeader() {
	document.getElementById("myDiv").innerHTML = "<P>Registro de un Nuevo Producto</P>"; 
}

} 