
# DB-Basics-Sequelize-MySQL

> Proyecto creado como ejemplo para la implementación de una base de datos MySQL con Sequelize, las tablas que vamos a manipular son **Productos** (que almacenan todos los datos pertinentes a un producto incluida la relación de categoria a la que pertenecer) , **Categorias de productos** (que almacenan las categorias disponibles de los productos),  **Usuarios** (que almacena informacion de los distintos usuarios que se van creando), **Historial de compras** (que registra las transacciones de compra, incluyendo el usuario, producto, cantidad y fecha de entrega)
> 
Estas tablas modelan un sistema de comercio electrónico donde los usuarios pueden comprar productos que pertenecen a diferentes categorías, y se registra un historial de compras que incluye detalles sobre los usuarios, productos y transacciones.

### Relaciones entre Tablas

#### Tabla: `categorias`
- **Relación:** Uno a Muchos con `productos`.
- **Descripción:** Una categoría puede tener varios productos, pero cada producto pertenece a una única categoría.

#### Tabla: `productos`
- **Relaciones:**
  - Muchos a Uno con `categorias`.
  - Uno a Muchos con `historial_compras`.
- **Descripción:**
  - Cada producto pertenece a una única categoría, pero una categoría puede tener varios productos.
  - Un producto puede tener múltiples entradas en el historial de compras.

#### Tabla: `usuarios`
- **Relación:** Uno a Muchos con `historial_compras`.
- **Descripción:** Un usuario puede tener múltiples entradas en el historial de compras, pero cada entrada pertenece a un único usuario.

#### Tabla: `historial_compras`
- **Relaciones:**
  - Muchos a Uno con `usuarios`.
  - Muchos a Uno con `productos`.
- **Descripción:**
  - Cada entrada en el historial de compras pertenece a un único usuario.
  - Cada entrada en el historial de compras pertenece a un único producto.


## Links

- [POSTMAN DOCUMENTACION](https://documenter.getpostman.com/view/17897182/2s9YeD9Dan)

- [Simple Queries](https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries)

- [Operators](https://sequelize.org/v4/manual/tutorial/querying.html#operators)


## INSTALACION

### Instalar dependencias

```bash
npm i
```

### 1. Crear la Base de Datos

Ejecutar el comando en la consola para crear de forma automatica la base de datos.

```bash
npx sequelize-cli db:create
```

### 2. Ejecutar Migraciones

Aplica todas las migraciones pendientes para crear las tablas en la base de datos.

```bash
npx sequelize-cli db:migrate
```

## Ejecutar Seeders

### 1. Ejecutar Seeders

Llena las tablas con datos de ejemplo usando seeders.

```bash
npx sequelize-cli db:seed:all
```

## Gestión Adicional

### Deshacer la Última Migración

Si necesitas deshacer la última migración:

```bash
npx sequelize-cli db:migrate:undo
```

### Deshacer Todos los Seeders

Si necesitas deshacer todos los seeders:

```bash
npx sequelize-cli db:seed:undo:all
```

### Documentacion POSTMAN

Podes probar todos los endpoint simplemente importando esta colección a tu postman local

[Documentacion 🚀🚀🚀🚀🚀](https://documenter.getpostman.com/view/17897182/2s9YeD9Dan)

##  Pull Request

- Agregar más consultas con relaciones

- Encriptacion de contraseñas (bycriptjs)

- Agregar paranoid para borrado lógico

- Validaciones con sequelize

## Authors
* [github/josemiranda989](https://github.com/josemiranda989)

* [github/guidomaimone](https://github.com/GuidoMaimone)

***