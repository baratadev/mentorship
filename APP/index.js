const port = 3000;
const hostname = 'localhost';
const http = require('http');
const fs = require('fs');

// server
const server = http.createServer((req, res) => {
  // request
  console.log(req.url, req.method);

  // response
  // set header content-type
  res.setHeader('Content-Type', 'text/html');

  // read home page
  fs.readFile('./index.html', (err, data) => {
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
