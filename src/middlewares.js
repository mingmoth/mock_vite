import path from "path"
import {
    getEntryPoint,
    getFilePathAndContentType
} from "./utils.js"

const excludeFileList = [
    "/src/client.js",
]

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

const replaceImportMiddleware = async (req, res, next) => {
    const { url } = req
    if(url.endsWith(".js") && !excludeFileList.includes(url)) {
        const { filePath, contentType } = getFilePathAndContentType(url)
        const file = Bun.file(filePath)
        let content = await file.text()

        const regex = /from ['"](?!\.\/)([^'"]+)['"]/g

        content = content.replace(regex, `from "../node_modules/$1"`)

        res.writeHead(200, {
            "Content-Type": contentType
        })
        res.end(content)
    }
    next()
}

export {
    indexHTMLMiddleware,
    replaceImportMiddleware
}