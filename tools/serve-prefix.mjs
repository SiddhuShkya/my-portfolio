import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const prefix = '/my-portfolio';
const port = 5000;

function contentType(file) {
    if (file.endsWith('.html')) return 'text/html; charset=utf-8';
    if (file.endsWith('.js')) return 'application/javascript; charset=utf-8';
    if (file.endsWith('.css')) return 'text/css; charset=utf-8';
    if (file.endsWith('.png')) return 'image/png';
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 'image/jpeg';
    return 'application/octet-stream';
}

const server = http.createServer(async (req, res) => {
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        if (!url.pathname.startsWith(prefix)) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        let rel = url.pathname.slice(prefix.length);
        if (rel === '' || rel === '/') rel = '/index.html';
        const filePath = path.join(distDir, rel);
        const stat = await fs.stat(filePath).catch(() => null);
        if (!stat || stat.isDirectory()) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        const content = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType(filePath) });
        res.end(content);
    } catch (err) {
        res.writeHead(500);
        res.end(String(err));
    }
});

server.listen(port, () => {
    console.log(`Serving dist at http://127.0.0.1:${port}${prefix}/`);
});

// export server for graceful shutdown if imported
export default server;
