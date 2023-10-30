import { WebSocketServer } from "ws"

const { PORT_WS } = process.env

function createWebSocketServer() {
    const wsServer = new WebSocketServer({ port: PORT_WS })

    wsServer.on("connection", (ws) => {
        console.log("Client connected");

        ws.on("message", (data) => {
            console.log(`Received message: ${data}`);
        })
    })
}

export {
    createWebSocketServer
}