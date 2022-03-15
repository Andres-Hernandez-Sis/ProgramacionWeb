
#FlexBox

#####Que es?
El Módulo de Caja Flexible, o flexbox, fue creado como un modelo unidimensional de diseño, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación. Este nos permite crear diseños de paginas web bastantes complejos

#####Que nos permite el flexbox?

Ya que el flexbox es un modulo completo y no solo una propiedad, este incluye todo un set de propiedades. Algunas de ellas destinada a establecerse en el contenerdor o **Elmento padre** conocido como el "Flex Container", mientras que otros estan destinados a establecerse en los elementos **Hijos** conocidos como "Flex elements."

Si el diseño regular esta basado en ambos bloques de flujo asi como en bloques in-line, El diseño flexible se  basa en direcciones de flujo flexibles. En donde podemos encontrar direcciones en el eje principal y el cruzado.


#####Propiedades del Padre (Flex Container)

1.- **display**: Define un contenedor flexible, inline o en bloque, dependiendo del valor dato. Algunos de sus valores son:

+ Flex
+ inline-flex

2.- **flex-direction**: Establece un eje principal definiendo asi la direccion en la que se colocan los elementos flexibles en flex-content. Algunos de sus valores son:

+ row
+ row-reverse
+ column
+ column-reverse

3.- **flex-wrap**: Por defecto, los elementos flexibles intentan encajar en una lina. Por lo que podemos cambiar eso y permitir que los elementos se ajusten como necesite con esta propiedad. Algunos de sus valores son:

+ nowwrap
+ wrap
+ wrap-verse

4.- **flex-flow**: Es una abreviacion para las propiedades flex-direction y el flex-wrap, que sirve para que definan juntos el flex container principal y las lineas de los ejes.
Algunos de sus valores son:

+ column wrap
+ Por defecto: row nowrap

5.- **justify-content**: Define la alineacion del eje principal. Ayuda a distribuir espacio libre extra cuando todos los elementos flexibles de una línea son inflexibles o son flexibles pero han alcanzado su tamaño máximo.
Algunos de sus valores son:

+ flex-start
+ flex-end
+ start
+ end
+ left, right, center, space
+ space-between, sapce-around, space evenly


6.- **align-items**: Define el comportamiento predeterminado de como se distribuyen los objetos flexibles a lo largo del eje cruzado en la linea actual. Algunos de sus elementos son:

+ stretch(default)
+ flex-start, start, self-start
+ flex-end, end, self-end
+ center
+ baseline
  
7.- **align-content**: Alinea el contenedor flexible cuando hay espacio de mas en el eje cruzado, similar a cuando el justify content alinea los elementos individiales dentro del eje principal. Algunos de sus elementos son: 

+ normal (default)
+ flex-start, start
+ flex-direction, flex-end, end
+ center
+ space-between, sapce-around, space evenly, stretch

8.- **gap, row-gap, column-gap**: La propuedas gap, controla explícitamente el espacio entre los elementos flexibles. Se aplica ese espacio solo entre elementos que no están en los bordes exteriores.


#####Propiedades del Hijo (Flex Items)

1.- **Order**: Por default, los elementos(items) flexibles se presentan en el orden de origen. Sin embargo, la propiedad order controla el orden en que aparecen en el contenedor flexible. 

2.- **Flex-grow**: Define la capacidad de crecimiento de un item flexible si es necesario. Acepta un valor sin unidades que sirve como proporción. Esto determina qué cantidad de espacio disponible dentro del contenedor flexible debe ocupar el artículo. Algunos de sus elementos son: 

3.- **flex-shrink**: Define la capacidad de que un elemento flexible se encoja si es necesario.

4.- **flex-basis**: Define el tamaño predeterminado de un elemento antes de que se distribuya el espacio restante. 

5.- **flex**: Esta es la abreviatura de flex-grow, flex-shrink y flex-basis combinados. Los parámetros segundo y tercero (flex-shrink y flex-base) son opcionales.

6.- **align-self**: Nos permite anular la alineación predeterminada (o la especificada por elementos de alineación) para elementos flexibles individuales.