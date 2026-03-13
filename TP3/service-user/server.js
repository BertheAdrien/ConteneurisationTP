const http = require('http');
http.createServer((req, res) => {
  res.end(JSON.stringify({ id: 1, name: "User Service" }));
}).listen(5001);
