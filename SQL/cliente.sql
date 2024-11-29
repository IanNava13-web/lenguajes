show databases;
use Salvadora;
create table Cliente(
	CI INT (10) NOT NULL,
    nombre VARCHAR (20),
    apellido VARCHAR (20),
    telefono INT (8),
    PRIMARY KEY (CI)
);

show tables