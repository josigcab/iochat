const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/') {
    response.end("Match users");
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end("Page not Found");
  }
}).listen(5000);