# Modelo de Caja
## ¿Qué es el modelo de caja? 
---
El modelo de caja es una manera de representar los elementos HTML en una página web.  
Dichos elementos generan una “caja”  la cual tiene las características que veremos a continuación. 

Las propiedades de las cajas son:
- <b>Width</b> (Ancho) [Contenido]
- <b>Height</b> (Largo)
- <b>Padding</b> (Relleno) : Distancia desde el borde hacia el contenido.
- <b>Margin</b> (Margen) : Distancia de un elemento a otro.
- <b>Border</b> (Borde)
- <b>Background</b> (Fondo) : Ocupa todo el elemento desde los bordes.


<img src= "https://www.creatuwebnicaragua.com/wp-content/uploads/2015/08/modelo-de-caja.gif"></a>


Algunos de estos elementos, también tienen propiedades adicionales, para un mejor control y vista, por ejemplo:
- <b> Max-width</b>: Como su nombre lo indica, el ancho máximo que este puede tener. 
- <b>Min-width</b>: Lo contrario al Max, el mínimo de ancho posible.  
- <b>Max-height</b>: Altura máxima. 
- <b>Min-height</b>: Altura mínima. 

## Clasificaciones
-----
Las cajas también tienen diferentes clasificaciones, las Cajas de bloque y Cajas de línea. 

### Características de la caja de bloque: 
<ol>
<li>La caja hace un salto de línea al llegar al final de la línea.</li>
<li>La caja se extiende en la dirección de la línea para llenar todo el espacio que haya en su contenedor. Esto significa que casi siempre la caja será tan ancha como su contenedor, y llenará todo el espacio disponible.</li>
<li>Se respetan las propiedades width y height.</li>
El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

</ol>

### Características de la caja de línea (inline):
<ol>
<li>La caja no fuerza ningún salto de línea al llegar al final de la línea.</li>

<li>Las propiedades width y height no se aplican.</li>

<li>Se aplica relleno, margen y bordes **verticales**, pero no mantienen alejadas otras cajas en línea.</li>

<li>Se aplica relleno, margen y bordes **horizontales**, y mantienen alejadas otras cajas en línea.</li>
</ol>


## Tipos de visualización.
----
Existen dos tipos de visualización en nuestras cajas, la externa e interna.

La visualización interna determina como se acomodan los elementos dentro de la caja. 
De forma predeterminada, los elementos de una caja se comportan de tipo bloque, o inline.
Pero también podemos cambiar su visualización interna, utilizando propiedades como display y flex. 

Si en un elemento hacemos display: flex, el tipo de visualización será externa será de tipo bloque, pero la visualización interna será de tipo flex. 

