const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Madhumitha Thiyagarajan</h1><p>Electronics and Communication Engineer</p><p>From Trichy, Studied at SRM TRP Engineering College</p>');
});

server.listen(80, () => {
  console.log('Server running at http://localhost/');
});
