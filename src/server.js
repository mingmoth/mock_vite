import http from "http"
import color from "picocolors"
import connect from "connect"
import { indexHTMLMiddleware, replaceImportMiddleware } from "./middlewares.js"
import { createWebSocketServer } from "./webSocket.js"

const { PORT_HTTP, PROJECT_NAME } = process.env

const middleware = connect()

middleware.use(replaceImportMiddleware)
middleware.use(indexHTMLMiddleware)

function createServer() {
    createWebSocketServer()

    http
        .createServer(middleware)
        .listen(PORT_HTTP, () => {})

        console.log(color.green(`${PROJECT_NAME}`), 'server started at' ,color.green(`http://localhost:${PORT_HTTP}`))
}

export {
    createServer
}