const { Pool, Client } = require('pg');

const pool = new Pool({
  user: '',
  host: '127.0.0.1',
  database: '',
  password: '',
  port: 5432,
});


pool.query('SELECT * FROM mvbusquedas LIMIT 100',(err,res) => {

console.log(err,res)
pool.end()

});
