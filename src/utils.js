import fs from "fs"
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

function getEntryPoint(module) {
    if(!module.endsWith('.js')) {
        const packageFile = `node_modules/${module}/package.json`
        const content = fs.readFileSync(packageFile, 'utf-8')
        const { main } = JSON.parse(content)

        return `${module}/${main}`
    }
    return module
}

export {
    getEntryPoint,
    getFilePathAndContentType
}