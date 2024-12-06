const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response) => {
  pool.query(`SELECT * FROM products ORDER BY id`, (err, res) => {
    response.json(res.rows);
  });
});

router.get('/:id', (request, response) => {
  const { id } = request.params;

  pool.query('SELECT * FROM products WHERE id=$1', [id], (err, res) => {
    response.json(res.rows);
  });
});

router.post('/', (request, response) => {
  const { name, price, quantity } = request.body;

  pool.query(
    'INSERT INTO products(name, price, quantity) VALUES ($1, $2, $3)',
    [name, price, quantity],
    (err, res) => {
      response.send('Product added successfully!');
    },
  );
});

router.put('/:id', (request, response) => {
  const { id } = request.params;
  const { name, price, quantity } = request.body;

  pool.query(
    'UPDATE products SET name=$1, price=$2, quantity=$3 WHERE id=$4',
    [name, price, quantity, id],
    (err, res) => {
      response.send('Product updated successfully!');
    },
  );
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;

  pool.query('DELETE FROM products WHERE id=$1', [id], (err, res) => {
    response.send('Product deleted successfully!');
  });
});

module.exports = router;
