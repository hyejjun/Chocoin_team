const WebSocket = require("ws");
const wPORT = process.env.WS_PORT || 6005;
let clients = [];

const ConnectionStatus = [
    "CONNECTING", "OPEN", "CLOSING", "CLOSED", "UNINSTANTIATED",
  ];

async function wsInit() {
    const server = new WebSocket.Server({ port: wPORT });   // 서버 실행하겠다.
    console.log(`WebSocket Connected Port : ${wPORT}`);
    server.on('connection', async (ws) => {
        console.log('server connnection on');
        clients.push(ws);
        ws.send(JSON.stringify({userid:'1234'}));
    })
};

function initErrorHandler(ws) {
    ws.on("close", () => { closeConnection(ws) })
    ws.on("error", () => { closeConnection(ws) })
};

function closeConnection(ws) {
    console.log(`disconnection ${ws.url}`)
    clients.splice(clients.indexOf(ws), 1)
};

function broadcast(message) {  //객체형태로 메시지 전해주기. 그럼 stringify가 알아서 변환해줌. 
    clients.forEach(client => {
      if (ConnectionStatus[client.readyState] === 'OPEN') {
        client.send(JSON.stringify(message))
      }
    })
};

module.exports = {
    wsInit,
    broadcast,
}