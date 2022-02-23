const port = 3001;
const hostname = 'localhost';
const http = require('http');

// server
const server = http.createServer((req, res) => {
  // request
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  // response header content-type
  res.setHeader('Content-Type', 'application/json');

  // response
  res.write('{"name": "barata"}');
  res.end();
});

// listen
server.listen(port, hostname, () => {
  console.log(`listening for requests on port ${port}`);
});
