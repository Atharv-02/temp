const http = require('http');
const { readFileSync } = require('fs');
// get all files
const homePage = readFileSync('./index.html');
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>about page</h1>');
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Error page</h1>');
  }
});
server.listen(5500);
