// server.js
const http = require('http');
http.createServer((req, res) => {
  res.end(JSON.stringify({ id: 1, name: "Rayth" }));
}).listen(5001); // Port demandé par le TP [cite: 149]