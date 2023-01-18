import * as http from 'http';


const port = 3000;

const server = http.createServer(
  (request : http.IncomingMessage, response : http.ServerResponse<http.IncomingMessage>) => {
    response.end("Hello! Node.js with TypeScript");
  }
);
server.listen(port);