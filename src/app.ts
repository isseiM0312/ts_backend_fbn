import * as http from 'http';
import * as fs from 'fs';


const port = 3000;
const fileName : string = './src/test.html'
//あくまでカレントディレクトリはランタイムの実行環境がいるとことになるから、ルートから実行した場合src/test.htmlになる

const server = http.createServer(
  (request : http.IncomingMessage, response : http.ServerResponse<http.IncomingMessage>) => {
    fs.readFile(fileName, 'utf8', (err, data)=> {
        console.log(err);
        console.log(data);
        response.write(data);
        response.end();
    });
    
  }
);
server.listen(port);