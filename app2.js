/**
* https://nodejs.org/en/docs/
* https://node-postgres.com/
*
*/

const http = require('http');
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'userrenic',
  host: '127.0.0.1',
  database: 'nuevadbrenic',
  password: '',
  port: 5432
});

const hostname="127.0.0.1";
const port = 3000;



const server = http.createServer((req,res) => {

  res.statusCode= 200;
  res.setHeader('Content-type','application/json');

  pool.query('SELECT * FROM mvbusquedas LIMIT 100',(err,result) => {
    res.write(JSON.stringify(result));
    res.end();
  });

  pool.end();
});

server.listen(port,hostname, () => {
  console.log(hostname+':'+port);
});
