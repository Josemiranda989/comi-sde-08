-- MICRODESAFIO 1

-- por un lado, los títulos y el nombre del género de todas las series de la base de datos
SELECT series.title as titulo, genres.name as 'Nombre del genero' 
FROM series 
INNER JOIN genres ON genres.id = genre_id;

-- listar los títulos de los episodios junto con el nombre 
-- y apellido de los actores que trabajan en cada uno de ellos.

SELECT episodes.title as 'Titulo del episodio', CONCAT(actors.first_name, " ",actors.last_name) as 'Nombre y Apellido del Actor/Actriz' 
FROM episodes 
INNER JOIN actor_episode ON episodes.id = episode_id 
INNER JOIN actors ON actor_episode.actor_id = actors.id;

-- MICRODESAFIO 2
/*
obtener a todos los actores o actrices (mostrar
nombre y apellido) que han trabajado en 
cualquier película de la saga de la Guerra de las
galaxias, pero ¡cuidado!: 
debemos asegurarnos de que solo se muestre una sola vez cada
actor/actriz.
*/
SELECT DISTINCT actors.first_name, actors.last_name 
FROM actors 
INNER JOIN actor_movie ON actors.id = actor_id 
INNER JOIN movies ON movies.id = movie_id 
WHERE movies.title LIKE '%La Guerra de las galaxias%';

-- MICRODESAFIO 3
/*
Debemos listar los títulos de cada película con su género correspondiente. 
En el caso de que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.
Podemos encontrar más información haciendo click acá.
*/

SELECT
    m.title AS titulo,
    COALESCE(g.name, 'no tiene género') AS genero
FROM
    movies m
LEFT JOIN
    genres g ON m.genre_id = g.id;

-- MICRODESAFIO 4

/*
Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su fin, con
la particularidad de que a la columna que mostrará dicha cantidad la renombraremos:
“Duración”. Por ejemplo:
*/

SELECT
    s.title AS Titulo,
    DATEDIFF(s.end_date, s.release_date) AS Duracion
FROM
    series s;
    
-- MICRODESAFIO 5

/*
Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.

Debemos mostrar la cantidad total de los episodios guardados en la base de datos.

Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total
de temporadas que tiene cada una de ellas.

Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor
o igual a 3.

*/

SELECT * FROM actors WHERE LENGTH(first_name)>6 ORDER BY first_name;

SELECT * FROM actors WHERE char_length(first_name)>6 ORDER BY first_name;

SELECT * FROM actors WHERE LENGTH(first_name)>6 ORDER BY last_name, first_name;

SELECT
    CONCAT(first_name, ' ', last_name) AS nombre
FROM
    actors
WHERE
    LENGTH(CONCAT(first_name, ' ', last_name)) > 6
ORDER BY
    nombre ASC;
    
-- ------------------------------------------------------------------------
SELECT COUNT(id) AS 'Total de Episodios' FROM episodes;

-- ------------------------------------------------------------------------
SELECT
    s.title AS Titulo,
    COUNT(se.id) AS 'Total de Temporadas'
FROM
    series s
LEFT JOIN
    seasons se ON s.id = se.serie_id
GROUP BY
    s.id;
    
SELECT series.title AS Titulo, COUNT(seasons.id) AS 'Total de temporadas'
FROM seasons
INNER JOIN series ON seasons.serie_id = series.id
GROUP BY series.id;

select se.title, count(ss.id) as 'Total de Temporadas' 
from series se
inner join seasons ss on
ss.serie_id=se.id
group by(ss.serie_id);

-- ------------------------------------------------------------------------
SELECT genres.name AS Titulo, COUNT(movies.genre_id) AS 'Total de de peliculas'
FROM genres
INNER JOIN movies ON genres.id = genre_id
GROUP BY genres.id
HAVING COUNT(movies.id)>=3;

SELECT
    g.name AS Genero,
    COUNT(m.id) AS 'Cantidad de Peliculas'
FROM
    genres g
JOIN
    movies m ON g.id = m.genre_id
GROUP BY
    g.id
HAVING
    COUNT(m.id) >= 3;