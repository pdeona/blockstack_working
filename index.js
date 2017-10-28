let http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('fuck u eddy');
});

server.listen(8080);
