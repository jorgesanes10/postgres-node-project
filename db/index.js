const { Pool } = require('pg');

const dbConfig = {
  user: 'node_user',
  password: 'password',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
};

const pool = new Pool(dbConfig);

module.exports = pool;
