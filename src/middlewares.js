import { getFilePathAndContentType } from "./utils.js"

const indexHTMLMiddleware = async (req, res) => {
    const { filePath, contentType } = getFilePathAndContentType(req.url)

    const file = Bun.file(filePath)
    const content = await file.text()
    res.writeHead(200, {
        "Content-Type": contentType
    })
    res.end(content)
}

export {
    indexHTMLMiddleware
}