const WebSocket = require("ws");
const exchangeDate = require('./exchangeData');
const wsPORT = process.env.WS_PORT || 6005
let clients = [];

const ConnectionStatus = [
  "CONNECTING", "OPEN", "CLOSING", "CLOSED", "UNINSTANTIATED",
]

async function wsInit() {
  const server = new WebSocket.Server({ port: wsPORT })

  console.log(`socket start!`)
  server.on('connection', async (ws) => {
    const result = await exchangeDate.getResult(0);
    clients.push(ws);   //연결되었을 때 연결된 소켓에게 최초 정보들 보내주기. 이후에는 각 트랜잭션/오더 테이블 조작할 때마다 send
    initErrorHandler(ws)
    ws.send(JSON.stringify(result))
  })
}

function initErrorHandler(ws) {
  ws.on("close", () => { closeConnection(ws) })
  ws.on("error", () => { closeConnection(ws) })
}

function closeConnection(ws) {
  console.log(`Connection close ${ws.url}`)
  clients.splice(clients.indexOf(ws), 1)
}

function broadcast(message) {  //객체형태로 메시지 전해주기. 그럼 stringify가 알아서 변환해줌. 
  clients.forEach(client => {
    if (ConnectionStatus[client.readyState] === 'OPEN') {
      client.send(JSON.stringify(message))
    }
  })
}

async function commission(cnt) {
  const result = await exchangeDate.getResult(cnt);
  broadcast(result);
}

module.exports = {
  wsInit,
  broadcast,
  commission,
}