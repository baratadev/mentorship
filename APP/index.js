const port = 3000;
const hostname = 'localhost';
const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
// server
const server = http.createServer((req, res) => {
  // request
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  // response
  // set header content-type
  res.setHeader('Content-Type', 'text/html');

  // set path for html pages
  let urlPath = './pages/';

  // load html pages
  switch (url) {
    // home page
    case '/':
      urlPath += 'index.html';
      break;

    // users endpoint
    case '/users':
      if (method === 'GET') {
        urlPath += '/users/users.html';
        res.statusCode = 200;
      } else if (method === 'POST') {
        urlPath += '/users/add-user.html';
        res.statusCode = 200;
      } else if (method === 'PUT') {
        urlPath += '/users/edit-user.html';
        res.statusCode = 200;
      } else if (method === 'DELETE') {
        urlPath += '/users/delete-user.html';
        res.statusCode = 200;
      } else {
        console.log('405 - METHOD NOT ALLOWED');
        res.statusCode = 405;
      }
      break;
    // 404 page
    default:
      urlPath += '404.html';
      res.statusCode = 404;
      break;
  }

  // read html pages
  fs.readFile(urlPath, (err, data) => {
    if (err) {
      console.log(`SOMETHING WENT WRONG: ${err}`);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

// listen
server.listen(port, hostname, () => {
  console.log(`listening for requests on port ${port}`);
});
