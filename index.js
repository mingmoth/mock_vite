import http from "http"
import color from "picocolors"

const { PORT_HTTP, PROJECT_NAME } = process.env

http
  .createServer((req, res) => {
    res.end("hello world")
  })
  .listen(PORT_HTTP, () => {})

console.log(color.green(`${PROJECT_NAME}`), 'server started at' ,color.green(`http://localhost:${PORT_HTTP}`))
