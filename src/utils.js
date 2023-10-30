import { file } from "bun"
import path from "path"

const ContentTypes = {
    html: "text/html",
    js: "text/javascript",
    css: "text/css",
    png: "image/png",
    jpg: "image/jpg",
}

function getFilePathAndContentType (filename) {
    if(filename === '/') {
        filename = 'index.html'
    }

    const extname = path.extname(filename).replace('.', '')
    const contentType = ContentTypes[extname] || ContentTypes.html
    const rootPath = process.cwd()
    const filePath = path.join(rootPath, filename)

    return {
        filePath,
        contentType
    }
}

export {
    getFilePathAndContentType
}