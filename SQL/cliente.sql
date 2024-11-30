-- show databases;
use Salvadora;
create table Cliente(
	CI INT (10) NOT NULL,
    nombre VARCHAR (20),
    apellido VARCHAR (20),
    telefono INT (8),
    PRIMARY KEY (CI)
);

show tables;

-- show para ver databases y tables
-- describe para ver table
-- delete borra todos los registros de la tabla

describe producto;