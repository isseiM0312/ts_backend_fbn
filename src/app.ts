import * as http from 'http';


const port = 3000; // ポート番号

// httpサーバーを設定する
const server = http.createServer(
  (request : http.IncomingMessage, response : http.ServerResponse<http.IncomingMessage>) => {
    // サーバーにリクエストがあった時に実行される関数
    response.end("Hello! Node.js with TypeScript");
  }
);
// サーバーを起動してリクエストを待ち受け状態にする
server.listen(port);
// ログを出力する