import http from "http"
import color from "picocolors"
import connect from "connect"

const { PORT_HTTP, PROJECT_NAME } = process.env

const middleware = connect()
const indexHTMLMiddleware = (req, res) => {
    res.end("hello from connect middleware")
}

middleware.use(indexHTMLMiddleware)

http
  .createServer(middleware)
  .listen(PORT_HTTP, () => {})

console.log(color.green(`${PROJECT_NAME}`), 'server started at' ,color.green(`http://localhost:${PORT_HTTP}`))
