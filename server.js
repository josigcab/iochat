const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let url = { 'url': req.url }
    res.write(JSON.stringify(url))
    res.end();
}).listen(5000);