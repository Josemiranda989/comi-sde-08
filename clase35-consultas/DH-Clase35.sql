use movies_db;
-- INSERT INTO genres (active, name, ranking) VALUES (1, 'Investigacion', 13);

-- select * from genres order by id desc
 select * from genres where id=13;

-- update genres set name='Investigacion Científica' where id=13;

delete from genres where id='13';

select * from movies;
select first_name, last_name, rating from actors;
select title as titulo from series as series;

select first_name, last_name from actors where rating>7.5;
select title, rating, awards from movies where rating>7.5 and awards>2;
select title, rating from movies order by rating ASC;

select * from movies limit 3;

select * from movies order by rating desc limit 5;

select  * from movies order by rating desc limit 5 offset 5;

select * from actors limit 10;
select * from actors limit 10 offset 20; 

select title, rating from movies where title like '%harry potter%';
select title, rating from movies where title = 'harry potter';

select * from actors where first_name like 'Sam%';

select title from movies where year(release_date) between '2004' and '2008';
select * from movies order by release_date;
