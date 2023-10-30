import path from "path"
import { getFilePathAndContentType } from "./utils.js"

const indexHTMLMiddleware = async (req, res) => {
    try {
        const { filePath, contentType } = getFilePathAndContentType(req.url)

        const file = Bun.file(filePath)
        let content = await file.text()

        const clientScript = `<script src="src/client.js"></script>`

        if(path.basename(filePath === 'index.html')) {
            const regex = /(<head>)([\s\S]*?<\/head>)/i
            const match = content.match(regex)

            if(match) {
                content = content.replace(match[0], match[1] + clientScript + match[2])
            }
        }
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