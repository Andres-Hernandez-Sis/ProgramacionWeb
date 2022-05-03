# ¿Que es Ajax y como funciona?
------------------
Asynchronous JavaScript and XML (Ajax) es un grupo de tecnologías que se utilizan para desarrollar aplicaciones web. Permitiendo que las paginas web sean mas receptivas ya que los paquetes pequeños de datos se intercambian con el servidor y las páginas web no se vuelven a cargar cada vez que un usuario realiza un cambio de entrada.

Ajax se compone de las siguientes tecnologías:
- XHTML y CSS para presentar información.
- DOM (Document Object Model - modelo de objetos de documento) para visualizar e interactuar de forma dinámica la información presentada.
- El objeto XMLHttpRequest para manipular los datos de forma asíncrona con el servidor web.
- XML, HTML y XSLT para el intercambio y la manipulación de datos.
- Se visualiza JavaScript para enlazar solicitudes e información de datos.

Tabla comparativa entre el modelo convencional y Ajax:

| Convencional   |  AJAX |
| ----------- | ----------- |
| 1. Se envía una solicitud HTTP desde el navegador web al servidor.  | 1. El navegador crea una llamada de JavaScript que luego activará XMLHttpRequest.  |
| 2. El servidor recibe y, posteriormente, recupera los datos.   | 2. En segundo plano, el navegador web crea una solicitud HTTP al servidor.        |
|  3. El servidor envía los datos solicitados al navegador web.  | 3. El servidor recibe, recupera y envía los datos al navegador web.             |
| 4. El navegador web recibe los datos y vuelve a cargar la página para que aparezcan los datos. | 4. El navegador web recibe los datos solicitados que aparecerán directamente en la página. No se necesita recargar. |


Ajax incorpora nuevas tecnologías para crear un nuevo enfoque al desarrollo de aplicaciones web. Definiendo un método de iniciar un cliente con la comunicación del servidor sin recargas de páginas. Proporciona una forma de permitir actualizaciones de página parciales. Desde una perspectiva de usuario de página web, significa que la mejora de la interacción con una aplicación web, que proporciona al usuario más control de su entorno, es similar a la de una aplicación de escritorio.


### Limitaciones de Ajax
------------------
Aunque Ajax se ha diseñado para que las páginas web sean más receptivas e interactivas con un usuario, como todo, presenta algunas limitaciones:

- **Soporte de navegador:** No todos los navegadores admiten JavaScript o el objeto XMLHttpRequest. Inclusive algunos de estos no tienen soporte para estas herramientas provocando que los objetos se traten de distinta manera. 

- **Seguridad y privacidad de usuario:** Es necesario tener en cuenta los problemas relacionados con la seguridad y la privacidad de usuario a la hora de desarrollar una aplicación Ajax.

- **Accesibilidad:** Como ya sabemos no todos los navegadores disponen de soporte para JavaScript o el objeto XMLHttpRequest, por lo que es importante asegurarnos que la aplicación web sea accesible para todos los usuarios.

- **Marcador y navegación:** Ajax se utiliza para cargar bits de contenido de forma asíncrona en una página existente, por lo que es posible que parte de la información de la página no corresponda a una página recién cargada. Puede que el historial del navegador y los marcadores no se comporten de forma correcta porque el URL no se ha modificado aunque ciertas partes de la página se hayan cambiado.

- **Motor de búsqueda:** No es posible realizar búsquedas en aplicaciones Ajax; sin embargo, sí se pueden utilizar las características y elementos de Ajax de una aplicación en la que se puedan realizar búsquelas.


### Ventajas de Ajax
----------------------------------

Ventajas

1. No es necesario recargar la página web completa, con lo que todo es más rápido.

2.  El usuario no percibe que haya demoras (está trabajando y al ser las comunicaciones en segundo plano no hay interrupciones).

3. Los pasos que antes podía ser necesario dar cargando varias páginas web pueden quedar condensados en una sola página que va cambiando gracias a Ajax y a la información recibida del servidor.

### Desventajas de Ajax
------------------------

1.  El usuario puede perder funcionalidades que hacía con webs tradicionales puesto que no hay cambio de página web. Como los botones de avance y retroceso del navegador o añadir una página a favoritos puede dejar de ser posible.

2.  El desarrollo de aplicaciones web se puede volver más complejo.

3.  Existen problemas y restricciones de seguridad relacionados con el uso de Ajax. Hay que tener en cuenta que por motivos de seguridad no todos los procesos se pueden realizar del lado del cliente (que por su propia naturaleza es “manipulable”). También existen restricciones de seguridad para impedir la carga de contenidos mediante Ajax desde sitios de terceras partes.

4.  La indexación para los motores de búsqueda se ve dificultada, con lo cual nuestros sitios web pueden perder visibilidad en los buscadores. No es lo mismo un contenido “constante” o aproximadamente estático, fácilmente rastreable para un buscador, que un contenido “cambiante” en función de la ejecución de JavaScript, difícilmente rastreable para un buscador.
