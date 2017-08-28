const { Pool, Client } = require('pg');

const pool = new Pool({
  user: '',
  host: '127.0.0.1',
  database: '',
  password: '',
  port: 5432,
});


pool.query('SELECT json_agg(s) as jsonout  FROM (SELECT * FROM mvbusquedas LIMIT 10) as s',(err,res) => {

console.log(err,res)
pool.end()

});
