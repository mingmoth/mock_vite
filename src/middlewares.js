const indexHTMLMiddleware = async (_req, res) => {
    const html = Bun.file("./index.html")
    const content = await html.text()
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end(content)
}

export {
    indexHTMLMiddleware
}