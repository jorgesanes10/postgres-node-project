CREATE TABLE products(
    id serial,
    name character varying(50),
    price real,
    quantity int
);

SELECT * FROM products WHERE name LIKE '%Strat%';