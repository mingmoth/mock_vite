import { getFilePathAndContentType } from "./utils.js"

const indexHTMLMiddleware = async (req, res) => {
    try {
        const { filePath, contentType } = getFilePathAndContentType(req.url)

        const file = Bun.file(filePath)
        const content = await file.text()
        res.writeHead(200, {
            "Content-Type": contentType
        })
        res.end(content)
    } catch (error) {
        res.writeHead(500, {
            "Content-Type": "text/plain"
        })
        res.end("You have to create an index.html")
    }
}

export {
    indexHTMLMiddleware
}