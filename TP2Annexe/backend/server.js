const http = require('http');
http.createServer((req, res) => {
  // On ajoute les headers à la main pour éviter les blocages du navigateur
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ "message": "Hello from backend" })); // [cite: 38, 39, 40]
}).listen(3000);