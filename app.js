const http = require('http');

const hostname="127.0.0.1";
const port = 3000;

const hola="hola mundo";

const server = http.createServer((req,res) => {

  res.statusCode= 200;
  res.setHeader('Content-type','text/plain');
  res.write(hola);
  res.end();
});

server.listen(port,hostname, () => {
  console.log(hostname+':'+port);
});
