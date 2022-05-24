Create database `19100197`;
Use `19100197`; 

Create table Producto(
id int not null AUTO_INCREMENT PRIMARY KEY, 
nombre varchar(30) not null,
descripcion varchar(45) null,
cantidad int not null,
proveedor varchar(30) not null,
caducidad varchar(10) not null,
categoria varchar(20) not null check (categoria='Lacteos' OR categoria='Carnes' 
									OR categoria='Frutas' OR categoria='Verduras'
									OR categoria='Cereales' OR categoria='Leguminosas' OR categoria='Cosas del hogar'),
codigo_barra varchar(30) not null,
importado varchar(2)
);

insert into Producto(id,nombre,descripcion,cantidad,proveedor,caducidad,categoria,codigo_barra,importado) values
					(1, 'Atun', '130gr', 5, 'Tuny', '22/04/23' , 'Carnes', '1223456789', 'Si');

insert into Producto(id,nombre,descripcion,cantidad,proveedor,caducidad,categoria,codigo_barra,importado) values
					(2, 'Galletas', '25gr', 10, 'Gamesa', '22/04/23', 'Cereales', '2345678910', 'No');

insert into Producto(id,nombre,descripcion,cantidad,proveedor,caducidad,categoria,codigo_barra,importado) values
					(3, 'Frijol Bolsa', '1kg', 20, 'Pinto', '22/04/23', 'Leguminosas', '3456789101', 'Si');

insert into Producto(id,nombre,descripcion,cantidad,proveedor,caducidad,categoria,codigo_barra,importado) values
					(4, 'Manzana bolsa', '1Kg', 25, 'MiArbol', '22/04/23', 'Frutas', '4567891011', 'No');

insert into Producto(id,nombre,descripcion,cantidad,proveedor,caducidad,categoria,codigo_barra,importado) values
					(5, 'Jabon en polvo', '500gr', 7, 'Foca', '22/04/23', 'Cosas del hogar', '5678912340', 'Si');