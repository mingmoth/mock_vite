import http from "http"
import color from "picocolors"
import connect from "connect"
import { indexHTMLMiddleware } from "./src/middlewares"

const { PORT_HTTP, PROJECT_NAME } = process.env

const middleware = connect()


middleware.use(indexHTMLMiddleware)

http
  .createServer(middleware)
  .listen(PORT_HTTP, () => {})

console.log(color.green(`${PROJECT_NAME}`), 'server started at' ,color.green(`http://localhost:${PORT_HTTP}`))
