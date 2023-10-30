import http from "http"
import color from "picocolors"
import connect from "connect"

const { PORT_HTTP, PROJECT_NAME } = process.env

const middleware = connect()
const indexHTMLMiddleware = async (_req, res) => {
    const html = Bun.file("./index.html")
    const content = await html.text()
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end(content)
}

middleware.use(indexHTMLMiddleware)

http
  .createServer(middleware)
  .listen(PORT_HTTP, () => {})

console.log(color.green(`${PROJECT_NAME}`), 'server started at' ,color.green(`http://localhost:${PORT_HTTP}`))
