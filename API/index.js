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

  // case for each request method
  switch (url) {
    case '/':
      if (method === 'GET') {
        res.write('{"show": "users"}');
      } else if (method === 'POST') {
        res.write('{"add": "user"}');
      } else if (method === 'PUT') {
        res.write('{"edit": "user"}');
      } else if (method === 'DELETE') {
        res.write('{"user": "delete"}');
      } else {
        res.write('{"not": "allowed"}');
      }
      break;

    default:
      res.write('{"not": "found"}');
      break;
  }

  // end response
  res.end();
});

// listen
server.listen(port, hostname, () => {
  console.log(`listening for requests on port ${port}`);
});
