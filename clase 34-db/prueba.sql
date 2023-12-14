-- Link diagrama que hicimos en clase
-- https://app.dynobird.com/?action=open&id=f8a8aac9-46ad-461f-b65a-452e98f2ec2d

-- Crear la base de datos
CREATE DATABASE clase34;

-- Usar la base de datos
USE clase34;

-- Crear la primera tabla
CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
-- Crear la segunda tabla con relaciones
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);


-- Realizar un ALTER TABLE en la primera tabla
ALTER TABLE products ADD COLUMN discount BOOLEAN;
